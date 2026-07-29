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
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Projects
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
              Digital Health Project Manager &amp; Clinical Transformation Specialist
            </p>
            <p className="mb-2 text-lg text-slate-600 dark:text-slate-400">
              Project Management | Operations Manager
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
                href="mailto:stacynyangere@gmail.com"
                className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Get in Touch
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

      {/* Key Achievements Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              30%
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Reduction in referral delays
            </p>
          </div>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              2+
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Major EMR implementations led
            </p>
          </div>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              100+
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clinicians trained on new systems
            </p>
          </div>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              NHS
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Extensive NHS experience
            </p>
          </div>
        </div>
      </section>

      {/* About & Skills - Side by Side */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Professional Summary */}
          <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Professional Summary
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Digital Health Implementation Specialist and Health Tech Specialist with
                a strong clinical background in Oncology and extensive NHS experience.
                Skilled in leading end-to-end implementations of healthcare technology
                platforms, including EMR/EPR systems, SaaS healthtech solutions, and
                AI-driven clinical tools. Proven expertise in clinical workflow
                digitization, data migration, system configuration, and seamless
                integration with existing healthcare infrastructure.
              </p>
              <p>
                Highly experienced in Agile and PRINCE2 project management methodologies,
                informatics standards (HL7, FHIR), and stakeholder engagement across
                clinical, technical, and operational teams. Specialized in onboarding
                healthcare organizations, delivering comprehensive training programs, and
                driving user adoption to ensure successful go-lives and optimal system
                utilization. Consistently delivers innovative, data-driven healthcare
                solutions that enhance patient outcomes and operational effectiveness within
                NHS and private healthcare settings.
              </p>
            </div>
          </div>

          {/* Key Skills & Tools */}
          <div id="skills" className="space-y-6 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Key Skills & Tools
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🏥</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Digital Health Systems
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Careology, ConnexAI, NHS systems (SystmOne, EMIS, CareFlow), EHR/EPR integration, patient pathways, HL7, FHIR
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">📊</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Data & Analysis
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Microsoft Excel (automation, KPI dashboards), Power BI, PowerPoint, SQL, data migration
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">⚙️</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Project Management
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Agile methodologies, Microsoft Project, JIRA, workflow mapping (As-Is/To-Be), UAT, go-live management, Trello, Slack, Asana
                </p>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">📋</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Clinical & Compliance
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  SOP writing, service design, clinical rollout, stakeholder engagement, GDPR compliance, regulatory standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Full Width */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20"
      >
        <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Featured Projects & Case Studies
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Careology Case Study */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Careology Implementation
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Situation:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Digital cancer care platform requiring integration with existing
                  EHR systems (including NHS systems) to enhance clinical workflows,
                  patient engagement, and remote monitoring capabilities.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Action:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Led full implementation lifecycle over 6 months: As-Is/To-Be workflow
                  mapping, HL7/FHIR-compliant EHR integration, API configuration, data
                  migration planning, comprehensive training programs (50+ hours
                  delivered), UAT coordination, and stakeholder engagement across
                  clinical, IT, and executive teams.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Result:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    95% user adoption rate
                  </span>{" "}
                  within 3 months post go-live. Enhanced clinical workflows with
                  seamless EHR integration, improved patient engagement through
                  remote monitoring, and{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    25% reduction in administrative time
                  </span>{" "}
                  for clinical staff.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                EHR Integration
              </span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-300 dark:text-slate-900">
                Workflow Mapping
              </span>
              <span className="rounded-full bg-slate-600 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-400 dark:text-slate-900">
                Agile PM
              </span>
            </div>
          </div>

          {/* ConnexAI Case Study */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                ConnexAI Deployment
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Situation:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  AI-driven communication platform requiring clinical rollout across
                  15+ frontline teams with complex usability refinement needs and
                  integration with existing NHS clinical systems.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Action:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Managed 4-month clinical rollout using Agile methodologies. Conducted
                  20+ user feedback sessions, collaborated with tech teams on UI/UX
                  refinements, configured AI analytics dashboards, developed training
                  materials, and led go-live support. Leveraged AI analytics for
                  patient trend identification and outcome prediction.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Result:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Successful deployment with{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    90% user satisfaction
                  </span>{" "}
                  rating. Optimized patient care pathways, improved communication
                  workflows by 40%, and enabled data-driven clinical decision-making
                  through real-time AI insights.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                AI Analytics
              </span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-300 dark:text-slate-900">
                Clinical Rollout
              </span>
              <span className="rounded-full bg-slate-600 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-400 dark:text-slate-900">
                User Adoption
              </span>
            </div>
          </div>

          {/* CNS Referral Pathway Project */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                CNS Referral Pathway Redesign
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Situation:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Clinical Nurse Specialist referral pathways experiencing significant
                  delays and inefficiencies, requiring optimization to improve patient
                  access and reduce wait times within NHS clinical settings.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Action:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Co-led 3-month pathway redesign project. Conducted comprehensive
                  workflow analysis, mapped As-Is/To-Be processes, integrated
                  informatics solutions with NHS systems, redesigned referral
                  workflows, and implemented new digital pathways with stakeholder
                  buy-in from clinical and operational teams.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Result:
                </h4>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <span className="text-base">30% reduction</span> in referral delays,
                  improved patient access, and enhanced informatics integration.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                Pathway Optimization
              </span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-300 dark:text-slate-900">
                Informatics Integration
              </span>
            </div>
          </div>

          {/* KPI Dashboard Project */}
          <div className="group rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                KPI Dashboard & Analytics
              </h3>
              <div className="text-3xl opacity-50 transition-opacity group-hover:opacity-100">
                →
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Situation:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Lack of real-time visibility into service performance metrics across
                  multiple clinical departments, requiring data-driven insights for
                  strategic decision-making and KPI tracking.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Action:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Designed and built advanced Excel-based automation tools and Power BI
                  dashboards integrating data from multiple NHS systems. Created 15+
                  KPI dashboards tracking patient outcomes, referral times, service
                  utilization, and operational metrics. Developed automated reporting
                  workflows and presented detailed analysis to senior leadership and
                  external stakeholders.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Result:
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    60% reduction in reporting time
                  </span>{" "}
                  through automation. Significantly enhanced service performance
                  visibility with real-time dashboards, enabling data-driven strategic
                  decisions and{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    20% improvement in operational efficiency
                  </span>{" "}
                  across departments.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                Power BI
              </span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-300 dark:text-slate-900">
                Data Visualization
              </span>
              <span className="rounded-full bg-slate-600 px-3 py-1 text-xs font-medium text-white shadow-sm dark:bg-slate-400 dark:text-slate-900">
                KPI Tracking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-16 scroll-mt-20"
      >
        <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Experience
        </h2>
        <div className="space-y-6">
          {/* Current Role */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Clinical Nurse Specialist - Health Tech Project Manager
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Lloyds Clinical
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                December 2023 - Present
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Led implementation of Careology, a digital cancer care platform,
                  enhancing clinical workflows, patient engagement, and remote
                  monitoring via integration with existing EHR systems
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Managed clinical rollout and adoption of ConnexAI, an AI-driven
                  communication platform, collaborating closely with tech teams to
                  refine usability based on frontline user feedback and analytics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Leveraged AI-driven analytics tools to identify patient trends,
                  predict clinical outcomes, and optimize patient care pathways
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Developed and delivered comprehensive digital training programs
                  using Agile project management methodologies, resulting in high
                  adoption and improved clinical outcomes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Designed and implemented standard operating procedures (SOPs),
                  ensuring compliance with clinical informatics standards including
                  HL7 and FHIR
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Built advanced Excel-based and Power BI dashboard tools for KPI
                  tracking and data visualization, significantly enhancing visibility
                  of service performance for informed strategic decisions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Presented detailed KPI analysis, performance metrics, and AI-driven
                  insights to senior leadership and external stakeholders using clear,
                  data-driven narratives
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Co-led redesign of clinical nurse specialist (CNS) referral pathways,
                  streamlining patient access, integrating informatics solutions, and
                  reducing referral delays by 30%
                </span>
              </li>
            </ul>
          </div>

          {/* Other Roles */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Disability Assessor
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Capita (Remote)
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                March 2023 - July 2023
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Conducted detailed disability assessments leveraging digital health
                  documentation systems, ensuring accuracy and timely reporting
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Improved reporting accuracy and departmental communication through
                  effective interdisciplinary collaboration
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Chemotherapy Nurse
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  HCA Healthcare
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                May 2020 - November 2021
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Coordinated complex patient care plans and supported implementation
                  of clinical improvement initiatives such as a sepsis prevention
                  project
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Served as nurse in charge, managing ward operations, task delegation,
                  and ensuring compliance with chemotherapy safety protocols
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Provided mentorship and professional development for nursing staff and
                  students, emphasizing quality patient care and clinical excellence
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Inpatient Oncology Nurse
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  The Christie NHS Trust
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                February 2019 - May 2020
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Administered chemotherapy and immunotherapy, managed comprehensive
                  patient care plans, and facilitated discharge planning
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Assisted central line insertion and management, enhancing patient
                  safety and procedural efficiency
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Inpatient Nurse
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Lancashire Teaching Hospitals NHS Trust
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                October 2018 - February 2019
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Delivered high-quality inpatient care, collaborating effectively
                  within multidisciplinary healthcare teams to ensure optimal patient
                  outcomes
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications - Side by Side */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Education
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🎓</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      MSc Healthcare Informatics
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      (in progress)
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🎓</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      BSc (Hons) Nursing
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      University of Chester
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      2015 - 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Certifications
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      PRINCE2
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Project Management Certification
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">📋</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Agile Project Manager
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      OpenClassrooms
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      October 2023 - January 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      UKONS - Chemotherapy
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Christie&apos;s School of Oncology
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      November 2019
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Project Manager Job Simulation
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Siemens Mobility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <p className="mb-8 text-base text-slate-600 dark:text-slate-400">
              I&apos;m always open to discussing digital health initiatives, project
              management opportunities, or collaboration on workflow optimization
              projects.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:stacynyangere@gmail.com"
                className="flex w-full items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                stacynyangere@gmail.com
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
        </div>
      </footer>
    </div>
  );
}
