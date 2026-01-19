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
      "Working with categories and content hierarchy",
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
      "Product options and variants setup"
      
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
      "Article and menu item meta configuration",
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
      "We're here to help you succeed 🎉"
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white text-slate-700 overflow-hidden relative font-sans" >
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
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(5px) translateY(-3px); }
          75% { transform: translateX(-5px) translateY(3px); }
        }
        
        .animate-bounce-subtle { animation: bounceSubtle 3s ease-in-out infinite; }
        .animate-item { animation: fadeSlideIn 0.6s ease-out forwards; opacity: 0; }
        .animate-wave { animation: wave 4s ease-in-out infinite; }
      `}</style>
      
      {/* Decorative map elements - Philippines */}
      <svg className="absolute top-12 right-1/3 w-24 h-32 opacity-60" viewBox="0 0 100 140" fill="none">
        <path d="M50 10 C60 20, 70 15, 65 30 C60 45, 75 50, 70 65 C65 80, 55 75, 50 90 C45 75, 35 80, 30 65 C25 50, 40 45, 35 30 C30 15, 40 20, 50 10" fill={colors.secondary} opacity="0.7"/>
        <ellipse cx="45" cy="110" rx="12" ry="8" fill={colors.secondary} opacity="0.5"/>
        <ellipse cx="60" cy="125" rx="8" ry="5" fill={colors.secondary} opacity="0.4"/>
      </svg>
      
      {/* Decorative map elements - Australia */}
      <svg className="absolute bottom-24 right-12 w-40 h-32 opacity-50" viewBox="0 0 160 130">
        <path d="M20 50 C30 30, 60 25, 90 30 C120 35, 140 50, 145 70 C150 90, 130 110, 100 115 C70 120, 40 110, 25 90 C10 70, 10 70, 20 50" fill={colors.accent} stroke={colors.primary} strokeWidth="2" opacity="0.6"/>
        <ellipse cx="130" cy="45" rx="15" ry="12" fill={colors.accent} opacity="0.4"/>
      </svg>
      
      {/* Wave decorations */}
      <svg className="absolute bottom-32 left-8 w-16 h-8 animate-wave" viewBox="0 0 60 20" fill="none">
        <path d="M0 10 Q15 0, 30 10 T60 10" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
      <svg className="absolute bottom-20 left-24 w-12 h-6 animate-wave" style={{animationDelay: '0.5s'}} viewBox="0 0 60 20" fill="none">
        <path d="M0 10 Q15 0, 30 10 T60 10" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>

      <header className="relative z-10 flex items-center justify-between px-4 py-4 md:px-8 md:py-5">
       <div className="flex items-center gap-2 md:gap-3">
    <img 
      src="https://cdn.prod.website-files.com/64599cdb3f68926882696e2b/6865bd5ebb0f190ad15ffc46_yoonet-logo.webp" 
      alt="Yoonet" 
      /* Updated heights: h-12 (48px) on mobile, h-16 (64px) on desktop */
      className="h-12 md:h-16 w-auto object-contain" 
    />
  </div>

        
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs font-mono" style={{color: colors.textLight}}>
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <div className="h-1.5 w-16 md:w-24 rounded-full overflow-hidden" style={{backgroundColor: `${colors.primary}20`}}>
            <div 
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                backgroundColor: colors.primary
              }}
            />
          </div>
        </div>
      </header>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-140px)] px-4 md:px-8 lg:px-16 py-4 md:py-8">
        <div className="flex-1 flex flex-col justify-center mb-6 lg:mb-0 lg:pr-10">
          <div className={`transition-all duration-500 ${isAnimating ? (direction === 'next' ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8') : 'opacity-100 translate-x-0'}`}>
            <div className="text-4xl md:text-5xl lg:text-6xl mb-4 animate-bounce-subtle">
              {slide.icon}
            </div>
            {slide.id !== 15 && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4"
                style={{ backgroundColor: `${colors.secondary}30`, color: colors.coral }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
                MODULE {String(slide.id).padStart(2, '0')}
              </div>
            )}
            <h1 
              className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-none tracking-tight mb-2"
              style={{color: colors.primary}}
            >
              {slide.title}
            </h1>
            {slide.subtitle && (
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight"
                style={{ color: colors.textLight }}
              >
                {slide.subtitle}
              </h2>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center lg:pl-10 lg:border-l" style={{borderColor: `${colors.primary}20`}}>
          <div className={`transition-all duration-500 delay-100 ${isAnimating ? (direction === 'next' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`}>
            <h3 className="text-xs font-bold tracking-widest mb-5" style={{color: colors.textLight}}>
              WHAT YOU'LL LEARN
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {slide.content.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 group animate-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span 
                    className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${colors.secondary}25`,
                      color: colors.coral
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span 
                    className="text-sm md:text-base lg:text-lg leading-relaxed pt-1 transition-colors duration-300"
                    style={{color: colors.textDark}}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-white via-white/95 to-transparent pt-10 pb-4 px-4 md:px-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-11 h-11 md:w-12 md:h-12 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group border-2"
              style={{ 
                borderColor: colors.primary,
                color: colors.primary
              }}
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="w-11 h-11 md:w-12 md:h-12 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group hover:brightness-110"
              style={{ backgroundColor: colors.primary }}
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1.5 flex-wrap justify-center max-w-sm">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-6' : 'hover:opacity-80'
                }`}
                style={{ 
                  backgroundColor: index === currentSlide ? colors.primary : `${colors.primary}30`
                }}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs" style={{color: colors.textLight}}>
            <kbd className="px-2 py-1 rounded font-mono text-xs" style={{backgroundColor: `${colors.primary}15`}}>←</kbd>
            <kbd className="px-2 py-1 rounded font-mono text-xs" style={{backgroundColor: `${colors.primary}15`}}>→</kbd>
            <span className="ml-1">Navigate</span>
          </div>
        </div>
      </nav>
    </div>
  );
}