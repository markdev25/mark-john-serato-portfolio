import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                Mark John
                <br />
                <span className="text-primary">Serato</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                IT Networking Specialist & Web Developer
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Building secure networks and smart web solutions that work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:markjohnserato42@gmail.com"
                className="text-slate-600 hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Illustration Area */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 border border-primary/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
                  &lt;/&gt;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
