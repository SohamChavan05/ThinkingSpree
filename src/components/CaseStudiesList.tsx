import { useState } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

export interface CaseStudy {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
}

export const caseStudiesList: CaseStudy[] = [
  {
    slug: 'two-years-stuck-12cr',
    category: 'Product & PMF',
    date: 'May 13, 2025',
    title: 'Twenty customer interviews and what we actually learned',
    description: "We run customer discovery in every Growth Strategy 1-Sprint. After hundreds of sessions, here's what most founders get wrong – and the one question that change everything.Before you retrain the team or rebuild the pipeline, answer these. Most founders are fixing the wrong thing – and it shows up in their close rate.",
    image: '/whiteboard_sticky_notes.png',
    featured: true,
  },
  {
    slug: 'five-questions-broken-sales',
    category: 'B2B Sales',
    date: 'May 12, 2025',
    title: 'The five questions that expose a broken sales motion',
    description: 'Before you retrain the team or rebuild the pipeline, answer these. Most founders are fixing the wrong thing – and it shows up in their close rate.Before you retrain the team or rebuild the pipeline, answer these. Most founders are fixing the wrong thing – and it shows up in their close rate.',
    image: '/sales_pipeline_whiteboard.png',
    featured: false,
  },
  {
    slug: 'founder-pricing-psychology',
    category: 'Pricing',
    date: 'May 12, 2025',
    title: "Charging what you're worth: the founder's pricing psychology problem",
    description: "Underpricing isn't humility – it's a positioning signal. We break down the three mental models that keep founders stuck at the wrong price point.Before you retrain the team or rebuild the pipeline, answer these. Most founders are fixing the wrong thing – and it shows up in their close rate.",
    image: '/strategy_documents.png',
    featured: false,
  },
];

const categories = [
  'All',
  'B2B Sales',
  'Fundraising',
  'Growth Strategy',
  'Product & PMF',
  'Pricing',
  'Team & Culture',
  'Founder Mindset',
];

export default function CaseStudiesList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtered case studies
  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudiesList
    : caseStudiesList.filter(cs => cs.category === selectedCategory);

  // Split featured and standard grid items
  const featuredCaseStudy = filteredCaseStudies.find(cs => cs.featured) || filteredCaseStudies[0];
  const gridCaseStudies = filteredCaseStudies.filter(cs => cs.slug !== featuredCaseStudy?.slug);

  return (
    <div className="min-h-screen pt-20">
      {/* ─── Hero Filter ─── */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        {/* Filters */}
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-none">
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
                      : 'bg-white text-[#555555] border-gray-200 hover:border-[#111111] hover:text-[#111111] font-normal'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Case Study Banner ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        {featuredCaseStudy ? (
          <div className="border border-[#EAEAEA] rounded-2xl overflow-hidden bg-white p-6 relative">
            <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-8 items-center">
              {/* Left - Image */}
              <div className="h-[340px] overflow-hidden relative rounded-xl w-full">
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="flex flex-col justify-between h-full py-2 relative pr-4 z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#E2F0DD] text-[#386638] text-[10.5px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide">
                      {featuredCaseStudy.category}
                    </span>
                    <span className="text-[12px] text-gray-400 font-light">{featuredCaseStudy.date}</span>
                  </div>

                  <h2
                    className="text-[26px] md:text-[32px] font-bold text-[#111111] leading-tight"
                    style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                  >
                    <Link to={`/case-studies/${featuredCaseStudy.slug}`} className="hover:text-brand-green transition-colors">
                      {featuredCaseStudy.title}
                    </Link>
                  </h2>

                  <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                    {featuredCaseStudy.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    to={`/case-studies/${featuredCaseStudy.slug}`}
                    className="text-[#E29A52] hover:text-[#c7803e] text-[13px] font-semibold flex items-center gap-1.5 transition-colors group-link"
                  >
                    Read Case Study
                    <span className="text-[14px]">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Light Yellow 2x2 Circle Ornament in bottom right */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-1 opacity-90 pointer-events-none select-none z-0">
              <div className="w-12 h-12 rounded-full bg-[#FCF7DE]" />
              <div className="w-12 h-12 rounded-full bg-[#FCF7DE]" />
              <div className="w-12 h-12 rounded-full bg-[#FCF7DE]" />
              <div className="w-12 h-12 rounded-full bg-[#FCF7DE]" />
            </div>
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-xl">
            <p className="text-[14px] text-gray-400">No case studies found.</p>
          </div>
        )}
      </section>

      {/* ─── Grid Secondary Case Studies ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {gridCaseStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {gridCaseStudies.map((study) => {
              // Custom badge color per category
              const isPricing = study.category.toLowerCase() === 'pricing';
              const badgeBg = isPricing ? 'bg-[#FFF0E0]' : 'bg-[#E2F0DD]';
              const badgeText = isPricing ? 'text-[#D97706]' : 'text-[#386638]';

              return (
                <div
                  key={study.slug}
                  className="border border-[#EAEAEA] rounded-2xl overflow-hidden bg-white p-6 flex flex-col justify-between group cursor-pointer relative"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-[230px] overflow-hidden relative rounded-xl w-full">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="pt-6 space-y-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide ${badgeBg} ${badgeText}`}>
                          {study.category}
                        </span>
                        <span className="text-[12px] text-gray-400 font-light">{study.date}</span>
                      </div>

                      <h3
                        className="text-[20px] md:text-[22px] font-bold text-[#111111] leading-snug group-hover:text-brand-green transition-colors"
                        style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                      >
                        <Link to={`/case-studies/${study.slug}`}>
                          {study.title}
                        </Link>
                      </h3>

                      <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 relative z-10">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="text-[#E29A52] hover:text-[#c7803e] text-[13px] font-semibold flex items-center gap-1.5 transition-colors group-link"
                    >
                      Read Case Study
                      <span className="text-[14px]">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          selectedCategory !== 'All' && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <p className="text-[14px] text-gray-400">No additional case studies in this category.</p>
            </div>
          )
        )}
      </section>
      <FinalCTA />
    </div>
  );
}
