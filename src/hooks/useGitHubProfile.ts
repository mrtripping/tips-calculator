import { useState, useEffect } from "react";
import type { DeveloperProfile } from "../types/developer";

export function useGitHubProfile(username: string): { profile: DeveloperProfile | null; loading: boolean; error: string | null } {
  const [profile, setProfile] = useState<DeveloperProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error('No se pudo obtener el perfil');
        }
        
        const data = await response.json();
        
        const developerProfile: DeveloperProfile = {
          name: data.name || data.login,
          bio: data.bio || "Desarrollador web apasionado por crear soluciones modernas y escalables. Especializado en frontend con React y TypeScript, siempre aprendiendo nuevas tecnologías.",
          githubUrl: data.html_url,
          githubUsername: data.login,
          avatarUrl: data.avatar_url,
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js", "Node.js"]
        };
        
        setProfile(developerProfile);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  return { profile, loading, error };
}