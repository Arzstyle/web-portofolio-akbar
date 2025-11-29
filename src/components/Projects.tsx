import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Smartphone, FileText } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-gray-50',
      card: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600',
      button: 'bg-gray-900 hover:bg-gray-800 text-white',
      buttonDisabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
      badge: 'bg-blue-100 text-blue-600',
    },
    dark: {
      bg: 'bg-gray-800',
      card: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      button: 'bg-cyan-500 hover:bg-cyan-600 text-gray-900',
      buttonDisabled: 'bg-gray-700 text-gray-500 cursor-not-allowed',
      badge: 'bg-cyan-900/50 text-cyan-400',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-purple-500',
      button: 'bg-purple-400 hover:bg-purple-500 text-white',
      buttonDisabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
      badge: 'bg-purple-100 text-purple-600',
    },
  };

  const styles = themeStyles[theme];

  const projects = [
    {
      title: t('project1_title'),
      subtitle: t('project1_subtitle'),
      description: t('project1_desc'),
      link: '#',
      linkText: t('projects_visit'),
      icon: ExternalLink,
      isActive: true,
    },
    {
      title: t('project2_title'),
      subtitle: t('project2_subtitle'),
      description: t('project2_desc'),
      link: '#',
      linkText: t('projects_open_app'),
      icon: Smartphone,
      isActive: true,
    },
    {
      title: t('project3_title'),
      subtitle: t('project3_subtitle'),
      description: t('project3_desc'),
      link: '#',
      linkText: t('projects_visit'),
      icon: ExternalLink,
      isActive: true,
    },
    {
      title: t('project4_title'),
      subtitle: t('project4_subtitle'),
      description: t('project4_desc'),
      link: '#',
      linkText: t('projects_open_streamlit'),
      icon: ExternalLink,
      isActive: true,
    },
    {
      title: t('project5_title'),
      subtitle: t('project5_subtitle'),
      description: t('project5_desc'),
      link: null,
      linkText: t('projects_docs_only'),
      icon: FileText,
      isActive: false,
    },
  ];

  return (
    <section id="projects" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('projects_title')}
            </h2>
            <p className={`text-xl ${styles.accent}`}>{t('projects_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-4">
                  <span className={`${styles.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {project.subtitle}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${styles.text}`}>{project.title}</h3>
                <p className={`${styles.textSecondary} mb-6`}>{project.description}</p>

                {project.isActive ? (
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${styles.button}`}
                  >
                    <project.icon className="w-4 h-4" />
                    {project.linkText}
                  </a>
                ) : (
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${styles.buttonDisabled}`}>
                    <project.icon className="w-4 h-4" />
                    {project.linkText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
