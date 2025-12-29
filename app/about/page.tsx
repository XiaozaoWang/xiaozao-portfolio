import Image from "next/image";
import { VennDiagram } from "../components/venn-diagram";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-4">
        <div className="flex items-center gap-6 mb-6">
          <h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
          <Image
            src="/about-images/l1.png"
            alt="Logo"
            width={100}
            height={100}
            className="flex-shrink-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Portrait */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/about-images/beach.jpg"
                alt="Xiaozao at the beach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 space-y-4 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              I am a multidisciplinary creative technologist working at the
              intersection of{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                coding
              </span>
              ,{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">
                art
              </span>
              , and{" "}
              <span className="text-green-600 dark:text-greens-400 font-semibold">
                education
              </span>
              . I'm passionate about{" "}
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                how emerging technologies can transform education
              </span>{" "}
              from passive knowledge delivery into active, immersive
              exploration.
            </p>

            <p className="leading-relaxed">
              My vision is to position curiosity and exploration as the driving
              forces of deep understanding, and to make sensing and engaging
              with the world the core goal for the cultivation of scientific
              literacy.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  I'm a creative mind that sees differently.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  I approach ideas from unexpected angles and love turning the
                  ordinary upside down. In group brainstorms, I spark with
                  unconventional solutions and wild concepts that often open up
                  new directions. This makes me a great fit for any culture of
                  innovation.
                </p>
              </div>

  
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  ⚙ I'm a multidisciplinary practitioner.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  With a dual major in Computer Science and Interactive Media
                  Arts, I possess a unique cross-disciplinary mindset with
                  coding proficiency and artistic sensibility. I'm an engineer
                  who loves art, a designer who can code, and a problem solver
                  who connects departments and ideas.
                </p>
              </div>


              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  ❤️‍🔥 I'm fueled by passion and joy.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm deeply excited by the creative process. I dive in with
                  heart, energy, and a genuine love for what I do. What's more,
                  I always share the energy with others. I'm often told I bring
                  a bright, uplifting vibe to any team.
                </p>
              </div>


              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  🗨️ I'm a collaborative leader and communicator.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  I have rich experience leading interdisciplinary teams and
                  student organizations, and have won awards like nationwide 3rd
                  place in 2025 Disney Imaginations Shanghai. I listen closely,
                  speak clearly, and help ideas flow across disciplines and
                  personalities.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Venn Diagram - Adjust width, margin, and size here */}
      <div className="w-full ml-0 mt-0 mb-16">
        <VennDiagram />
      </div>

      {/* CV Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-12 w-9/10">
        {/* Contact Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="text-2xl font-semibold">Xiaozao Wang</h2>
            <a
              href="https://drive.google.com/file/d/1OXUjBzPSsfFgnClLWYodHUKyra_qt-TS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              download cv
            </a>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-3">
            <span>+86 13761000275</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span>xw2194@nyu.edu</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span>xiaozaowang.art</span>
          </div>
        </div>

        {/* CV Content */}
        <div className="space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">New York University Shanghai</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2021 - Dec 2025
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  BS Computer Science, BS Interactive Media Arts
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>GPA: 3.94/4.0</li>
                  <li>University Recognition Award, every academic year</li>
                  <li>Capstone Award of Distinction, Computer Science</li>
                  <li>Capstone Award of Distinction, Interactive Media Arts</li>
                  <li>
                    Dean's Undergraduate Research Fund, Interactive Media Arts
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    New York University Abu Dhabi (Study Away)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2023 - Dec 2023
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Research Award Scholarship, Interactive Media
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">
                    New York University (Study Away)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2023 - Dec 2023
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Research
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Student Researcher (Open-source Machine Learning)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Feb 2024 - May 2025
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  MI5.js Machine Learning Group, New York University
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Independently designed and developed an interactive,
                    React-based educational web platform that visualizes,
                    simulates, and parameterizes machine learning and neural
                    network mechanisms to help beginners build intuitive
                    understanding.
                  </li>
                  <li>
                    Led discussions and workshops on Explainable AI at the COSA
                    × NYU Machine Learning for Creative Coding conference in New
                    York.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Research Assistant (Speculative Technology)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2024 - Dec 2024
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Interactive Media Arts, New York University Shanghai
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Researched soft technologies and bio-hybrid systems;
                    analyzed case studies and developed speculative narratives
                    on the intersections of technology, biology, and art.
                  </li>
                  <li>
                    Facilitated cross-disciplinary discussion by connecting with
                    labs and interviewing experts.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Research Assistant (Computational Design)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Jun 2024 - Aug 2024
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Intelligent Big Data Visualization Lab, Tongji University
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Developed Rhino/Grasshopper workflows and assisted in
                    3D-printing fluidic channels in ceramic structures to create
                    thermochromic surface effects.
                  </li>
                  <li>
                    Researched emerging technologies in digital fabrication and
                    visualization, synthesizing insights and presenting findings
                    in weekly team meetings.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Student Researcher (Interactive Exhibition)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Oct 2023 - Jan 2024
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Louvre Abu Dhabi, UAE
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Prototyped an AR-based interactive system for cultural
                    heritage engagement, enabling artifact reassembly through
                    spatial interaction.
                  </li>
                  <li>
                    Collaborated with local students in iterative prototyping
                    and conducted regular evaluation with museum collaborators.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Research Assistant (Interactive Media)
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2023 - Dec 2023
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Interactive Media, New York University Abu Dhabi
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Conducted 20 in-person user interviews to gather insights
                    and feedback on the artwork, documenting user behavior
                    comprehensively.
                  </li>
                  <li>
                    Collaborated closely with artists to support the industrial
                    design process, producing detailed hand sketches
                    illustrating the artwork's appearance and functionality.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Technical Artist Intern</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Jun 2025 - Aug 2025
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  OUTPUT Studio
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Contributed to two original AIGC video productions (reaching
                    1M+ views). Responsibilities included screenplay
                    development, visual storyboarding, and keyframe/video
                    generation using Midjourney, ComfyUI, Veo, Keling, and
                    Jimeng.
                  </li>
                  <li>
                    Built a local ComfyUI pipeline for AI 3D model generation
                    and co-developed a Kinect + TouchDesigner motion-tracking
                    system deployed in an offline interactive experience store.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Business Development Intern</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Jun 2022 - Aug 2022
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  ByteDance
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Conducted research on 6 venture capital companies, 6 North
                    American game giants and 30+ game industry veterans, and
                    presented the information to assist business development.
                  </li>
                  <li>
                    Participated in English-language business meetings and
                    produced meeting summaries, facilitating cross-team
                    communication and collaboration.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Director of Marketing</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Oct 2021 - Jun 2023
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Undergraduate Business Association, New York University
                  Shanghai
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Led an international team to strategize and implement
                    marketing campaigns that increased club engagement,
                    including managing social media, developing the website, and
                    organizing in-person events.
                  </li>
                  <li>
                    Designed over 10 promotional posters for club events and
                    managed information dissemination through the official
                    Instagram account.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teaching Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Teaching Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Scratch Programming Teaching Volunteer
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Jul 2025 - Present
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  The Stepping Stone Shanghai
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Led weekly Scratch Programming lessons for 20 migrant
                    children.
                  </li>
                  <li>Assisted in developing course materials.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    Teaching Associate for Creative Coding Lab
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Jan 2025 - May 2025
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  New York University Shanghai
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 pl-5">
                  <li>
                    Hosted 50+ office hours to help students debug code,
                    understand p5.js, and develop creative coding projects
                    effectively.
                  </li>
                  <li>
                    Supported peer LAs and supervisors by sharing strategies,
                    co-leading training, and assisting with events.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">English Teaching Volunteer</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2021 - Jan 2022
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  The Stepping Stone Shanghai
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside pl-5">
                  <li>
                    Led weekly English language lessons and engaging activities
                    for 12 migrant children.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Awards
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Nationwide Third Place</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Disney Imaginations Competition, Shanghai
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  2025
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Second Place</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Unity × Rokid XR Hackathon, Shanghai
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  2025
                </span>
              </div>
            </div>
          </div>

          {/* Exhibitions and Conferences */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Exhibitions and Conferences
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">
                    Art and Design Education: FutureLab (Group Exhibition)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    West Bund Art Center, Shanghai, China
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Nov 2025
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">
                    Human + Desire + Machine (Group Exhibition)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Yuz Museum & NYU Shanghai, Shanghai, China
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Nov 2025
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">
                    NYU Global Show & Tell (Group Exhibition)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    NYU Shanghai, Shanghai, China
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Oct 2025
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">
                    Machine Learning for Creative Coding (Conference)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clinic for Open Source Arts & NYU, New York, US
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Mar 2025
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Skills
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Programming Languages & Frameworks:
                </span>{" "}
                JavaScript, HTML/CSS, React, Python, C/C++
              </p>
              <p>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Digital Technologies:
                </span>{" "}
                Unity, TouchDesigner, Blender, Rhino, Microcontroller, 3D
                Printing, Physical Fabrication
              </p>
              <p>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Visual & Interaction Design:
                </span>{" "}
                Photoshop, Illustrator, Procreate, Figma, AIGC
              </p>
              <p>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Languages:
                </span>{" "}
                Mandarin (Native), English (Proficient, TOEFL 112)
              </p>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Interests
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Painting, Natural Sciences, Science Fiction, Music, Travel, Any
              Creative Work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
