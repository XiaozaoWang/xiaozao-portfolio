"use client";
import { useEffect, useRef } from "react";

export function FullPageP5Sketch() {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<any>(null);

  useEffect(() => {
    // Dynamically import p5.js to avoid SSR issues
    import("p5").then((p5Module) => {
      const p5 = p5Module.default;

      const sketch = (p: any) => {
        let prism: any;
        let prisms: any[] = []; // needs to be developed
        let beams: any[] = [];

        //customizable parameters
        let rainbow = true;
        let rotate_amount: any;

        const rarerToDenser = 1.5; // refractive index
        const denserToRarer = 0.67; // refractive index

        p.setup = () => {
          // Full viewport canvas for landing page
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          if (sketchRef.current) {
            canvas.parent(sketchRef.current);
          }
          p.colorMode(p.HSB, 360);
          prism = new Prism(p.mouseX, p.mouseY, (p.height * 1) / 10);
          for (let i = 0; i < 8; i++) {
            beams.push(new Beam(0, p.random(p.height), p.random(2 * p.PI), 30));
            beams.push(
              new Beam(p.width, p.random(p.height), p.random(2 * p.PI), 30)
            );
            beams.push(new Beam(p.random(p.width), 0, p.random(2 * p.PI), 30));
            beams.push(
              new Beam(p.random(p.width), p.height, p.random(2 * p.PI), 30)
            );
          }
        };

        p.draw = () => {
          p.background(0);

          prism.show();
          prism.update();
          for (let beam of beams) {
            beam.show();
            beam.touch(prism);
          }
        };

        p.keyPressed = () => {
          if (p.key == "r" || p.key == "R") {
            rainbow = !rainbow;
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          // Recreate prism with new size
          prism = new Prism(p.mouseX, p.mouseY, (p.height * 1) / 10);
        };

        class Surface {
          a: any;
          b: any;
          p3: any;
          mid: any;
          inner_normal_dir: any;
          theta: any;
          inner_normal_angle: any;
          outer_normal_angle: any;

          constructor(a: any, b: any, p3: any) {
            this.a = a;
            this.b = b;
            this.p3 = p3;
            this.mid = p.createVector((a.x + b.x) / 2, (a.y + b.y) / 2);
            this.inner_normal_dir = p.createVector(
              p3.x - this.mid.x,
              p3.y - this.mid.y
            );
            this.theta = p.atan(
              this.inner_normal_dir.y / this.inner_normal_dir.x
            );
            this.theta = p.abs(this.theta);

            if (this.inner_normal_dir.x >= 0 && this.inner_normal_dir.y < 0) {
              this.inner_normal_angle = 2 * p.PI - this.theta;
              this.outer_normal_angle = this.inner_normal_angle - p.PI;
            } else if (
              this.inner_normal_dir.x < 0 &&
              this.inner_normal_dir.y <= 0
            ) {
              this.inner_normal_angle = p.PI + this.theta;
              this.outer_normal_angle = this.inner_normal_angle - p.PI;
            } else if (
              this.inner_normal_dir.x <= 0 &&
              this.inner_normal_dir.y > 0
            ) {
              this.inner_normal_angle = p.PI - this.theta;
              this.outer_normal_angle = this.inner_normal_angle + p.PI;
            } else if (
              this.inner_normal_dir.x > 0 &&
              this.inner_normal_dir.y >= 0
            ) {
              this.inner_normal_angle = this.theta;
              this.outer_normal_angle = this.inner_normal_angle + p.PI;
            }
          }
        }

        class Prism {
          pos: any;
          height: any;
          v1: any;
          v2: any;
          v3: any;
          angle: any;

          constructor(px: any, py: any, height: any) {
            this.pos = p.createVector(px, py);
            this.height = height;
            this.v1 = p.createVector(
              this.height * (-p.sqrt(3) / 3),
              (this.height * 1) / 3
            );
            this.v2 = p.createVector(
              this.height * (p.sqrt(3) / 3),
              (this.height * 1) / 3
            );
            this.v3 = p.createVector(0, this.height * (-2 / 3));
            this.angle = 0;
          }

          show() {
            p.push();
            p.translate(this.pos.x, this.pos.y);
            p.stroke(360);
            p.circle(0, 0, 1);
            p.line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
            p.line(this.v2.x, this.v2.y, this.v3.x, this.v3.y);
            p.line(this.v1.x, this.v1.y, this.v3.x, this.v3.y);
            p.beginShape();
            p.fill(255, 100);
            p.noStroke();
            p.vertex(this.v1.x, this.v1.y);
            p.vertex(this.v2.x, this.v2.y);
            p.vertex(this.v3.x, this.v3.y);
            p.endShape();
            p.pop();
          }

          update() {
            this.rotate();
            this.pos.x = p.mouseX;
            this.pos.y = p.mouseY;
          }

          rotate() {
            if (p.keyIsPressed || p.mouseIsPressed) {
              let rotate_amount;
              if (p.keyCode == p.RIGHT_ARROW || p.mouseIsPressed) {
                this.angle += p.PI / 180;
                rotate_amount = p.PI / 180;
              } else if (p.keyCode == p.LEFT_ARROW) {
                this.angle -= p.PI / 180;
                rotate_amount = -p.PI / 180;
              } else {
                this.angle += 0;
                rotate_amount = 0;
              }
              this.v1.x =
                this.v1.x * p.cos(rotate_amount) -
                this.v1.y * p.sin(rotate_amount);
              this.v1.y =
                this.v1.x * p.sin(rotate_amount) +
                this.v1.y * p.cos(rotate_amount);
              this.v2.x =
                this.v2.x * p.cos(rotate_amount) -
                this.v2.y * p.sin(rotate_amount);
              this.v2.y =
                this.v2.x * p.sin(rotate_amount) +
                this.v2.y * p.cos(rotate_amount);
              this.v3.x =
                this.v3.x * p.cos(rotate_amount) -
                this.v3.y * p.sin(rotate_amount);
              this.v3.y =
                this.v3.x * p.sin(rotate_amount) +
                this.v3.y * p.cos(rotate_amount);
            }
            if (this.angle > 2 * p.PI) {
              this.angle = this.angle % (2 * p.PI);
            }
          }
        }

        class Beam {
          start: any;
          angle: any;
          originAngle: any;
          fluctuateFrq: any;
          fluctuateAmp: any;
          dir: any;
          length: any;
          incidence_angle: any;
          state: any;

          constructor(startx: any, starty: any, angle: any, length: any) {
            this.start = p.createVector(startx, starty);
            this.angle = angle;
            this.originAngle = angle;
            this.fluctuateFrq = p.random(0.005, 0.015);
            this.fluctuateAmp = p.random(0.03, 0.06);
            this.dir = p5.Vector.fromAngle(angle);
            this.length = length;
            this.incidence_angle = null;
            this.state = false;
          }

          show() {
            let angle =
              this.originAngle +
              p.sin(p.frameCount * this.fluctuateFrq) * this.fluctuateAmp;
            this.dir = p5.Vector.fromAngle(angle);
            p.push();
            p.translate(this.start.x, this.start.y);
            if (this.state == false) {
              p.stroke(210);
              p.line(0, 0, this.dir.x * 4000, this.dir.y * 4000);
            }
            p.stroke(330);
            p.strokeWeight(2);
            p.line(0, 0, this.dir.x * this.length, this.dir.y * this.length);
            p.strokeWeight(1);
            p.pop();
          }

          touch(prism: any) {
            let surfaces: any[] = [];
            surfaces.push(new Surface(prism.v1, prism.v2, prism.v3));
            surfaces.push(new Surface(prism.v2, prism.v3, prism.v1));
            surfaces.push(new Surface(prism.v1, prism.v3, prism.v2));

            let closer: any = null;
            let farther: any = null;
            let closer_surface: any = null;
            let record_closer = Infinity;
            let record_farther = 0;
            let closer_angle: any = null;
            let closer_surface_angle: any = null;
            let farther_surface: any = null;
            let inner_angle: any = null;
            let outer_angle: any = null;

            for (let surface of surfaces) {
              let returned = this.intersect(surface);
              if (returned) {
                let pt = returned[0];
                let surface = returned[1];
                const d = p5.Vector.dist(this.start, pt);
                if (d < record_closer) {
                  record_closer = d;
                  closer = pt;
                  closer_surface = surface;
                }
                if (d > record_farther) {
                  record_farther = d;
                  farther_surface = surface;
                }
              }
            }

            if (closer) {
              this.state = true;
              p.stroke(250);
              p.line(this.start.x, this.start.y, closer.x, closer.y);
              p.circle(closer.x, closer.y, 3);

              let normal_1in = closer_surface.inner_normal_angle;
              let normal_1out = closer_surface.outer_normal_angle;
              let incidence_angle = normal_1in - this.angle;
              if (incidence_angle > p.PI / 2) {
                incidence_angle = -(2 * p.PI - incidence_angle);
              } else if (incidence_angle < -p.PI / 2) {
                incidence_angle = 2 * p.PI + incidence_angle;
              }

              this.drawReflection(closer.x, closer.y, normal_1out, this.angle);

              let r1 = p.asin(p.sin(p.abs(incidence_angle)) / rarerToDenser);
              if (incidence_angle >= 0) {
                inner_angle = (normal_1in - r1) % (2 * p.PI);
              } else if (incidence_angle < 0) {
                inner_angle = (normal_1in + r1) % (2 * p.PI);
              }

              let inner_dir = p5.Vector.fromAngle(inner_angle);
              let inner = new Beam(closer.x, closer.y, inner_angle, 1);
              let returned = inner.intersect(farther_surface);

              if (returned) {
                let pt2 = returned[0];
                let farther_surface = returned[1];
                p.circle(pt2.x, pt2.y, 3);
                p.stroke(300);
                p.line(closer.x, closer.y, pt2.x, pt2.y);

                let normal_2in = farther_surface.inner_normal_angle;
                let normal_2out = farther_surface.outer_normal_angle;

                let r2 = p.PI / 3 - r1;
                let emergence_angle = p.asin(p.sin(r2) / denserToRarer);
                let inner_incidence_angle = normal_2out - inner_angle;
                if (inner_incidence_angle > p.PI / 2) {
                  inner_incidence_angle = -(2 * p.PI - inner_incidence_angle);
                } else if (inner_incidence_angle < -p.PI / 2) {
                  inner_incidence_angle = 2 * p.PI + inner_incidence_angle;
                }

                if (inner_incidence_angle >= 0) {
                  outer_angle = (normal_2out - emergence_angle) % (2 * p.PI);
                } else if (inner_incidence_angle < 0) {
                  outer_angle = (normal_2out + emergence_angle) % (2 * p.PI);
                }

                let outer_dir = p5.Vector.fromAngle(outer_angle);
                p.push();
                p.translate(pt2.x, pt2.y);
                for (let i = 0; i < 10; i++) {
                  p.push();
                  if (rainbow == true) {
                    let hue = p.map(i, 10, 0, 300, 0);
                    p.stroke(hue, 360, 360);
                  } else {
                    p.stroke(360);
                  }
                  let spread = p.map(i, 0, 10, -p.PI / 60, p.PI / 60);
                  p.rotate(spread);
                  p.line(0, 0, outer_dir.x * 4000, outer_dir.y * 4000);
                  p.pop();
                }
                p.pop();
              }
            } else {
              this.state = false;
            }
          }

          drawNormal(x: any, y: any, normal_angle: any) {
            let dir = p5.Vector.fromAngle(normal_angle);
            p.line(x, y, x + dir.x * 20, y + dir.y * 20);
            p.stroke(0, 360, 360);
            p.line(x, y, x - dir.x * 20, y - dir.y * 20);
            p.stroke(210);
          }

          drawReflection(x: any, y: any, normal: any, beam: any) {
            let ref_angle = normal - ((beam - p.PI) % (2 * p.PI)) + normal;
            let dir = p5.Vector.fromAngle(ref_angle);
            p.stroke(44, 40, 60);
            p.line(x, y, x + dir.x * 4000, y + dir.y * 4000);
            p.stroke(210);
          }

          intersect(surface: any) {
            const x1 = surface.a.x + p.mouseX;
            const y1 = surface.a.y + p.mouseY;
            const x2 = surface.b.x + p.mouseX;
            const y2 = surface.b.y + p.mouseY;

            const x3 = this.start.x;
            const y3 = this.start.y;
            const x4 = this.start.x + this.dir.x;
            const y4 = this.start.y + this.dir.y;

            const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

            if (den == 0) {
              return;
            }

            const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
            const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

            if (t > 0 && t < 1 && u > 0) {
              const pt = p.createVector();
              pt.x = x1 + t * (x2 - x1);
              pt.y = y1 + t * (y2 - y1);
              let surface_angle = p.atan((y1 - y2) / (x1 - x2));
              let arr = [pt, surface];
              return arr;
            } else {
              return;
            }
          }
        }
      };

      if (sketchRef.current && !p5Instance.current) {
        p5Instance.current = new p5(sketch);
      }
    });

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}
