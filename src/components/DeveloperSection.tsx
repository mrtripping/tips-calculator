import type { DeveloperProfile } from "../types/developer";

type DeveloperSectionProps = {
  profile: DeveloperProfile;
  variant?: "default" | "compact" | "minimal";
};

export default function DeveloperSection({ 
  profile, 
  variant = "default" 
}: DeveloperSectionProps) {
  if (variant === "minimal") {
    return (
      <footer className="mt-12 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name}
              className="w-8 h-8 rounded-full"
            />
            <a 
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Desarrollado por {profile.name}
            </a>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "compact") {
    return (
      <section className="mt-12 py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-black text-lg">About Me</h3>
              <p className="text-gray-600 text-sm mt-1">{profile.bio}</p>
            </div>
            <a 
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="mt-16 py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-2">About Me</h2>
          <p className="text-gray-300 mb-8">Desarrollador detrás de este proyecto</p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={profile.avatarUrl} 
                alt={profile.name}
                className="w-24 h-24 rounded-full border-4 border-teal-400"
              />
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-black mb-2">{profile.name}</h3>
                <p className="text-gray-300 mb-4">{profile.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
                  {profile.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-teal-400 text-gray-900 px-3 py-1 rounded-full text-xs font-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-lg font-black transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Ver mi GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}