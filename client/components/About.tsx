export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white border-t border-slate-200"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fresh graduate with hands-on IT experience and a passion for technology solutions
            </p>
          </div>

          {/* Profile & Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in items-start">
            {/* Profile Image */}
            <div className="flex justify-center lg:col-span-1 animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc94c0bc1ed5d49f996d4dc690f0c7492%2Fc25e42e91655401687a5c181abba0bca?format=webp&width=800&height=1200"
                  alt="Mark John Serato"
                  className="relative w-64 h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Experience Card */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">Fresh Graduate</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Career Stage
                </h3>
                <p className="text-slate-600">
                  Equipped with academic knowledge and practical IT experience
                </p>
              </div>

              {/* Skills Card */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">1 yr & 6 months</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Technical Experience
                </h3>
                <p className="text-slate-600">
                  Hands-on experience in IT systems and technical projects
                </p>
              </div>

              {/* Projects Card */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Successful Projects
                </h3>
                <p className="text-slate-600">
                  System-based projects and infrastructure solutions delivered
                </p>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
            <div className="p-8 bg-blue-50 border-l-4 border-primary rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                My Professional Journey
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I am a dedicated and hardworking professional and a family breadwinner, seeking an opportunity to build a stable and long-term career as a CloudStack Engineer. During my academic years, I actively developed system-based projects and collaborated with the IT department, including creating systems and assisting in robotics projects showcased in exhibits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I also gained hands-on experience supporting data center operations, particularly in maintaining office infrastructure and networking systems. With a strong foundation in IT, networking, and system development, I am eager to continuously learn, grow, and contribute my skills to an organization that values reliability, innovation, and long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
