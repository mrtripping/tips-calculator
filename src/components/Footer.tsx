import type { DeveloperProfile } from "../types/developer";

type FooterProps = {
  profile: DeveloperProfile | null;
  loading: boolean;
};

export default function Footer({ profile, loading }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (loading || !profile) {
    return (
      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              Cargando información del desarrollador...
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-12 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* About Me Section - Compact & Clickable */}
        <div className="flex justify-center">
          <a 
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300"
          >
            <img 
              src={profile.avatarUrl} 
              alt={profile.name}
              className="w-10 h-10 rounded-full border border-teal-400 shrink-0 group-hover:ring-2 group-hover:ring-teal-400/30 transition-all duration-300"
            />
            <div className="text-center">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold group-hover:text-teal-400 transition-colors duration-300">{profile.name}</h3>
                <svg 
                  className="w-3 h-3 text-gray-400 group-hover:text-teal-400 transition-all duration-300 group-hover:translate-x-1 shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">@{profile.githubUsername}</p>
            </div>
          </a>
        </div>

        {/* Bottom Footer - Copyright */}
        <div className="border-t border-gray-800 mt-3 pt-3">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-gray-400 text-center">
              <a 
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors duration-300 hover:underline"
              >
                {profile.name}
              </a> • All rights reserved 2020-{currentYear} ©
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-400">Made with</span>
              <span className="text-red-500">❤️</span>
              <span className="text-xs text-gray-400">by</span>
              <a 
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:underline"
              >
                {profile.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
