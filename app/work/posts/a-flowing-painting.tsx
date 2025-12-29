import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function AFlowingPaintingPost() {
  const postData = posts.find((p) => p.slug === "a-flowing-painting");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-teal-500 dark:!text-white">
          Make Van Gogh's Starry Night move through a flow field system.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              This project animates Van Gogh's Starry Night by implementing a{" "}
              <strong>particle-based flow field system</strong> in p5.js.
              Inspired by Karl Sims' vortex field research, I developed an
              algorithm that creates swirling movements through Perlin noise and
              tangential forces. The system allows users to interactively paint
              vortex centers or automatically detects star positions from the
              original painting through RGB color analysis. By combining flow
              field dynamics with pixel manipulation, the project transforms
              static paintings into flowing, dynamic visualizations that enhance
              the sense of motion, energy, and flux originally conveyed through
              Van Gogh's brushwork.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>p5.js</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          {/* Overview */}
          <h2 className="text-2xl font-bold mb-4 mt-8">Trailer Video</h2>
          <div className="aspect-video mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/G0PZJan_l2Q?si=smEDY9MwM05ev3Fu"
              title="The Shape of Sound Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">A. Concept</h3>
              <p className="mb-4">
                I was attracted by this image when reading the article{" "}
                <a
                  href="https://dl.acm.org/doi/epdf/10.1145/97880.97923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  "Particle animation and rendering using data parallel
                  computation"
                </a>{" "}
                by Karl Sims:
              </p>
              <ZoomableImage
                src="/blog-images/vangogh/1.jpg"
                alt="Image"
                className=""
              />
              <p className="my-4">
                This vortex field (or swirling pattern) reminds me of Starry
                Night by Vincent van Gogh. He created a strong sense of{" "}
                <strong>motion, energy, and flux</strong> through the use of
                brushwork and colors.
              </p>
              <ZoomableImage
                src="/blog-images/vangogh/2.jpg"
                alt="Image"
                className="w-1/2"
              />
              <p className="mt-4">
                There are many other examples that the static 2D paintings are
                trying to convey a sense of movement. I think it would be great
                if I could enhance this message to the audience by animating
                these drawings. Therefore, I decided to create a "moving"
                version of Starry Night for my midterm project using the flow
                field and the particle system.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">B. Implementation</h3>
              <p className="font-semibold mb-4">
                Here are the questions to solve to achieve my goal of creating a
                flowing painting.
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>Swirling movement of the particles</li>
                <li>Location of the center</li>
                <li>Aesthetics of the strokes</li>
              </ol>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    1. Swirling movement of the particles
                  </h4>
                  <p className="mb-4">
                    Firstly, I need to know how to make the particles move in a
                    circular pattern. The particles need to be placed in a flow
                    field that they will be given the velocity according to
                    their position in the field. However, there are different
                    kinds of flow fields: Perlin noise flow fields, vortex flow
                    fields, magnetic flow fields, and so on. I searched the
                    Internet and found a simple way of creating this swirling
                    effect.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/3.jpg"
                    alt="Image"
                    className=""
                  />
                  <p className="my-4">
                    Basically, you create a background image showing the
                    distribution of the centers of vortices based on a 2D Perlin
                    noise space. And then you calculate the "pressure
                    differential" around every cell in the grid. That
                    differential vector will point to the center of the vortex,
                    creating an attraction effect to the particles. However, if
                    you rotate every vector by 90 degrees, they will suddenly be
                    turned to some force similar to the "tangential force". This
                    will magically turn the movement of the particles into a
                    swirling pattern.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/4.jpg"
                    alt="Image"
                    className=""
                  />
                  <ZoomableImage
                    src="/blog-images/vangogh/5.jpg"
                    alt="Image"
                    className="w-1/2"
                  />
                  <p className="my-4">
                    Generating a flow field with Perlin noise is a good starting
                    point.
                  </p>
                  <p className="mb-4">
                    p.s. Here's a good way of modifying the noise field to make
                    it cleaner and less "noisy". You can change the parameters
                    in this function called noiseDetail(octave count, falloff).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
                    <ZoomableImage
                      src="/blog-images/vangogh/6.jpg"
                      alt="Image"
                      className=""
                    />
                    <ZoomableImage
                      src="/blog-images/vangogh/7.jpg"
                      alt="Image"
                      className=""
                    />
                  </div>

                  <p className="my-4">
                    I also make a 3D noise field that changes through time.
                  </p>

                  <p className="mb-4">
                    Here are some generative patterns I created from the
                    swirling field:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-9/10">
                    <div className="!space-y-4">
                      <ZoomableImage
                        src="/blog-images/vangogh/8.jpg"
                        alt="Image"
                        className=""
                      />
                      <ZoomableImage
                        src="/blog-images/vangogh/9.jpg"
                        alt="Image"
                        className=""
                      />
                      <ZoomableImage
                        src="/blog-images/vangogh/10.jpg"
                        alt="Image"
                        className=""
                      />
                    </div>
                    <div className="!space-y-4">
                      <ZoomableImage
                        src="/blog-images/vangogh/11.jpg"
                        alt="Image"
                        className=""
                      />
                      <ZoomableImage
                        src="/blog-images/vangogh/12.jpg"
                        alt="Image"
                        className=""
                      />
                    </div>
                  </div>

                  <p className="mb-4">
                    I also made this blinking effect. The explanation is in the
                    image.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/14.jpg"
                    alt="Image"
                    className="w-1/3"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    2. Location of the center
                  </h4>
                  <p className="mb-4">
                    Then, we need to know the rotation center of the stars.
                  </p>
                  <p className="mb-4">
                    In the previous sketches, I used the Perlin noise field to
                    determine the rotation centers. Every time, the resulting
                    image is different because of the difference in random
                    Perlin noise.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/15.jpg"
                    alt="Image"
                    className="w-1/3"
                  />
                  <p className="my-4">
                    However, the Perlin noise is too random and you can't really
                    decide where your centers are. Therefore, I came up with the
                    idea of allowing the users to paint on a buffer canvas and
                    have control over their center locations.
                  </p>
                  <p className="mb-4">
                    The method is to use pixel manipulation.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/16.jpg"
                    alt="Image"
                    className="w-1/2"
                  />
                  <p className="my-4">
                    I wrote a function called renderImg() that modifies an
                    initially pure black buffer canvas. Whenever the users press
                    their mouse, the pixels around the mouse position will
                    gradually turn brighter according to their distance from the
                    mouse position.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/17.jpg"
                    alt="Image"
                    className="w-1/6"
                  />
                  <p className="my-4">(A clearer demonstration)</p>
                  <ZoomableImage
                    src="/blog-images/vangogh/18.jpg"
                    alt="Image"
                    className="w-1/2"
                  />
                  <p className="my-4">
                    Then, the users will be able to draw their own "base image"
                    in the field and affect the movement of the particles.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/19.jpg"
                    alt="Image"
                    className="w-1/2"
                  />
                  <p className="my-4">
                    Do you want to have a try? (press i to show your base image)
                  </p>
                  <p className="mb-4">Some result:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ZoomableImage
                      src="/blog-images/vangogh/20.jpg"
                      alt="Image"
                      className=""
                    />
                    <ZoomableImage
                      src="/blog-images/vangogh/21.jpg"
                      alt="Image"
                      className=""
                    />
                  </div>
                  <p className="my-4">
                    Lastly, apart from user modification, I also want to
                    "animate" the original painting by Van Gogh. This requires
                    us to take the original painting as the source image.
                  </p>
                  <p className="mb-4">
                    But how can the computer know the locations of rotation
                    centers of the stars from the painting?
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/22.jpg"
                    alt="Image"
                    className=""
                  />
                  <p className="my-4">
                    At first, I tried to detect the pixels that have a higher
                    grey scale (brighter). But as you can see, there is only one
                    star that is statistically much brighter than others. This
                    method didn't work well.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/23.jpg"
                    alt="Image"
                    className=""
                  />
                  <p className="my-4">
                    Then I noticed that all the stars are kind of yellow.
                    Therefore, I thought of calculating the Euclidean distance
                    of the RGB value of the pixel with the RGB value of a
                    "standard yellow color". After some tests, I found that this
                    rule works the best (but still not perfect) anyways I
                    tried...
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
                    <pre className="text-sm">
                      abs(r-g)&lt;=20;{"\n"}
                      r: 180 += 20;{"\n"}
                      g: 165 += 20;{"\n"}
                      b: 60 += 30;
                    </pre>
                  </div>
                  <p className="mb-4">
                    And then I used the previous renderImg() function to render
                    the base image based on the original painting. You can see
                    that nearly half of the stars have been detected.
                  </p>
                  <ZoomableImage
                    src="/blog-images/vangogh/24.jpg"
                    alt="Image"
                    className="w-1/2"
                  />
                  <p className="mt-4">
                    Finally, I combined the Perlin noise flow field with this
                    swirling field. Adding some dynamics to the sketch. I also
                    grabbed the original color from the painting and modified
                    the color of the pixels.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
