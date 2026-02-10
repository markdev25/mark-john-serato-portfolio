import {
  Network,
  Code2,
  Settings,
  Database,
  HardDrive,
  Shield,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: Network,
      title: "Network Configuration & Troubleshooting",
      description:
        "Expert in configuring, managing, and troubleshooting complex network infrastructures",
    },
    {
      icon: Code2,
      title: "Frontend Web Development",
      description:
        "Building responsive and interactive user interfaces with modern frontend technologies",
    },
    {
      icon: Settings,
      title: "System Support & Maintenance",
      description:
        "Comprehensive system administration and maintenance for optimal performance and uptime",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Design and management of relational and non-relational databases with focus on optimization",
    },
    {
      icon: HardDrive,
      title: "Hardware & Software Integration",
      description:
        "Seamless integration of hardware and software components for unified solutions",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 border-t border-slate-200"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              My Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive range of technical expertise to deliver complete solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
