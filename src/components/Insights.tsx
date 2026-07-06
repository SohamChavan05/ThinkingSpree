import { useState } from 'react';
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
    slug: 'five-questions-broken-sales',
    category: 'B2B Sales',
    date: 'May 12, 2025',
    readTime: '7 min',
    title: 'The five questions that expose a broken sales motion',
    description: 'Before you retrain the team or rebuild the pipeline, answer these. Most founders are fixing the wrong thing — and it shows up in their close rate.',
    author: 'Rahul Krishnamurthy',
    authorInitials: 'RK',
    authorBg: 'bg-amber-100',
  },
  {
    slug: 'founder-pricing-psychology',
    category: 'Pricing',
    date: 'May 12, 2025',
    readTime: '7 min',
    title: "Charging what you're worth: the founder's pricing psychology problem",
    description: "Underpricing isn't humility – it's a positioning signal. We break down the three mental models that keep founders stuck at the wrong price point.",
    author: 'Shreya Mehta',
    authorInitials: 'SM',
    authorBg: 'bg-[#EEF8E6]',
  },
  {
    slug: 'twenty-customer-interviews-learned',
    category: 'Product & PMF',
    date: 'May 12, 2025',
    readTime: '7 min',
    title: 'Twenty customer interviews and what we actually learned',
    description: "We run customer discovery in every Growth Strategy T-Sprint. After hundreds of sessions, here's what most founders get wrong — and the one question that change everything.",
    author: 'Editorial',
    authorInitials: 'ED',
    authorBg: 'bg-gray-100',
  },
  {
    slug: 'why-gtm-isnt-broken',
    category: 'Growth Strategy',
    date: 'May 10, 2025',
    readTime: '5 min',
    title: "Why your GTM isn't broken — your clarity is",
    description: "Every week, a founder tells us their GTM is the problem. The deck is sharp. The team is willing. But the pipeline is quiet. After 1,500+ T-Sprints, we've learned that most go-to-market failures trace back to one thing: the team doesn't actually agree on who they're selling to and why now.",
    author: 'Aashish Chandra',
    authorInitials: 'AC',
    authorBg: 'bg-amber-100',
  },
  {
    slug: 'founder-pricing-psychology-2',
    category: 'Pricing',
    date: 'May 12, 2025',
    readTime: '7 min',
    title: "Charging what you're worth: the founder's pricing psychology problem",
    description: "Underpricing isn't humility – it's a positioning signal. We break down the three mental models that keep founders stuck at the wrong price point.",
    author: 'Shreya Mehta',
    authorInitials: 'SM',
    authorBg: 'bg-[#EEF8E6]',
  },
  {
    slug: 'twenty-customer-interviews-learned-2',
    category: 'Product & PMF',
    date: 'May 12, 2025',
    readTime: '7 min',
    title: 'Twenty customer interviews and what we actually learned',
    description: "We run customer discovery in every Growth Strategy T-Sprint. After hundreds of sessions, here's what most founders get wrong — and the one question that change everything.",
    author: 'Editorial',
    authorInitials: 'ED',
    authorBg: 'bg-gray-100',
  },
];

const categories = [
  'All',
  'Growth Strategy',
  'B2B Sales',
  'Fundraising',
  'Product & PMF',
  'Pricing',
  'Team & Culture',
  'Founder Mindset',
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  // Filtered articles
  const filteredArticles = selectedCategory === 'All'
    ? insightsArticles
    : insightsArticles.filter(art => art.category === selectedCategory);

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
              src="/whiteboard_sticky_notes.png"
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
                  GROWTH STRATEGY
                </span>
                <span className="text-[12px] text-gray-400">May 10, 2025</span>
                <span className="text-[12px] text-gray-400">•</span>
                <span className="text-[12px] text-gray-400">5 min read</span>
              </div>

              <h2
                className="text-[26px] md:text-[34px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#2F4A2F] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                <Link to="/insights/why-gtm-isnt-broken">
                  Why your GTM isn't broken — your clarity is
                </Link>
              </h2>

              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed font-light">
                Every week, a founder tells us their GTM is the problem. The deck is sharp. The team is willing. But the pipeline is quiet. After 1,500+ T-Sprints, we've learned that most go-to-market failures trace back to one thing: the team doesn't actually agree on who they're selling to and why now. Here's the diagnostic we use — and how to fix it in a single sprint.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                to="/insights/why-gtm-isnt-broken"
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
