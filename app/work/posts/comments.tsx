import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function CommentsPost() {
  const postData = posts.find((p) => p.slug === "comments");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-blue-500 dark:!text-white">
          Materializing online commenting through chemical reactions to examine
          the collective impact of cyberbullying.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Abstract
            </h3>
            <p>
              Comments is a networked installation that visualizes how
              individual online comments collectively shape the environment of a
              cyber community. By scanning a QR code and interacting with a web
              interface, participants can leave either positive or negative
              comments in a shared virtual space.
            </p>
            <p>
              <strong>
                These digital actions are translated into a physical chemical
                process.
              </strong>{" "}
              Basic solutions are dripped into a transparent container with a pH
              basic solutions are dripped into a transparent container with a pH
              indicator. As negative comments accumulate, the mixture turns
              bloody red; positive comments gradually neutralize the solution
              and restore it to transparency. Through this reaction, abstract
              online behaviors become visible, material, and cumulative.
            </p>
            <p>
              In parallel, the system reads out the viewer's IP address and the
              comment they leave, highlighting the tension between anonymity and
              responsibility in online spaces.{" "}
            </p>
            <p>
              By combining chemical reactions with artistic expression, Comments
              frames online commenting as an environmental process rather than
              an isolated action. The project emphasizes how each comment can
              alter the shared digital atmosphere, and invites reflection on the
              harm of cyberbullying and the importance of kindness in
              contemporary online culture.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Toolkit
            </h3>
            <p>javascript, electronics</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Exhibition
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Expanded Web, 2023</em>
            </p>
            <p className="!mt-0">NYU Shanghai, Shanghai, China</p>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Links
            </h3>
            <p>
              <a
                href="https://github.com/XiaozaoWang/expanded-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Github Repo
              </a>{" "}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Exhibition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/1.jpg"
                alt="Image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/2.jpg"
                alt="Image"
                className=""
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">
            Part 1. Motivation and concept
          </h3>
          <p>
            When I was told that project B would be about expanding the web to
            physical installations, I decided to make some of our actions on the
            Internet be visible in the physical world, but changing its form.
            Leaving comments is what we do every day, but people usually only
            care about expressing their own feelings, but rarely consider
            others' feelings when receiving negative comments. Saying something
            harmful online is way easier than in reality. Therefore, I wanted to
            make a project that visualizes the "commenting" process on the
            Internet, show the possible impacts of positive and negative
            comments, and thus encourage people to be responsible for what they
            say.
          </p>
          <p>
            Also, I have learned an experiment in my high school chemistry lab,
            which uses phenolphthalein as an indicator since it is transparent
            in an acid environment but turns red in the base environment.
            Therefore I decided to use HCl and NaOH to control the PH of the
            solution, and make phenolphthalein change its color and help imply
            the impact of comments on the social media environment.
          </p>
          <p>This is my draft of the project during brainstorming:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/3.jpg"
                alt="Image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/5.jpg"
                alt="Image"
                className=""
              />
            </div>
          </div>
          <p>
            A challenging part is deciding the "proper" comments on my web page
            for the audience to choose, and the proper image to be stuck to the
            container representing the receiver of the comments. I tried some
            woman's images and feminist words at first, I also tried some
            celebrities' photographs. But in the end, I changed the words to a
            more generalized and abstract form, and put icons of social media on
            the container. Maybe that's because I didn't want to focus on a
            limited area of cyber-bullying, or maybe because I was not brave
            enough to stand up for a certain group of people?
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Part 2. Physical Installation
          </h3>
          <p>
            This part is challenging but also exciting for me. I once thought
            that I was a person that likes making handicrafts, however, you
            definitely need to go beyond just doing handicrafts if you want to
            finish a project on your own. You will need to ask professors and
            LAs for help, because it's impossible to do everything on your own.
            You will need to find materials and digital components on your own,
            which are not provided there at the school, therefore you have to
            carefully arrange the time to buy them and wait for their arrival.
            You will need to learn new things such as mixing chemical solutions
            and wood-cutting, sometimes self-learning is enough, but at most
            times, asking for help is necessary and more efficient. Asking for
            help is an important aspect that I learned from this project, though
            I still didn't do pretty well in it lol.
          </p>
          {/* <p>
            This is my sketch for the physical installation. It mainly consists
            of my laptop, a frame that supports the laptop, two peristaltic
            pumps with pipes that transmit the chemical solution, a container
            that holds the mixture of chemicals, and the Arduino board and
            wires. I took Gohai's suggestion and decided to have my laptop be a
            part of the installation because by doing that, people can get a
            better sense of being the provider of the comments while they look
            through the camera of the laptop and see how the chemical solutions
            have flown from their side to the container.
          </p> */}

          <p>
            Here is the photo of my physical installation, I make it lab-like,
            which is inspired by the jellyfish-like exhibit in UCCA edge. I
            wanted the installation to look like a kind of organism, which shows
            the dynamic of web space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/6.jpg"
                alt="Image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/comments/7.jpg"
                alt="Image"
                className=""
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Part 3. Web Development
          </h3>
          <p>
            In this part, I mainly applied what we learned about web development
            in class to the project, including node.js, HTML/CSS, and Arduino.
            There are two crucial points, one is the design of the user
            interface, which is basically what they see after scanning the QR
            code of my webpage. The viewers can see the whole process of mixing
            the solutions together and changing color through the live streaming
            on the webpage, and choose to leave a positive or negative comment.
            They can also see how many positive and negative comments have been
            sent out in total. The other one is the communication between the
            front end (HTML and Arduino) and the back end (javascript). Here, I
            received much help from Gohai, but also, I think I worked hard on
            exploring and learning on my own!
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Part 4. User Tests and Final Project
          </h3>
          <p>Here's the video demonstrating how the whole project works:</p>
          <p>
            During the user tests, I received many very insightful and
            constructive feedbacks:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Improve the user interface, make the buttons more attractive and
              make the live stream full screen, which is more comfortable to
              look at.
            </li>
            <li>
              Change the picture inside the container to the icons of social
              media.
            </li>
            <li>Generate random comments.</li>
            <li>
              Encourage the chaos caused by many people leaving comments at the
              same time.
            </li>
            <li>
              Change the paper in the container once in a while, and collect
              papers with different topics on a big billboard. The color of the
              paper will reflect people's attitudes towards a certain topic.
            </li>
          </ol>
          <p>
            I really enjoyed the user testings, especially the last one, the
            ideas inputted from my colleagues and professors are giving me much
            imagination on the future improvement of the project!
          </p>
          <p>
            I think something feasible is point 5 above, and it will be very
            exciting if I can print more posters containing the QR code and
            stick them around the campus. I will keep the installation
            somewhere, and every time a person scans the code and leaves a
            comment, he/she will contribute to the completion of the project in
            some way!
          </p>
          <p>
            Things that can be done better will be doing more preparatory
            research on cyberbullying and people's behavior in the digital era,
            which will help me better clarify the concept and goal of my
            project. I could also work harder on learning HTML, and the overall
            time management!
          </p>
          <p>Thank you for reading!</p>
        </div>
      </div>
    </article>
  );
}
