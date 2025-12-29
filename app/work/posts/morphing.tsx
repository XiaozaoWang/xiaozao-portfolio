import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function MorphingPost() {
  const postData = posts.find((p) => p.slug === "morphing");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-indigo-500 dark:!text-white">
          Morphing nature’s patterns onto humans to reveal deep interconnection.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              “Morphing” is a project that visually explores patterns found in
              nature and overlays them onto human figures captured through a
              webcam. The aim is to promote awareness of our interconnectedness
              with nature. The project consists of two parts: generating
              patterns based on the mathematical principle behind them, and
              capturing and morphing these patterns onto the viewer's figure.
              The project was developed using Turing's Reaction-Diffusion Model
              and the programming language Processing.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>Processing, Generative Algorithms</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="relative w-9/10" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_4ys-wUKg3w?si=FncXoh-wZVFtAGTg"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <h3 className="text-xl font-semibold mb-3">Concept</h3>
          <p className="mb-4">
            Similar patterns have been found in animal bodies, plants, and even
            landscapes. This shows us that maybe things in nature share the same
            basic algorithm to form their body, including the humans. However,
            with the development of technology, we think that we have control
            over other beings and nature, and begin to forget that nature's
            wisdom is inherent in our own bodies all the time.
          </p>
          <p className="mb-4">
            I want to visually explore patterns found in nature and overlay them
            to the viewer's figure in the computer through their webcam. Through
            this project, I aim to promote awareness of our interconnectedness
            with nature and other living beings. While humans have developed
            great abilities, we remain part of the natural world that we evolved
            from. We should respect and learn from nature rather than try to
            exploit it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/morphing/1.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/morphing/2.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/morphing/3.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/morphing/4.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 mt-8">
            Design and Implementation
          </h3>
          <p className="mb-4">
            <strong>My project consists of two main parts:</strong>
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Generating the patterns based on the mathematical principle behind
              them.
            </li>
            <li>
              Capturing the user's figure using the camera and morphing the
              patterns onto the figure.
            </li>
          </ol>
          <p className="mb-4">
            I used Turing's Reaction-Diffusion Model as the blueprint for
            generating the patterns. That's because this model shows how
            different patterns in nature, from stripes to spots, can arise
            naturally from a homogeneous state. It is based on the interplay
            between two kinds of chemicals: the Activator and the Inhibitor,
            where the activator is trying to reproduce and the inhibitor is
            stopping it from doing so. Different generating and dying rates of
            these chemicals create a variety of interesting behaviors that
            explain the mystery of animal/plant patterns.
          </p>
          <ZoomableImage
            src="/blog-images/morphing/5.jpg"
            alt="image"
            className="w-1/3"
          />
          <p className="mb-4">
            I mainly referred to Karl Sims's version of the reaction-diffusion
            equation. He has a wonderful research and web art project about
            Turing's pattern.{" "}
            <a
              href="https://www.karlsims.com/rd.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              https://www.karlsims.com/rd.html
            </a>
          </p>
          <ZoomableImage
            src="/blog-images/morphing/6.jpg"
            alt="image"
            className="w-9/10"
          />
          <p className="mb-4">
            I also learned about ways to translate this equation into code from
            the coding train:{" "}
            <a
              href="https://youtu.be/BV9ny785UNc?si=aoU4__mLw6Pze6ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              https://youtu.be/BV9ny785UNc?si=aoU4__mLw6Pze6ir
            </a>
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6 w-1/2">
            <code>{`grid[y][x].a = a +
                ((dA * laplaceA(x, y)) -
                (a * b * b) +
                (feed * (1 - a))) * 1;
              grid[y][x].b = b +
                ((dB * laplaceB(x, y)) +
                (a * b * b) -
                ((k + feed) * b)) * 1;`}</code>
          </pre>
          <p className="mb-4">
            I created a class that stores the concentration of Chemicals A and B
            of every pixel in the 2D array.
          </p>
          <p className="mb-4">
            One of the interesting parts is that the "diffusion" part works
            similarly to the Game of Life. In every update, the new
            concentration of the center pixel of a 3x3 convolution is calculated
            based on the concentration of its 8 neighbors, each with a different
            weight. This causes the chemicals to diffuse into areas around them.
            In our case, the weights are as follows.
          </p>
          <ZoomableImage
            src="/blog-images/morphing/7.jpg"
            alt="image"
            className="w-1/3"
          />
          <p className="mb-4">There are results like this:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/morphing/8.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/morphing/9.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
          <p className="mb-4">
            However, one thing is that the complicated calculations slow down
            the running of the sketches, and making the canvas bigger also
            results in lagging. After testing, I found that the p5js library is
            causing the problem (because it's a rather large library).
          </p>
          <p className="mb-4">
            As you can see, even the difference between using the p5 file and
            the p5.min file can cause such a huge difference in running
            efficiency: (They both start from the same seed. The one on the
            right is using p5.min, and runs twice as fast as the one on the
            left)
          </p>
          <ZoomableImage
            src="/blog-images/morphing/10.jpg"
            alt="image"
            className="w-3/4"
          />
          <p className="mb-4">
            Therefore, I decided to use Processing as the platform to develop my
            project. It is a local software therefore doesn't have to fetch the
            library from the web.
          </p>
          <p className="mb-4">
            Moreover, I reduced the resolution of the canvas by utilizing 2D
            arrays. (In the webcam part, I also reduced the resolution by
            storing the information of only the top-left pixel out of an 8x8
            pixel grid). By doing this, I was able to expand the canvas size.
          </p>
          <p className="mb-4">
            Then it comes to the next step: Capturing the user's figure with the
            webcam and projecting the patterns on the figure.
          </p>
          <p className="mb-4">This is the logic of implementation:</p>
          <ZoomableImage
            src="/blog-images/morphing/11.jpg"
            alt="image"
            className="w-3/4"
          />
          <p className="mb-4">
            Firstly, we will need to capture an empty background without any
            humans, and store the color data in a 2d array. Then we will compare
            the real-time video captured by the webcam with that empty
            background, and identify the areas that have large color
            differences. (I used the Euclidean distance) These areas will
            represent where the figure is. And then, we use this precessed layer
            as a map that controls which part of the pattern layer is shown to
            the user. Then, we will be able to see that the patterns are only
            growing on the user's figure but not on the background!
          </p>
          <p className="mb-4">
            I added some customizable values to make the project more flexible
            to different lighting, skin colors, and preferences. As a user, you
            can move your mouse across the X-axis to change the exposure, and
            across the Y-axis to change the transparency of the mask.
          </p>
          <p className="mb-4">
            At last, I added a GUI using the controlP5 library. The user will be
            able to use the preset patterns and color palettes as well as adjust
            the parameters on their own.
          </p>
          <p className="mb-4">User testing on IM show:</p>
          <ZoomableImage
            src="/blog-images/morphing/12.jpg"
            alt="image"
            className="w-3/4"
          />

          <ZoomableImage
            src="/blog-images/morphing/13.jpg"
            alt="image"
            className="w-3/4"
          />
        </div>
      </div>
    </article>
  );
}
