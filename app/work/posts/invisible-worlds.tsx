import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function InvisibleWorldsPost() {
  const postData = posts.find((p) => p.slug === "invisible-worlds");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-6xl font-bold !my-10 !text-green-600 dark:!text-white">
          Can we turn the world itself into the interface for learning?
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              <strong>
                We encounter the world through interfaces, but most of them
                flatten how knowledge is felt and understood.
              </strong>
            </p>

            <p>
              <strong>
                Inspired by <em>The Magic School Bus</em>, I turn the physical
                world itself into an interactive interface, letting people learn
                by directly manipulating invisible principles like scale, time,
                and perception.
              </strong>
            </p>

            <p>
              Invisible Worlds explores <strong>Extended Reality</strong>{" "}
              (especially, Mixed Reality) as a perspective-shifting educational
              tool, aiming to turn the physical world itself into a user
              interface. By utilizing Unity with Meta Quest SDK, the system
              overlays interactive layers onto real-world objects, allowing
              learners to{" "}
              <strong>
                experience phenomena normally beyond human physical limitation
                or perception.
              </strong>{" "}
              For example, zoom into a plant's inside down to the cells and even
              molecules to find out how photosynthesis works, or sense
              surrounding spaces mapped through bat-inspired echolocation.{" "}
            </p>
            <p>
              <strong>
                The goal is simple: to make learning intuitive and fun.
              </strong>
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>Unity, Meta Quest SDK</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Award
            </h3>
            <p>The initial prototype won:</p>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Second Place & Most Business Viable</em>
            </p>
            <p className="!mt-0">Unity × Rokid XR Hackathon, Shanghai, 2025</p>
          </div>
        </div>

        {/* ============== Main Content ================= */}
        {/* Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Video Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Demo 1: Journey Inside a Plant</strong>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/o2v6sz6MlSo?si=F8yB8G9gODpIne3W"
                  className="absolute top-0 left-0 w-full h-full "
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Demo 2: Bat Vision</strong>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/aqZ-kz_6_Kc?si=8n8fClpR21LUgJ5J"
                  className="absolute top-0 left-0 w-full h-full "
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Images */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Workshop Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>
                  Audience exploring the journey inside of a plant
                </strong>
              </p>
              <ZoomableImage
                src="/blog-images/iw/u2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/iw/u4.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Teaching children to interact with the project</strong>
              </p>
              <ZoomableImage
                src="/blog-images/iw/u6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/iw/u7.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
          <p className="!my-4">
            <strong>Audience exploring bat vision</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw/u9.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw/u10.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
        </div>

        {/* Concept */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Concept</h2>
          <p>
            Invisible Worlds emerges from a frustration with{" "}
            <strong className="text-yellow-600">
              how traditional education flattens complex phenomena into static
              diagrams and memorized definitions.
            </strong>{" "}
            We learn about photosynthesis, but never got to see the processes
            happening inside a plant. We know bats navigate with sound without
            ever experiencing their perception of space. This project breaks
            that disconnection by reimagining how we interact with the world to
            learn.
          </p>
          <p>My goals include the following:</p>

          <p>
            <strong className="text-red-600">1. Reimagine Interfaces: </strong>
          </p>
          <p>
            Ever since the creation of the concept “interface”, we've
            experienced text-based interface (terminal), graphical interface
            (screen), and more recently, spatial interface (extended reality).
            The spatial interface gives us a lot of new possibilities, but
            meanwhile in many XR applications, the means of interaction are
            still limited to toggling some GUI or information cards in the 3D
            world, or attaching some 3D objects to the anchors detected.{" "}
            <strong className="text-yellow-600">
              To me, the potential of spatial interfaces are yet to be unlocked.
            </strong>{" "}
            I want to build an experience where we can seamlessly enter another
            “world” through physical objects with the help of XR. Countless
            objects become countless “portals” that come together to form{" "}
            <strong className="text-yellow-600">
              the world as an interface.
            </strong>
          </p>
          <p>
            <strong className="text-red-600">2. Shifting Perspective: </strong>
          </p>
          <p>
            There is definitely a better way to learn knowledge. Rather than
            passively transmitting knowledge from a textbook/slides/lecture in a
            one-directional way, I want to pass knowledge, or more precisely,
            the awe or curiosity for knowledge, through interactive experiences.
            I believe that Extended Reality can offer a special embodied
            experience. Beyond conveying facts, the project{" "}
            <strong className="text-yellow-600">
              cultivates curiosity and empathy
            </strong>{" "}
            by letting learners{" "}
            <strong className="text-yellow-600">
              embody experiences beyond human physical limits
            </strong>
            , exploring diverse scale, perception, physical law, and dimensions
            that humans can't normally reach.
          </p>
          <p>
            <strong className="text-blue-500">Technology Choice: </strong>
          </p>
          <p>
            Built in Unity with Meta Quest hand tracking and passthrough, the
            system leverages{" "}
            <strong className="text-yellow-600">Mixed Reality</strong> to
            seamlessly merge the physical and virtual worlds. MR ensures
            interactions are embodied, spatially grounded, and immediate, making
            the world itself the playground and teacher.
          </p>
        </div>
        {/* Design*/}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Design</h2>
          <p>
            I was initially inspired by The Magic School Bus, where Ms. Frizzle
            teaches her class through adventures. Instead of reading about an
            object, they enter it, and experience how it works from the inside
            out.
          </p>
          <ZoomableImage
            src="/blog-images/iw/a1.png"
            alt="Neuron Demo"
            className="w-1/2 "
          />
          <p>
            From that idea, I developed the first sketches of this project,
            combining the immersive “embodied learning” in magic school bus with
            the concept of World as a User Interface.
          </p>
          <ZoomableImage
            src="/blog-images/iw/p1.jpg"
            alt="Neuron Demo"
            className="w-2/3 "
          />
          <p>
            I then refined the interaction design with more details in the form
            of a storyboard.
          </p>

          <p>
            <strong>Journey Inside a Plant: </strong>It enables a user stand in
            front of a real plant, pinch their fingers, and physically “zoom”
            through layers of biological structure, from leaf, cell,
            chloroplast, all the way down to molecules. Several interactive
            mini-games are in the way: For example, users can guide CO₂ and
            water molecules together to create sugar and oxygen molecules,
            turning the abstract idea of photosynthesis into something tactile
            and playful.
          </p>

          <ZoomableImage
            src="/blog-images/iw/p2.png"
            alt="Neuron Demo"
            className="w-2/3 "
          />
          <p>
            <strong>Bat Vision: </strong>It transforms the headset into a
            bat-inspired perception tool. Users emit virtual sound waves by
            making sounds with their mouths, which bounce off surfaces, and
            render as point clouds that gradually reveal the surrounding
            environment.
          </p>
          <ZoomableImage
            src="/blog-images/iw/p3.png"
            alt="Neuron Demo"
            className="w-2/3 "
          />
          <p>
            Along with the technical research of the capability of Meta Quest
            SDK, I translated the storyboard into a user flow (each part
            specified the functionality I plan to achieve with the help of the
            SDK.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-9/10">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw/p4.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw/p5.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
        </div>

        {/* Development */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <div className="grid gap-4 mr-4 mb-6 w-4/5">
            <ZoomableImage
              src="/blog-images/iw/p6.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p7.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p8.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p9.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p10.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p11.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p12.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p13.png"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw/p14.png"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
