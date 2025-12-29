import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function AlgorithmicNaturePost() {
  const postData = posts.find((p) => p.slug === "algorithmic-nature");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-6xl font-bold !my-0 !text-red-800 dark:!text-white">
          Is nature the only version possible?
        </h1>
        <h1 className="!text-6xl font-bold !my-0 !text-red-800 dark:!text-white">
          Can algorithms reveal unrealized natures?
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              TL;DR:
            </h3>
            <strong>
              I explore nature as a dynamic computational process, using
              generative algorithms to simulate alternative natural forms that
              could exist but don’t. By materializing these patterns through 3D
              printing and exhibiting them alongside real specimens, my work
              invites viewers to imagine the vast, unrealized possibilities
              hidden within nature’s code.
            </strong>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              Could the natural patterns we see be just one manifestation of
              infinite possibilities? Could a snowflake be just a single sample
              drawn from a vast computational universe of potential forms?
              <strong>
                Through generative approaches, I render visible these unrealized
                possibilities that nature could have taken but didn’t.
              </strong>
            </p>

            <p>
              Algorithms like L-systems and cellular automata show how simple
              rules can give rise to countless complex results. These outcomes
              form{" "}
              <strong>what Stephen Wolfram calls a computational space</strong>:
              the totality of patterns that are computationally possible. Yet
              nature, constrained by material and environmental limitations,
              brings only a narrow subset into physical form.
            </p>
            <p>
              My work ventures into this unexplored territory. Through extensive
              coding experiments, I explore how nature-inspired algorithms can
              be used to imagine an “alternative nature.” In three explorations:
              plant branching, snowflakes, and shell surfaces, I deliberately
              manipulated parameters to generate patterns that don’t exist in
              nature but trigger uncanny familiarity. This process samples the
              unexplored edges of the computational space.{" "}
              <strong>
                The generative results are materialized through 3D printing and
                exhibited alongside real specimens in a natural history museum
                setting.
              </strong>
            </p>
            <p>
              <strong>
                My work invites viewers to perceive nature not as a fixed set of
                forms, but as an ongoing process of dynamic computation.
              </strong>{" "}
              Is our nature, in essence, a constantly running algorithm? And if
              so, what other patterns—what other natures—might lie just beyond
              what we observe?
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>javascript, 3d printing, electronics, natural specimen</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Exhibitions
            </h3>
            {/* no margin between the two p */}
            <p className="font-semibold !mb-0 !mt-0">
              <em>Art and Design Education: FutureLab, 2025</em>
            </p>
            <p className="!mt-0">West Bund Art Center, Shanghai, China</p>

            <p className="font-semibold !mb-0 !mt-0">
              <em>Human + Desire + Machine, 2025</em>
            </p>
            <p className="!mt-0">Yuz Museum & NYU Shanghai, Shanghai, China</p>

            <p className="font-semibold !mb-0 !mt-0">
              <em>Interactive Media Arts Capstone Show, 2025</em>
            </p>
            <p className="!mb-0 !mt-0">NYU Shanghai, Shanghai, China</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Award
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>
                Capstone Award of Distinction (Best Technical Achievement)
              </em>
            </p>
            <p className="!mb-0 !mt-0">
              NYU Shanghai Interactive Media Arts, 2025
            </p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>

            <p>
              <a
                href="https://docs.google.com/document/d/1uFgxblQrAo5mhwjtxC9I4a2hfPizXHkT/edit?usp=sharing&ouid=103754443031941482251&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Capstone Essay
              </a>{" "}
            </p>
            <p>
              <a
                href="https://github.com/XiaozaoWang/capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Github Repo
              </a>{" "}
            </p>
          </div>
        </div>

        {/* ============== Main Content ================= */}
        {/* Video */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Video</h2>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/aAxU9xscTwc?si=v3qUPCvVxqGdAk9p"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Project Images */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Project Images</h2>
          {/* Overview */}
          <p className="!my-2">
            <strong>Installation Overview</strong>
          </p>

          <ZoomableImage
            src="/blog-images/an3/ex1.jpg"
            alt="image"
            className="w-9/10"
          />

          {/* Part 1 */}
          <p className="!my-2">
            <strong>Part 1: Plant Branching</strong>
          </p>

          <div className="mb-8 w-9/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 上下间隔 */}
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/pl1.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/pl2.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/pl4.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/pl5.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/pl8.jpg"
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <p className="!my-2">
            <strong>Part 2: Snowflakes</strong>
          </p>

          <div className="mb-8 w-9/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 上下间隔 */}
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/sn4.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/sn5.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/sn3.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/sn6-.jpg"
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <p className="!my-2">
            <strong>Part 3: Shell Surfaces</strong>
          </p>

          <div className="mb-8 w-9/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 上下间隔 */}
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/sh1.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/sh2.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/sh3.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/sh4.jpg"
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <p className="!my-2">
            <strong>Part 4: Algorithmic Nature Archive</strong>
          </p>
          <p className="!my-2">
            We keep an archive for the living creatures… But can we also keep
            one for the simulated ones?
          </p>

          <div className="mb-8 w-9/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 上下间隔 */}
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/ac1.jpg"
                  alt="image"
                  className=""
                />
              </div>
              <div className="!space-y-4">
                <ZoomableImage
                  src="/blog-images/an3/ac2.jpg"
                  alt="image"
                  className=""
                />
                <ZoomableImage
                  src="/blog-images/an3/ac3.jpg"
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4  mb-6">
            <ZoomableImage
              src="/blog-images/an3/ex4.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/ex3.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/ex9.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/ex2.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/ex7.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/ex5.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Process */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Development Process</h2>
          <div className="grid grid-cols-1 gap-4 mr-4 mb-6 w-9/10">
            <ZoomableImage
              src="/blog-images/an3/p1.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p2.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p3.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p4.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p5.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p6.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p7.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p8.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p9.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p10.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p11.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p12.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p13.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p14.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/an3/p15.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
