import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function PrismPost() {
  const postData = posts.find((p) => p.slug === "prism");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-violet-500 dark:!text-white">
          An aesthetic simulation of light refraction.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              This project employs object-oriented programming in p5.js to
              create{" "}
              <strong>
                an interactive and visually engaging simulation of light
                refraction through prisms.
              </strong>{" "}
              Multiple light beams with varying directions are rendered on the
              canvas, and users can translate and rotate a prism to intersect
              with the beams, producing refracted light. Due to the different
              indices of refraction for individual wavelengths, the refracted
              light separates into a spectrum of colors, forming a rainbow-like
              visual effect. By applying principles of optics and precise
              mathematical calculations, the system accurately determines the
              refraction angle for any given incident angle.
            </p>
            <p>
              While scientific simulations often prioritize accuracy and
              clarity, and artistic works frequently emphasize expressive
              freedom, the dialogue between these two approaches is not always
              fully explored. This project seeks to bridge artistic expression
              and scientific reasoning by treating physical laws not as
              constraints, but as generative structures for visual design.
              Through this integration, the project aims to support a deeper
              understanding of optical phenomena while simultaneously inviting
              viewers to appreciate the aesthetic richness that emerges from
              physically grounded systems.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>p5.js</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>
            <p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Project Link
              </a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Live Demo</h2>
          <p className="mb-4">
            <strong>Instruction: Press to rotate the prism.</strong>
          </p>
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <iframe
              src="https://editor.p5js.org/Xiaozao/full/8zQV6aCxY"
              className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-200 dark:border-gray-700"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <p className="mb-4">
            <strong>1. Design and composition</strong>
          </p>
          <ZoomableImage
            src="/blog-images/prism/1.png"
            alt="Image"
            className="w-4/5 mb-4"
          />
          <p className="mb-4">
            <strong>2. Technical Development</strong>
          </p>
          <p className="mb-4">
            Firstly, I analyzed what refraction and reflection lines I should
            draw, and learned about how to calculate the refraction angle.
          </p>
          <ZoomableImage
            src="/blog-images/prism/2.png"
            alt="Image"
            className="w-1/2 mb-4"
          />
          <p className="mb-4">
            This graph best describes the process of the calculation. It shows
            that we need to know the normals of line AB and AC, the angle of A,
            the incidence angle i1, and the refraction index to calculate the
            emergence angle.
          </p>
          <p className="mb-4">
            After knowing about the formula and essential variables to calculate
            the angle, I then have to transform them into what we can operate on
            in p5js. In other words, it's useful for me to build some classes
            and create corresponding instances, so that I can set the attributes
            of the instance and apply the formula to them. The object-oriented
            programming will make the code more reuseable and can be generally
            applied.
          </p>
          <p className="mb-4">
            I decided to first write a test program to test the case that one
            light beam intersects one prism. The angle of the light beam was set
            to zero degree to simplify the case.
          </p>
          <p className="mb-4">
            How to calculate the intersection of two lines (or one line and one
            ray)? Prof. Moon suggested watching{" "}
            <a
              href="https://youtu.be/TOEi6T2mtHo?si=Qn-ZUf-yBzshN7ud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              the 2D raycasting by the Coding Train
            </a>{" "}
            to me and that video helped me a lot. It not only helped me with
            calculating the intersection point, but also inspired me of using a
            framework of object-oriented programming to build my project.
          </p>
          <p className="mb-4">
            Inspired by the video, I created 2 classes at first: The Prism class
            and the Beam class. The Prism class consists of 3 vertices of the
            prism so that the 3 surfaces of the prism can also be calculated
            through the 3 vertices.
          </p>
          <ZoomableImage
            src="/blog-images/prism/3.png"
            alt="Image"
            className="w-1/2 mb-4"
          />
          <p className="mb-4">
            And then I realized an issue. By knowing the vertices and their
            corresponding lines, I can calculate the intersection points.
            However, when I want to rotate the prism, if I simply use the
            rotate(angle) function and the push(), pop(), it only rotates the
            visual representation of the line, but doesn't actually rotate its
            position in the coordinate, so that the calculation of the
            intersection point was not applicable when the prism is being
            rotated. Therefore, I searched for methods to rotate the positions
            of the vertices themselves. Sounds like the rotation matrix can help
            me do this.
          </p>
          <ZoomableImage
            src="/blog-images/prism/4.png"
            alt="Image"
            className="w-1/2 mb-4"
          />
          <p className="mb-4">
            Source:{" "}
            <a
              href="https://www.cuemath.com/algebra/rotation-matrix/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              https://www.cuemath.com/algebra/rotation-matrix/
            </a>
          </p>
          <p className="mb-4">
            Another challenge was that there are two refractions in the process.
            The first one happens inside the prism with the refraction index
            larger than 1 (rarer to denser), and the second one happens outside
            the prism with the refraction index smaller than 1 (denser to
            rarer). Since the two have something in common and I have already
            wrote a lot of code for the first refraction, I would really like to
            reuse the code when calculating the second refraction. To do this, I
            created another Beam instance from the first intersection point so
            that it can calculate the second intersection point with the second
            surface automatically. I guess this uses some concepts of recursion.
          </p>
          <ZoomableImage
            src="/blog-images/prism/5.png"
            alt="Image"
            className="w-1/2 mb-4"
          />
          <p className="mb-4">
            <strong>
              Try{" "}
              <a
                href="https://editor.p5js.org/Xiaozao/sketches/hpfQGxFVS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                this demo
              </a>{" "}
              for the optical effect of a prism.
            </strong>
          </p>
          <p className="mb-4">
            One helpful thing for this situation is to clear my code from the
            beginning and unify some measurements. For example, we can see that
            in the case of zero degreed light beam, the only possible angle of
            incidence lies in (-PI/2, PI/2), and if I discuss it by 2
            classifications, the angle of incidence will lie in (0, PI/2) under
            a narrower condition. However, when the angle of the light beam is
            changed, this way of calculation is not useable anymore. Therefore,
            I tried to unify the measurement of angles in many ways, and failed
            several times.
          </p>
          <p className="mb-4">
            One way that I spent much time on was to transform all the angles to
            (-PI/2, PI/2). It's because the tangent value is unique when the
            angle is limited to (-PI/2, PI/2). However, after several attempts,
            I found that it's still not applicable for all cases. I also tried
            the (0, 2PI) measurement but found that it is making the situation
            too complicated.
          </p>
          <p className="mb-4">
            Therefore, I thought from another angle. If only changing the
            measurements does not work out, then we have to adjust the way class
            instances are arranged. I realized that the difficulty was there
            because the class instance doesn't store enough information for me
            to get the calculation done easily. Therefore I added another class,
            Surface, which keeps track of the three surfaces of the prism and
            also, the vector direction of their normals, and the prism vertex at
            its opposite side. In addition, I eventually decided to unify the
            angles to (0, 2PI) because it works best for the calculation.
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-8">Appendix</h2>
          {/* <p className="mb-4">
            <a
              href="https://www.notion.so/202c7099423b807faed3e008c8bf23b6?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Hand-drawn sketch
            </a>
          </p> */}
          <p className="mb-4">
            Resources that helped me with understanding the principle of light
            refraction:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <a
                href="https://www.vedantu.com/iit-jee/angle-of-deviation-in-prism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Angle of Deviation in Prism - Vedantu
              </a>
            </li>
            <li>
              <a
                href="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Bending Light Simulation - PhET
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=vaHzySzFGZk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Light Refraction Video
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
