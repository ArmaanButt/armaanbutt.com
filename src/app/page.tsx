import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <Image
            src="/profile.jpeg"
            alt="Armaan Butt"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I&apos;m Armaan Butt 👋
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Software Engineer passionate about building AI applications
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Manager, Solution Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">C3 AI • Redwood City, CA • 2023 - Present</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <li>Led a Generative AI GTM technical team of 12 engineers, executing 32 customer pilots and PoCs with the C3 Generative AI suite, generating $4 million in revenue</li>
                  <li>Successfully deployed production Gen AI applications for high-profile clients such as DLA Piper, Indorama, Pantaleon, Aerospace Corp, Navy FRC, Boston Scientific, and GSK</li>
                  <li>Integrated Retrieval-Augmented Generation (RAG) workflows with LLMs such as GPT-4, GPT-3.5, Claude V3, and Llama2</li>
                  <li>Built strong partnerships and deepened technical engagements with clients, increasing adoption of C3 Generative AI technologies</li>
                  <li>Hired 16 Solution Engineers across all levels, enhancing team capabilities and fostering innovation</li>
                  <li>Mentored engineers across all levels, securing promotions for 6 team members</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'TypeScript', 'React', 'ChromaDB', 'Postgres', 'Cassandra'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Senior Solution Engineer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">C3 AI • Redwood City, CA • 2021 - 2023</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <li>Lead the engineering effort to deliver production-ready application trials and proof of concepts on the C3 AI Platform</li>
                  <li>Closed a cumulative of $7M worth of production deals with customers including Tyson Foods, ESAB, and Cargill</li>
                  <li>Engaged customer executives and domain experts to define, scope, and design application trials</li>
                  <li>Designed, developed, maintained, and presented demo applications of C3 AI products</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'TypeScript', 'React', 'Postgres', 'Cassandra'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Solution Engineer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">C3 AI • Redwood City, CA • 2020 - 2021</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <li>Closed $3M worth of production deals with customers including JCI and Yokogawa</li>
                  <li>Drove early sales discussions on architecture and engineering</li>
                  <li>Developed and presented proof of concept applications to demonstrate platform capabilities</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'TypeScript', 'React', 'Postgres', 'Cassandra'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">System Architect / Associate System Architect</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pegasystems • Toronto, Canada • 2017 - 2019</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <li>Developed enterprise applications with clients including USAA, CIT Group, and Fairfax</li>
                  <li>Oversaw the construction of data pipelines using Python, Hive, and Hadoop to extract application data</li>
                  <li>Architected a REST data ingestion service built with Python for extracting complaints data into HDFS</li>
                  <li>Exercised cross-functional influence, translating between business owners and technical teams</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'Hadoop', 'HDFS', 'Hive'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-6 w-full">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Project One</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A full-stack application built with Next.js, TypeScript, and Tailwind CSS
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-blue-600 hover:underline">Demo</a>
                <a href="#" className="text-sm text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Project Two</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                An open-source library for React components with 1k+ GitHub stars
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-blue-600 hover:underline">Demo</a>
                <a href="#" className="text-sm text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:armaan.r.butt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/armaanbutt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-300">
        <a
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://www.linkedin.com/in/armaan-butt-97317682/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
          href="https://x.com/ArmaanGalaxy"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <a
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
          href="/ArmaanButt_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </footer>
    </div>
  );
}
