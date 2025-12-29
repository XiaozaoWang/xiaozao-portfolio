import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function DigitalBlossomsPost() {
  const postData = posts.find((p) => p.slug === "digital-blossoms");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-pink-500 dark:!text-white">
          How do machines understand the relationship between different images?
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              Embark on a journey through the eyes of machine learning with this
              interactive visualization.
            </p>
            <p>
              Through using{" "}
              <strong>CLIP (Contrastive Language–Image Pre-training)</strong> to
              encode semantic image features and{" "}
              <strong>
                UMAP (Uniform Manifold Approximation and Projection)
              </strong>{" "}
              to reduce high-dimensional data , we unveil the hidden connections
              within flower images and visualize them in a 3D space with{" "}
              <strong>three.js</strong>. Explore the space, interact with the
              data points, and play with the parameters to understand how
              machine learning classifies sees the data and performs
              classification tasks.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>Python, three.js, Embedding Models</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>

            <p>
              <a
                href="https://github.com/XiaozaoWang/SharedMinds/tree/main/final-project-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Github Repo
              </a>
            </p>
            <p>
              <a
                href="https://colab.research.google.com/drive/16bQ66PUV9wldHG49oqDQca1K9_ui7pP7?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Colab Notebook
              </a>
            </p>
          </div>
        </div>

        {/* ============== Main Content ================= */}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_VEUrsPoMfg?si=ZPTuLdQBIFYzQ16R"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold mb-4">Process</h2>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Part 1: Concept</h3>
            <p>
              How does the computer perceive an image? After that, how does it
              understand the relationship between different image objects? And
              how can these relationships be visualized in a way that humans can
              understand?
            </p>
            <p>
              With those in mind, my project aims to give the viewers the
              freedom to explore the 3D clustering of flower images. By
              generating a set of embeddings using the openAI CLIP model, we
              grasp the essence of every image in a high-dimensional vector.
              Then with UMAP projection, we reduce the number of dimensions to a
              human-perceiveable scale, and locate the data points in a 3D space
              using three.js. The data points form a bunch of clusters, with
              flowers of the same species appearing near each other, showing
              that the computer understands the semantic similarity between
              their images.
            </p>
            <p>
              The frontend interface of this project enables various user
              interactions. People can drag and scroll to navigate through the
              3D space, to observe the distribution as well as the relationship
              between data points. They can click on any data point to reveal
              more information (such as the name and label). What's more, they
              will be able to modify the UMAP parameters for calculating the
              projection and re-locate the data points.
            </p>
            <p>
              Throughout the process, I want to use "space" as a means to help
              people understand how machine learning sees the relationships
              between data points and completes the classification task. The
              project serves an educational as well as aesthetic purpose, as it
              integrates the interaction design of 2D and 3D interfaces into
              demonstrating the potential of embedding generation and dimension
              reduction.
            </p>

            <h4 className="text-lg font-semibold mt-6">
              Why I want to do this project:
            </h4>
            <p>
              I was amazed by the great potential of UMAP after reading{" "}
              <a
                href="https://pair-code.github.io/understanding-umap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Understanding UMAP
              </a>{" "}
              and other related articles. Also, I'm very interested in
              interactive data visualization and its trend towards becoming 3D.
              Lastly, I always loved natural science, therefore, I want to use
              the knowledge that I learned in machine learning to create an
              interdisciplinary project that introduces people to something in
              the field of natural science.
            </p>

            <h4 className="text-lg font-semibold mt-6">
              Inspiration and prior art:
            </h4>
            <p>
              There are tons of amazing data visualization projects using UMAP
              or similar algorithms.
            </p>
            <p>
              Firstly, this article serves as my initial source of inspiration:{" "}
              <a
                href="https://pair-code.github.io/understanding-umap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Understanding UMAP
              </a>
              . I love how you can engage in the process by moving the sliders,
              or locating the same data point in different parameter contexts.
            </p>
            <p>
              From this article, I found this amazing project (though not much
              related to my proposal):{" "}
              <a
                href="https://homepage.univie.ac.at/maximilian.noichl/post/mammoth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Flattening Mammoths
              </a>
              . It shows the amazing result of dimension reduction from 3d to
              2d.
            </p>
            <p>
              This project is similar to what I want to do:{" "}
              <a
                href="https://projector.tensorflow.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Embedding Projector
              </a>
              .
            </p>
            <p>
              The{" "}
              <a
                href="https://artsexperiments.withgoogle.com/tsnemap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                TSNE artwork viewer by Google Arts
              </a>{" "}
              is another amazing 3d project based on dimension reduction
              algorithms.{" "}
              <a
                href="https://douglasduhaime.com/posts/visualizing-tsne-maps-with-three-js.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                This article
              </a>{" "}
              is an experiment of a similar concept in three.js.
            </p>

            <ZoomableImage
              src="/blog-images/blossom/1.png"
              alt="Image"
              className="w-4/5"
            />

            <h3 className="text-xl font-semibold mt-8">
              Part 2: Data Processing
            </h3>

            <h4 className="text-lg font-semibold mt-6">Workflow</h4>
            <p>
              During the semester, we've been sending requests and fetching
              responses from Replicate, a web API with many open-source models.
              Replicate offers the CLIP model to generate embeddings, however,
              it takes a very long time to generate embeddings for a larger
              number of images. What's more, the Replicate model only takes
              image URLs as input instead of actual files. Therefore, I think
              it's not a practical way to get embeddings for the whole flower
              dataset.
            </p>
            <p>
              I also researched the transformers.js library, which integrates
              better with my front-end app. Unfortunately, they don't offer the
              CLIP model yet and can only generate embeddings for text at this
              point.
            </p>
            <p>
              Therefore, I decided to learn to process data with Colab
              notebooks. With the transformers API and plenty of online
              resources, it's easy to import the image dataset and the CLIP
              model, and process the data.
            </p>

            <h4 className="text-lg font-semibold mt-6">Dataset</h4>
            <p>
              Dataset:{" "}
              <a
                href="https://huggingface.co/datasets/dpdl-benchmark/oxford_flowers102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Oxford-flowers dataset from Hugging Face
              </a>
            </p>
            <p>
              I chose this dataset because it has not only the labels, but also
              the class name of the flowers. It also has a dictionary of
              label-name pairs.
            </p>

            <h4 className="text-lg font-semibold mt-6">Data Processing</h4>
            <p>
              To ensure the performance of the frontend project, I pulled out a
              small sample of data for visualization: 10 classes of flowers and
              10 individuals for each class. Then I send this small dataset to
              the CLIP model for the embeddings and store them with the base64
              images in separate objects in an array.
            </p>
            <p>
              A huge thank you to{" "}
              <a
                href="https://towardsdatascience.com/quick-fire-guide-to-multi-modal-ml-with-openais-clip-2dad7e398ac0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                this tutorial
              </a>{" "}
              for code references!
            </p>

            <h4 className="text-lg font-semibold mt-6">Data Storage</h4>
            <p>
              As we discussed in the concepts, the data processing consists of
              two main steps:
            </p>
            <ol className="list-decimal ml-6">
              <li>
                Use CLIP to generate embeddings for every flower image to
                describe it with a high-dimensional vector.
              </li>
              <li>
                Use UMAP.js to reduce the high-dimensional vector to lower
                dimensions (3D or 2D) so that they can be located in a
                human-perceivable space.
              </li>
            </ol>
            <p>
              The first step is done in the Google Colab. After generating the
              embeddings, I store the embeddings, along with the image and its
              label/class name in Google Firebase. On the webpage, the users can
              easily fetch the data from Firebase and don't need to generate
              them in realtime, making the project more responsive. Meanwhile,
              since the UMAP projection is generated realtime, it's possible to
              allow users to customize their parameters for UMAP.
            </p>

            <h3 className="text-xl font-semibold mt-8">
              Part 3: Design and Implementation
            </h3>
            <ZoomableImage
              src="/blog-images/blossom/2.png"
              alt="Image"
              className="w-4/5"
            />
            <p>The interface consists of two main parts:</p>
            <ol className="list-decimal ml-6">
              <li>The three.js rendering</li>
              <li>The HTML interactive components</li>
            </ol>
            <p>
              I use the three.js library to position the data points in the 3D
              space after dimension reduction. Actually, I set the UMAP
              projection result to be 2-dimensional to form a clearer cluster
              and make it easier for raycasting and observing the data. Then how
              should the data be distributed along the z-axis? (How should we
              determine the "height")
            </p>
            <p>
              I map the value to the data point's average distance from other
              data points, so that the data points will form a terrain-like
              structure while having some diversity in height.
            </p>
            <p>
              The 10 classes of flower data points are demonstrated by spheres
              of 10 different colors. You can hover your mouse on any of the
              data points to secure this object and see its label. This is done
              by the raycaster in three.js. You can also drag and scroll to see
              the data clusters from different angles and distances.
            </p>
            <p>
              I added some interactive visual effects to the data points. Since
              the data is about flowers, why not have a "digital blossom" in the
              3D world? I imported a GLTF flower model and wrote functions for
              scaling it up and down. Whenever the mouse is hovering over a data
              point, flowers will appear out of it and the data points near it,
              and when the mouse is moved away, flowers will scale down
              gradually and disappear.
            </p>
            <ZoomableImage
              src="/blog-images/blossom/3.png"
              alt="Image"
              className="w-4/5"
            />
            <p>
              There are some interactive components in the HTML interface.
              Firstly, a toggle to switch between displaying data points using
              colored spheres and images. Also, there is a placeholder on the
              up-left corner for displaying the full image and label of the
              currently selected data point (double click to select). These
              features allow users to view more information about the data and
              figure out why some individuals are placed in the wrong cluster.
              This can help us understand why computers sometimes make the wrong
              prediction. This is an example of individual difference that is
              worth noticing.
            </p>
            <ZoomableImage
              src="/blog-images/blossom/4.png"
              alt="Image"
              className="w-4/5"
            />
            <ZoomableImage
              src="/blog-images/blossom/5.png"
              alt="Image"
              className="w-4/5"
            />
            <p>
              In addition, the sliders in the bottom-right corner allow the
              users to modify the UMAP parameters and regenerate the projection.
              For example, if we reduce the number of neighbors, the data points
              of the same class will appear closer to each other, and the gap
              between different clusters will be clearer.
            </p>
            <ZoomableImage
              src="/blog-images/blossom/6.png"
              alt="Image"
              className="w-4/5"
            />

            <h3 className="text-xl font-semibold mt-8">
              Part 4: Reflection and Future Direction
            </h3>
            <p>
              I enjoyed this project and this class very much. In class, we not
              only learned about technical things, but also reflected on how our
              minds perceive time and space on a conceptual level.
            </p>
            <p>
              In this project, I tried to combine those two aspects and create a
              project that brings up the question of how humans and computers
              understand data differently, and how to bridge this gap with an
              interactive and aesthetic approach.
            </p>
            <p>There is still much space for improvement:</p>
            <ul className="list-disc ml-6">
              <li>
                Optimization of performance. Now with 100 data points, the
                webpage is already lagging sometimes, probably because of the
                image size. I plan to reduce the image size to improve the user
                experience.
              </li>
              <li>
                The HTML sliders don't work properly (can't be dragged smoothly)
                I tried with z-index and changing the event listener type, but
                neither worked.
              </li>
              <li>
                The fade-in and fade-out effect of the flowers can be better
                designed.
              </li>
              <li>Create a unique visual style for the web interface</li>
            </ul>
            <p>
              In the future, I want to make this project into an "interactive 3D
              encyclopedia", where people can view and learn about more species
              in a non-traditional way while appreciating the beauty of nature.
            </p>

            <h3 className="text-xl font-semibold mt-8">Part 5: References</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <a
                  href="https://github.com/dano1234/SharedMindsS24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Coding examples from my professor
                </a>
              </li>
              <li>
                <a
                  href="https://towardsdatascience.com/quick-fire-guide-to-multi-modal-ml-with-openais-clip-2dad7e398ac0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Colab embeddings tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://colab.research.google.com/drive/1CwY19F390_xKcgpxAEg6Kbj7Pf2wDGqX?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Colab MNIST embeddings
                </a>
              </li>
              <li>
                <a
                  href="https://colab.research.google.com/github/roboflow-ai/notebooks/blob/main/notebooks/image_embeddings_analysis_part_1.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Colab embeddings analysis
                </a>
              </li>
              <li>
                <a
                  href="https://blog.roboflow.com/how-to-use-openai-clip/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Tutorial on CLIP
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/EiddkXBK0-o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Tutorial on connecting to Firebase from Colab
                </a>
              </li>
              <li>
                <a
                  href="https://pair-code.github.io/understanding-umap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Understanding UMAP
                </a>
              </li>
              <li>
                <a
                  href="https://projector.tensorflow.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  Embedding Projector
                </a>
              </li>
              <li>
                <a
                  href="https://artsexperiments.withgoogle.com/tsnemap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  TSNE artwork viewer by Google Arts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
