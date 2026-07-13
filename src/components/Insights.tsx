import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

export interface Article {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  authorInitials: string;
  authorBg: string;
}

export const insightsArticles: Article[] = [
  {
    slug: 'why-most-startups-fail-at-scale',
    category: 'Growth Strategy',
    date: 'July 10, 2026',
    readTime: '8 min',
    title: 'Why Most Startups Fail at Scale',
    description: 'Growth stalls, margins shrink, teams become overwhelmed. Most startups that struggle do so because their business model was never designed to scale.',
    author: 'Aashish Chandra',
    authorInitials: 'AC',
    authorBg: 'bg-amber-100',
  },
  {
    slug: 'consumer-insights-vs-market-research',
    category: 'Product & PMF',
    date: 'July 8, 2026',
    readTime: '6 min',
    title: 'Consumer Insights vs. Market Research',
    description: 'Most startups know more about their market than their actual customers. We examine the distinction between market size statistics and true consumer behavior.',
    author: 'Rahul Krishnamurthy',
    authorInitials: 'RK',
    authorBg: 'bg-amber-100',
  },
  {
    slug: 'from-idea-to-10x',
    category: 'Growth Strategy',
    date: 'July 5, 2026',
    readTime: '7 min',
    title: 'From Idea to 10X',
    description: 'How design thinking moves beyond wireframes and UI components to reshape business strategy, question assumptions, and reduce risk.',
    author: 'Shreya Mehta',
    authorInitials: 'SM',
    authorBg: 'bg-[#EEF8E6]',
  },
  {
    slug: 'the-90-day-sprint',
    category: 'Founder Mindset',
    date: 'July 1, 2026',
    readTime: '6 min',
    title: 'The 90-Day Sprint',
    description: 'Activity and progress are not the same thing. Learn how a compressed, 90-day execution cycle unlocks clarity and sustainable product-market fit.',
    author: 'Editorial',
    authorInitials: 'ED',
    authorBg: 'bg-gray-100',
  },
  {
    slug: 'building-purposeful-businesses',
    category: 'Team & Culture',
    date: 'June 28, 2026',
    readTime: '7 min',
    title: 'Building Purposeful Businesses',
    description: 'Why profit and purpose are not opposing forces. The strongest businesses don\'t grow despite their purpose — they grow because of it.',
    author: 'Shreya Mehta',
    authorInitials: 'SM',
    authorBg: 'bg-[#EEF8E6]',
  },
  {
    slug: 'what-luxury-and-deep-tech-startups-have-in-common',
    category: 'Founder Mindset',
    date: 'June 25, 2026',
    readTime: '8 min',
    title: 'What Luxury and Deep-Tech Startups Have in Common',
    description: 'Whether you are selling premium senior living or advanced industrial robotics, the challenge is the same: helping customers build belief before they buy.',
    author: 'Rahul Krishnamurthy',
    authorInitials: 'RK',
    authorBg: 'bg-amber-100',
  },
  {
    slug: 'the-ecosystem-advantage',
    category: 'Growth Strategy',
    date: 'June 20, 2026',
    readTime: '7 min',
    title: 'The Ecosystem Advantage',
    description: 'Why partnership strategy is a business model decision, not a networking activity. How to design a mutually beneficial ecosystem at every stage.',
    author: 'Aashish Chandra',
    authorInitials: 'AC',
    authorBg: 'bg-amber-100',
  },
];

const categories = [
  'All',
  'Growth Strategy',
  'Product & PMF',
  'Founder Mindset',
  'Team & Culture',
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  // Auto-scroll logic for featured blog slider (cycles every 5s, resets timer on manual click)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeaturedIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeFeaturedIndex]);

  // Filtered articles
  const filteredArticles = selectedCategory === 'All'
    ? insightsArticles
    : insightsArticles.filter(art => art.category === selectedCategory);

  const featuredArticle = insightsArticles[activeFeaturedIndex] || insightsArticles[0];
  const featuredImages = [
    '/whiteboard_sticky_notes.png',
    '/strategy_documents.png',
    '/whiteboard_sticky_notes.png',
  ];
  const featuredImg = featuredImages[activeFeaturedIndex % featuredImages.length];

  return (
    <div className="min-h-screen pt-20">
      {/* ─── Hero Title ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <h1
          className="text-[40px] font-semibold md:text-[40px] text-[#1a1a1a] leading-tight"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Insight
        </h1>
      </section>

      {/* ─── Featured Article Banner Slider ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="border border-[#EAEAEA] rounded-2xl overflow-hidden bg-white grid lg:grid-cols-[1.1fr_1.3fr] relative">
          {/* Left - Image */}
          <div className="h-64 lg:h-auto overflow-hidden relative">
            <img
              src={featuredImg}
              alt="Whiteboard with sticky notes"
              className="w-full h-100 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Background illustrations from GetInTouch */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0">
              <img
                src="/GetInTouchElement.png"
                alt="Decorative shapes"
                className="h-20 object-contain opacity-90"
              />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="bg-[#2F4A2F] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
                <span className="text-[12px] text-gray-400">{featuredArticle.date}</span>
                <span className="text-[12px] text-gray-400">•</span>
                <span className="text-[12px] text-gray-400">{featuredArticle.readTime} read</span>
              </div>

              <h2
                className="text-[26px] md:text-[34px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#2F4A2F] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                <Link to={`/insights/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed font-light">
                {featuredArticle.description}
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="text-[#1a1a1a] hover:text-[#2F4A2F] text-[13px] font-semibold flex items-center gap-1.5 transition-colors group-link"
              >
                Read the full piece
                <span className="text-[14px]">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2.5 mt-6">
          <button
            onClick={() => setActiveFeaturedIndex(0)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activeFeaturedIndex === 0 ? 'bg-[#E29A52] w-5' : 'bg-gray-200'
            }`}
          />
          <button
            onClick={() => setActiveFeaturedIndex(1)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activeFeaturedIndex === 1 ? 'bg-[#E29A52] w-5' : 'bg-gray-200'
            }`}
          />
          <button
            onClick={() => setActiveFeaturedIndex(2)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activeFeaturedIndex === 2 ? 'bg-[#E29A52] w-5' : 'bg-gray-200'
            }`}
          />
        </div>
      </section>

      {/* ─── Filters & Articles Grid ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filters Scrollable list */}
        <div className="flex items-center gap-4 pb-6 mb-8 overflow-x-auto scrollbar-none">
          <span className="text-[#8e8e8e] text-[10.5px] font-bold tracking-widest uppercase shrink-0">
            FILTER BY
          </span>
          <div className="flex gap-2 shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-[4px] border text-[12.5px] transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111] font-medium'
                      : 'bg-white text-[#555555] border-gray-200 hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid List */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => {
              // Dynamic background element mapping from Offerings
              const elements = [
                '/Offering/element_3.png', // card 1 (B2B Sales)
                '/Offering/element_2.png', // card 2 (Pricing)
                '/Offering/element_4.png', // card 3 (Product & PMF)
                '/Offering/element_1.png', // card 4 (Pricing)
                '/Offering/element_2.png', // card 5 (Product & PMF)
                '/Offering/element_3.png', // card 6 (Pricing)
              ];
              const elementImg = elements[index % elements.length];

              // Custom badge color per category
              const isPricing = article.category.toLowerCase() === 'pricing' || article.category.toLowerCase() === 'fundraising';
              const badgeBg = isPricing ? 'bg-[#FFF0E0]' : 'bg-[#E2F0DD]';
              const badgeText = isPricing ? 'text-[#D97706]' : 'text-[#386638]';

              return (
                <div
                  key={article.slug}
                  className="border border-[#EAEAEA] rounded-2xl p-6 bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[285px]"
                >
                  {/* Background Ornament */}
                  <img
                    src={elementImg}
                    alt="ornament"
                    className="absolute -bottom-2 -right-2 w-16 h-16 opacity-60 group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none z-0"
                  />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide ${badgeBg} ${badgeText}`}>
                        {article.category}
                      </span>
                      <span className="text-[12px] text-gray-400 font-light">{article.date}</span>
                    </div>

                    <h3
                      className="text-[17px] font-bold text-[#111111] leading-snug group-hover:text-[#2F4A2F] transition-colors"
                      style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                    >
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-[12.5px] text-[#555555] leading-relaxed font-light line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Card Footer - Author Profile */}
                  <div className="border-t border-gray-100 pt-4 mt-6 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${article.authorBg} flex items-center justify-center font-bold text-[11px] text-[#2F4A2F]`}>
                        {article.authorInitials}
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-[#1a1a1a]">{article.author}</div>
                        <div className="text-[10px] text-gray-400 font-light">{article.readTime} read</div>
                      </div>
                    </div>

                    <Link
                      to={`/insights/${article.slug}`}
                      className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#2F4A2F]/10 flex items-center justify-center text-gray-400 group-hover:text-[#2F4A2F] transition-all"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transform group-hover:translate-x-0.5 transition-transform">
                        <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-[14px] text-gray-400">No insights found in this category.</p>
          </div>
        )}
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}
