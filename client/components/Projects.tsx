export default function Projects() {
  const projects = [
    {
      title: "Support Library Management System",
      description:
        "A comprehensive library management solution focused on efficient borrowing and returning of books. Improves tracking, availability, and record management with an intuitive user interface.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      demo: "#",
    },
    {
      title: "Fingerprint Door Lock Scanner",
      description:
        "Secure access control system using biometric authentication. Designed for safety and reliability, this system provides cutting-edge security for facilities and premises.",
      technologies: ["Python", "Biometric API", "Hardware Integration"],
      link: "#",
      demo: "#",
    },
    {
      title: "Loan Amortization App",
      description:
        "User-friendly financial tool that calculates loan schedules, interest, and payment breakdowns. Provides accurate and transparent financial analysis for borrowers.",
      technologies: ["React", "JavaScript", "Financial Calculations"],
      link: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white border-t border-slate-200"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing my best work across different domains and technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Project Header with Gradient */}
                <div className="h-40 bg-gradient-to-br from-primary to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_0%,rgba(255,255,255,0.3)_100%)]"></div>
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                      &lt;/&gt;
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
