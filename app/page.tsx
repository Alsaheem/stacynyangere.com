import Image from "next/image";
import profilePhoto from "../public/stacy-nyangere.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Stacy Nyangere
            </div>
            <div className="flex gap-6">
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Expertise
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl lg:text-7xl">
              Stacy Nyangere
            </h1>
            <p className="mb-4 text-xl font-medium text-slate-700 dark:text-slate-300 md:text-2xl">
              Registered Nurse | Digital Health &amp; Customer Success Professional
            </p>
            <p className="mb-2 text-lg text-slate-600 dark:text-slate-400">
              Combining clinical experience with digital health, health informatics
              and customer success to support effective technology adoption and service
              improvement.
            </p>
            <div className="mb-6 text-sm text-slate-600 dark:text-slate-400">
              <p>
                <a
                  href="mailto:stacynyangere@gmail.com"
                  className="hover:text-slate-900 dark:hover:text-slate-200"
                >
                  stacynyangere@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View My Professional Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/snyangere"
            target="_blank"
            rel="noopener noreferrer"
                className="rounded-full border-2 border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900/50"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800">
              <Image
                src={profilePhoto}
                alt="Stacy Nyangere"
                width={500}
                height={600}
                className="relative w-full h-auto object-cover"
          priority
        />
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills - Side by Side */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Professional Summary */}
          <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                I&apos;m Stacy, a Registered Adult Nurse and digital health customer
                success professional with experience spanning frontline care, oncology,
                clinical leadership, service improvement and healthcare technology. I
                work across clinical, operational and technical teams, helping to
                translate healthcare needs into practical digital workflows and
                supporting customers and users throughout implementation, adoption and
                ongoing improvement.
              </p>
              <p>
                My career has evolved from frontline nursing and specialist oncology
                into digital health and customer success. This journey has strengthened
                my ability to understand clinical services, communicate across
                different stakeholder groups and connect user needs with practical
                service and technology improvements. My professional interests include
                customer adoption, clinical workflows, health informatics and
                meaningful digital transformation within healthcare.
              </p>
            </div>
          </div>

          {/* Key Skills & Tools */}
          <div id="skills" className="space-y-6 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Professional Expertise
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🏥</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Customer Success &amp; Adoption
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Customer onboarding, relationship management, needs identification,
                  platform engagement, user adoption, feedback management, customer
                  success planning and long-term engagement.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">📊</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Digital Health &amp; Informatics
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Digital care pathways, healthcare technology adoption, clinical
                  requirements, EHR/EPR systems, health informatics, data-informed
                  service improvement and interoperability concepts including HL7 and
                  FHIR.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">⚙️</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Clinical Workflow &amp; Service Improvement
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  As-Is and To-Be workflow mapping, patient-centred service design,
                  stakeholder engagement, process improvement and clinical risk
                  awareness.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">📋</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Implementation &amp; Change Management
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Requirements gathering, project coordination, UAT, training, go-live
                  support, cross-functional collaboration and change adoption.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Selected tools:
              </span>{" "}
              Jira, Confluence, Salesforce, Metabase, Microsoft Excel, Power BI,
              Microsoft 365 and Slack.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - Full Width */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20"
      >
        <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Selected Professional Work
        </h2>
        <p className="mb-8 text-base text-slate-600 dark:text-slate-400">
          These examples have been intentionally generalised to protect employer,
          customer and project confidentiality.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Digital Platform Adoption */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Digital Platform Adoption
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Challenge:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  A specialist healthcare service was introducing a digital platform
                  that required clinical workflows, user needs and operational
                  processes to be considered.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Contribution:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Supported workflow mapping, requirements discussions, user testing,
                  training and implementation activities while working across
                  clinical, operational and technical stakeholders.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Outcome:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Contributed to a more structured rollout, clearer working processes
                  and improved readiness among the teams using the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Workflow Improvement */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Clinical Workflow Improvement
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Challenge:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  An existing clinical pathway contained delays, unclear handovers and
                  inconsistent working practices.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Contribution:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Gathered stakeholder feedback, mapped current and future workflows
                  and supported the development of clearer processes, responsibilities
                  and guidance.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Outcome:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Helped create a more consistent pathway with improved visibility of
                  responsibilities and next steps.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Success & Stakeholder Engagement */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Customer Success &amp; Stakeholder Engagement
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Challenge:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Healthcare customers required ongoing support to adopt digital care
                  pathways and use the platform effectively within their services.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Contribution:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Built relationships with clinical and operational stakeholders,
                  explored customer needs, coordinated feedback and worked with
                  internal teams to support adoption and continuous improvement.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Outcome:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Supported stronger communication, clearer follow-up and a more
                  customer-focused approach to long-term platform use.
                </p>
              </div>
            </div>
          </div>

          {/* Data & Performance Visibility */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Data &amp; Performance Visibility
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Challenge:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Teams needed clearer visibility of service activity, engagement and
                  operational performance.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Contribution:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Used reporting tools and structured data to identify trends, support
                  discussions and present information in an accessible format for
                  different stakeholders.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Outcome:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Helped teams interpret performance information and identify areas
                  requiring further attention or improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20"
      >
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Selected Experience
        </h2>
        <p className="mb-8 max-w-4xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          My career has progressed from frontline nursing and specialist oncology care
          into digital health and customer success. This combination allows me to
          understand healthcare services from both the clinical and
          technology-adoption perspectives.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Role */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Customer Success Manager
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Buddy Healthcare
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                March 2026 - Present
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Supporting healthcare organisations with the adoption and ongoing use of
              digital care pathways. I work across clinical, operational and technical
              stakeholders to understand customer needs, coordinate actions, support
              engagement and contribute to long-term customer success.
            </p>
          </div>

          {/* Previous Role */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Oncology Clinical Nurse Specialist
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Lloyds Clinical
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                December 2023 - March 2026
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Provided specialist support to oncology patients while contributing to
              service improvement, digital adoption, clinical workflow development and
              staff training. This role strengthened my ability to translate frontline
              clinical needs into practical operational and digital improvements.
            </p>
          </div>

        </div>
        <div className="mt-8 max-w-4xl">
          <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Before moving into digital health and customer success, I developed broad
            experience across inpatient nursing, oncology, chemotherapy, disability
            assessment and agency nursing within NHS and independent healthcare
            settings.
          </p>
          <a
            href="https://www.linkedin.com/in/snyangere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border-2 border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900/50"
          >
            View My Full Experience on LinkedIn
          </a>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Education &amp; Credentials
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              MSc Healthcare Informatics
            </h3>
            <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
              In progress
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Postgraduate study focused on the use of information, technology and data
              within healthcare services.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              BSc (Hons) Adult Nursing
            </h3>
            <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
              University of Chester | 2018
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Professional nursing education providing the foundation for my clinical,
              digital-health and customer-success career.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Registered Adult Nurse
            </h3>
            <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
              UK Nursing and Midwifery Council
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Maintain active professional registration.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Agile Project Management
            </h3>
            <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
              OpenClassrooms | 2024
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Training in Agile project delivery, stakeholder collaboration, iterative
              working and supporting organisational change.
            </p>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/snyangere"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-900 dark:text-slate-300 dark:decoration-slate-700 dark:hover:text-slate-100"
        >
          View all qualifications and certifications on LinkedIn
        </a>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div
            id="contact"
            className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:p-10 scroll-mt-20"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Let&apos;s Connect
            </h2>
            <div className="mb-8 space-y-4 text-base text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m always happy to connect with professionals working across
                digital health, customer success and health informatics, exchange
                perspectives and grow my professional network.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:stacynyangere@gmail.com"
                className="flex w-full items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/snyangere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full border-2 border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900/50"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Stacy Nyangere. All rights reserved.</p>
          <p className="mx-auto mt-3 max-w-4xl text-xs leading-relaxed text-slate-500 dark:text-slate-500">
            This is a personal website. All views are my own and do not represent any
            current or former employer. Professional examples have been intentionally
            generalised to protect employer, customer and project confidentiality.
          </p>
        </div>
      </footer>
    </div>
  );
}
