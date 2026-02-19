"use client";

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    title: "Joomla 3",
    subtitle: "Introduction",
    content: [
      "Understanding the Joomla 3 architecture and core concepts",
      "Navigating the administrator dashboard",
      "User roles, permissions, and access levels explained",
      "Essential settings and global configuration overview",
    ],
    icon: "🚀"
  },
  {
    id: 2,
    title: "Content Management",
    subtitle: "Web Updates",
    content: [
      "Creating / editing new products",
      "Setting up the categories",
      "Using the WYSIWYG editor / builder for rich content creation",
      "Managing media files and the Media Manager",
    ],
    icon: "📝"
  },
  {
    id: 3,
    title: "J2Store",
    subtitle: "Specific Training",
    content: [
      "J2Store dashboard overview and key features",
      "Understanding store configuration and settings",
    ],
    icon: "🛒"
  },
  {
    id: 4,
    title: "Custom Page",
    subtitle: "Creation",
    content: [
      "Quick guide on creating new landing page for a new line",
      "Adding images, links, and multimedia content",
      "SEO-friendly URLs and alias configuration",
      "Adding of hidden menu to add page",
      "Preview and publish workflow"
    ],
    icon: "📄"
  },
  {
    id: 5,
    title: "Website Backup",
    subtitle: "Generation",
    content: [
      "Using Akeeba Backup for complete site backups",
      "Downloading and storing backups",
    ],
    icon: "💾"
  },
  {
    id: 6,
    title: "Update Images",
    subtitle: "On Your Website",
    content: [
      "Locating existing images in the Media Manager",
      "Best practices for image optimisation",
      "Supported formats and size recommendations",
    ],
    icon: "🖼️"
  },
  {
    id: 7,
    title: "Adding New",
    subtitle: "Products",
    content: [
      "Creating product entries in J2Store",
      "Setting product types: simple, variable, configurable",
      "Adding product images",
      "Configuring pricing, inventory, and shipping",
      "Product options and variants setup",
      "Using the WYSIWYG editor / builder for rich content creation",
      "Managing media files and the Media Manager"

    ],
    icon: "➕"
  },
  {
    id: 8,
    title: "Updating Products",
    subtitle: "Price, SKU, Image & Description",
    content: [
      "Accessing and editing existing products",
      "Modifying pricing and special offers",
      "Updating SKU codes",
      "Replacing product images",
      "Revising descriptions for better conversions"
    ],
    icon: "✏️"
  },
  {
    id: 9,
    title: "Product Deletion",
    subtitle: "& Management",
    content: [
      "Safe deletion procedures and considerations",
      "Unpublishing vs permanent deletion",
    ],
    icon: "🗑️"
  },

     {
    id: 10,
    title: "Menu Structure",
    subtitle: "& Restructuring",
    content: [
      "Understanding Joomla menu architecture",
      "Creating and managing menu items",
      "Menu module positions and display",
      "Dropdown menus and nested navigation",
         ],
    icon: "📋"
  },
  {
    id: 11,
    title: "Device Review",
    subtitle: "Quarterly Checks",
    content: [
      "Desktop browser testing checklist",
      "Tablet and mobile responsiveness verification",
            "Performance testing on different devices",
      "Documenting and prioritising fixes"
    ],
    icon: "📱"
  },
  {
    id: 12,
    title: "Meta Titles",
    subtitle: "& Descriptions",
    content: [
      "Understanding meta data importance for SEO",
      "Writing compelling meta titles (under 60 characters)",
      "Crafting effective meta descriptions (under 160)",
          ],
    icon: "🔍"
  },
  {
    id: 13,
    title: "Robots Tags",
    subtitle: "& Indexing Control",
    content: [
      "Index vs noindex: when to use each",
      "Follow vs nofollow link directives",
      "Configuring robots.txt in Joomla",
      "Preventing duplicate content indexing"
    ],
    icon: "🤖"
  },
  {
    id: 14,
    title: "Troubleshooting",
    subtitle: "Common Issues",
    content: [
      "Extension conflicts and debugging",
      "Cache clearing and performance issues",
    ],
    icon: "🛠️"
  },
  {
    id: 15,
    title: "Thank You",
    subtitle: "Questions & Next Steps",
    content: [
      "Practice makes perfect — don't hesitate to explore!",
      "Reach out to Yoonet support for any assistance",
      "Documentation and resources available on request",
      "We're here to help you!"
    ],
    icon: "🙏"
  }
];

const colors = {
  primary: '#7B8CDE',
  secondary: '#F5A4A4',
  accent: '#9BD4E4',
  background: '#FFFFFF',
  textDark: '#5B6BC0',
  textLight: '#8E99C9',
  coral: '#E8847C',
};

export default function JoomlaTrainingPresentation() {
  const slideOrder = [0, 11, 12, 3, 5, 2, 6, 7, 10, 14];
  const orderedSlides = slideOrder.map((sourceIndex, index) => ({
    ...slides[sourceIndex],
    id: index + 1,
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
    setSidebarOpen(false);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    if (currentSlide < orderedSlides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide, orderedSlides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = orderedSlides[currentSlide];

  return (
    <div className="min-h-screen bg-white text-slate-700 overflow-hidden relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        * { font-family: 'Nunito', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-bounce-subtle { animation: bounceSubtle 3s ease-in-out infinite; }
        .animate-item { animation: fadeSlideIn 0.5s ease-out forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }

        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: ${colors.primary}30; border-radius: 2px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: ${colors.primary}50; }
      `}</style>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Module Navigation Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white border-r z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ borderColor: `${colors.primary}15` }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-5 border-b" style={{ borderColor: `${colors.primary}15` }}>
            <img
              src="https://cdn.prod.website-files.com/64599cdb3f68926882696e2b/6865bd5ebb0f190ad15ffc46_yoonet-logo.webp"
              alt="Yoonet"
              className="h-10 w-auto object-contain mb-3"
            />
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${colors.primary}15` }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentSlide + 1) / orderedSlides.length) * 100}%`,
                    backgroundColor: colors.primary
                  }}
                />
              </div>
              <span className="text-xs font-mono font-semibold" style={{ color: colors.textLight }}>
                {Math.round(((currentSlide + 1) / orderedSlides.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Module List */}
          <nav className="flex-1 overflow-y-auto py-3 scrollbar-thin">
            <div className="px-4 mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: colors.textLight }}>
                Training Modules
              </span>
            </div>
            {orderedSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 group ${
                  index === currentSlide ? 'bg-opacity-100' : 'hover:bg-opacity-50'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? `${colors.primary}12` : 'transparent'
                }}
              >
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-200 ${
                    index === currentSlide ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: index === currentSlide ? colors.primary : `${colors.secondary}25`,
                    color: index === currentSlide ? 'white' : colors.coral
                  }}
                >
                  {index < currentSlide ? '✓' : s.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm font-semibold truncate transition-colors ${
                      index === currentSlide ? '' : ''
                    }`}
                    style={{ color: index === currentSlide ? colors.primary : colors.textDark }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="text-xs truncate"
                    style={{ color: colors.textLight }}
                  >
                    {s.subtitle}
                  </div>
                </div>
                {index === currentSlide && (
                  <div
                    className="w-1 h-8 rounded-full animate-pulse-slow"
                    style={{ backgroundColor: colors.primary }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Keyboard Hints */}
          <div className="p-4 border-t hidden lg:block" style={{ borderColor: `${colors.primary}15` }}>
            <div className="flex items-center justify-center gap-2 text-xs" style={{ color: colors.textLight }}>
              <kbd className="px-2 py-1 rounded font-mono" style={{ backgroundColor: `${colors.primary}10` }}>←</kbd>
              <kbd className="px-2 py-1 rounded font-mono" style={{ backgroundColor: `${colors.primary}10` }}>→</kbd>
              <span>to navigate</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-72 min-h-screen flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between px-4 py-4 border-b" style={{ borderColor: `${colors.primary}15` }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold" style={{ color: colors.textLight }}>
              {String(currentSlide + 1).padStart(2, '0')} / {String(orderedSlides.length).padStart(2, '0')}
            </span>
            <div className="h-1.5 w-20 rounded-full overflow-hidden" style={{ backgroundColor: `${colors.primary}15` }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${((currentSlide + 1) / orderedSlides.length) * 100}%`,
                  backgroundColor: colors.primary
                }}
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-16 py-8 md:py-12">
          <div className={`transition-all duration-300 ${isAnimating ? (direction === 'next' ? 'opacity-0 -translate-y-4' : 'opacity-0 translate-y-4') : 'opacity-100 translate-y-0'}`}>
            {/* Module Header */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl md:text-6xl animate-bounce-subtle">{slide.icon}</span>
                {slide.id !== 15 && (
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                    style={{ backgroundColor: `${colors.secondary}25`, color: colors.coral }}
                  >
                    MODULE {String(slide.id).padStart(2, '0')}
                  </div>
                )}
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1"
                style={{ color: colors.primary }}
              >
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-light"
                  style={{ color: colors.textLight }}
                >
                  {slide.subtitle}
                </h2>
              )}
            </div>

            {/* Learning Objectives Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: colors.primary }} />
                <h3 className="text-sm font-bold tracking-widest uppercase" style={{ color: colors.textLight }}>
                  Learning Objectives
                </h3>
              </div>

              {/* Learning Cards Grid */}
              <div className="grid gap-4">
                {slide.content.map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg animate-item cursor-default"
                    style={{
                      animationDelay: `${index * 80}ms`,
                      borderColor: `${colors.primary}15`,
                      backgroundColor: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.backgroundColor = `${colors.primary}05`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${colors.primary}15`;
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${colors.secondary}20`,
                          color: colors.coral
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed pt-0.5"
                        style={{ color: colors.textDark }}
                      >
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <nav className="sticky bottom-0 bg-white border-t px-6 md:px-12 lg:px-16 py-4" style={{ borderColor: `${colors.primary}15` }}>
          <div className="flex items-center justify-between max-w-4xl">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group border-2"
              style={{
                borderColor: colors.primary,
                color: colors.primary
              }}
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold text-sm hidden sm:inline">Previous</span>
            </button>

            {/* Progress dots - desktop only */}
            <div className="hidden md:flex items-center gap-1.5">
              {orderedSlides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8' : 'w-2 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: index === currentSlide ? colors.primary :
                                     index < currentSlide ? colors.coral : `${colors.primary}30`
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === orderedSlides.length - 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group hover:brightness-110"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="font-semibold text-sm hidden sm:inline">
                {currentSlide === orderedSlides.length - 1 ? 'Complete' : 'Next'}
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}
