import { useParams, Link } from 'react-router-dom';
import { insightsArticles } from './Insights';
import FinalCTA from './FinalCTA';
import { useState } from 'react';

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [diagnosticChecked, setDiagnosticChecked] = useState<boolean[]>([false, false, false, false, false, false]);

  // Find the basic article data
  const article = insightsArticles.find(art => art.slug === slug) || insightsArticles[0];

  const featuredImages = [
    '/whiteboard_sticky_notes.png',
    '/strategy_documents.png',
    '/whiteboard_sticky_notes.png',
  ];
  const articleIndex = insightsArticles.findIndex(art => art.slug === article.slug);
  const featuredImg = featuredImages[articleIndex % featuredImages.length];

  const toggleDiagnostic = (index: number) => {
    setDiagnosticChecked(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Unified Green Header Card ─── */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-[#EEF8E6]/60 border border-[#D2ECBE] rounded-2xl overflow-hidden p-6 md:p-8 grid lg:grid-cols-[1.1fr_1.3fr] gap-8 relative">
          {/* Background Ornament */}
          <img
            src="/Offering/element_3.png"
            alt="ornament"
            className="absolute -bottom-2 -right-2 w-20 h-20 opacity-40 pointer-events-none select-none z-0"
          />

          {/* Left - Image */}
          <div className="h-64 lg:h-auto overflow-hidden relative rounded-xl w-full">
            <img
              src={featuredImg}
              alt={article.title}
              className="w-full h-100 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-between h-full py-1 relative z-10 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#2F4A2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-[12px] text-gray-500 font-light">{article.date}</span>
                <span className="text-[12px] text-gray-500 font-light">•</span>
                <span className="text-[12px] text-gray-500 font-light">{article.readTime} read</span>
              </div>

              <h1
                className="text-[34px] md:text-[44px] font-semibold text-[#111111] leading-tight pt-2"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                {article.title}
              </h1>

              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed font-light">
                {article.description}
              </p>
            </div>

            {/* Author profile block */}
            <div className="flex items-center gap-3 pt-2">
              <div className={`w-9 h-9 rounded-full ${article.authorBg} flex items-center justify-center font-bold text-[11px] text-[#2F4A2F]`}>
                {article.authorInitials}
              </div>
              <div>
                <div className="text-[12.5px] font-semibold text-[#111111]">{article.author}</div>
                <div className="text-[10.5px] text-gray-400 font-light">Growth Architect, ThinkingSpree</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-[#444444] leading-relaxed text-[14.5px] font-light">
        {article.slug === 'why-most-startups-fail-at-scale' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Every founder has heard some version of the same advice:
              </p>
              <blockquote className="border-l-4 border-[#2F4A2F] pl-4 py-1 text-gray-600 italic">
                "Build a great product. Find product-market fit. Growth will follow."
              </blockquote>
              <p>It's not wrong. It's just incomplete.</p>
              <p>
                Over the years, we've worked with founders across idea-stage ventures, venture-backed startups, and businesses approaching scale. One pattern appears again and again: The startups that struggle rarely do so because the product is bad.
              </p>
              <p className="pl-4 border-l-2 border-gray-100 py-1">
                Many have customers.<br />
                Many have demand.<br />
                Many have raised capital.
              </p>
              <p>
                Yet growth stalls. Margins shrink. Teams become overwhelmed. And suddenly the same business that once felt full of momentum starts feeling heavier every quarter.
              </p>
              <p>
                The problem is usually not product-market fit. It's something far less discussed: <strong>The business model was never designed to scale.</strong>
              </p>
            </div>

            {/* PMF vs Model-Market Fit Comparison */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Product-Market Fit vs Model-Market Fit
              </h3>
              <p>
                Product-market fit proves that customers want what you're offering. It does not prove that your business can grow sustainably. Why? Because demand and scalability are two different things. One validates the product. The other validates the business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6]">
                  <h4 className="text-[15px] font-bold text-[#2F4A2F] mb-3">Product-Market Fit</h4>
                  <ul className="space-y-2 text-[13px] text-gray-600">
                    <li className="flex items-center gap-2">✓ Customers want the product</li>
                    <li className="flex items-center gap-2">✓ Validates market demand</li>
                    <li className="flex items-center gap-2">✓ Creates customer traction</li>
                    <li className="flex items-center gap-2">✓ Early-stage success metric</li>
                    <li className="flex items-center gap-2">✓ Focused on customers</li>
                  </ul>
                </div>
                <div className="border border-[#EEF8E6] rounded-xl p-5 bg-[#EEF8E6]/30">
                  <h4 className="text-[15px] font-bold text-[#2F4A2F] mb-3">Model-Market Fit</h4>
                  <ul className="space-y-2 text-[13px] text-gray-600">
                    <li className="flex items-center gap-2">✓ The business can scale sustainably</li>
                    <li className="flex items-center gap-2">✓ Validates economics & margins</li>
                    <li className="flex items-center gap-2">✓ Creates organizational momentum</li>
                    <li className="flex items-center gap-2">✓ Growth-stage success metric</li>
                    <li className="flex items-center gap-2">✓ Focused on systems & layers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Idea vs Business Model */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Difference Between a Business Idea and a Business Model
              </h3>
              <p>
                Founders often spend months refining ideas. Far fewer spend the same amount of time designing the system that turns those ideas into sustainable businesses.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-[13px]">
                <div className="space-y-2">
                  <span className="font-semibold text-gray-600">A business idea answers:</span>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What problem exists?</li>
                    <li>Who experiences it?</li>
                    <li>What solution are we building?</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <span className="font-semibold text-gray-600">A business model answers:</span>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>How will we acquire customers?</li>
                    <li>How will revenue compound?</li>
                    <li>What happens when we double in size?</li>
                    <li>What happens when acquisition costs increase?</li>
                    <li>Can the business survive growth?</li>
                  </ul>
                </div>
              </div>
              <p className="pt-2">One creates opportunity. The other determines whether opportunity becomes a company.</p>
            </div>

            {/* Unit Economics Line Graph */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Where Scaling Usually Breaks: Unit Economics
              </h3>
              <p>
                Growth is exciting until acquiring each new customer becomes more expensive than the last. Founders often focus on revenue growth while ignoring the economics underneath it. When CAC rises faster than customer value, scale becomes increasingly fragile.
              </p>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 my-6 text-center space-y-4 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  CAC vs Revenue Growth Over Time
                </span>
                <div className="w-full flex justify-center py-2">
                  <svg width="550" height="240" viewBox="0 0 550 240" className="max-w-full">
                    {/* Grid Lines */}
                    <line x1="50" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="210" x2="500" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />

                    {/* Y-Axis Labels */}
                    <text x="35" y="44" fill="#94a3b8" fontSize="10" textAnchor="end">35%</text>
                    <text x="35" y="104" fill="#94a3b8" fontSize="10" textAnchor="end">20%</text>
                    <text x="35" y="164" fill="#94a3b8" fontSize="10" textAnchor="end">10%</text>
                    <text x="35" y="214" fill="#94a3b8" fontSize="10" textAnchor="end">0%</text>

                    {/* X-Axis Labels */}
                    <text x="80" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle">Q1</text>
                    <text x="210" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle">Q2</text>
                    <text x="340" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle">Q3</text>
                    <text x="470" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle">Q4</text>

                    {/* Curve 1: Revenue Growth (Q1=20%, Q2=22%, Q3=24%, Q4=25%) */}
                    {/* Maps: 20% -> Y=100, 22% -> Y=92, 24% -> Y=84, 25% -> Y=80 */}
                    <path d="M 80 100 L 210 92 L 340 84 L 470 80" fill="none" stroke="#2F4A2F" strokeWidth="3" />
                    <circle cx="80" cy="100" r="4" fill="#2F4A2F" />
                    <circle cx="210" cy="92" r="4" fill="#2F4A2F" />
                    <circle cx="340" cy="84" r="4" fill="#2F4A2F" />
                    <circle cx="470" cy="80" r="4" fill="#2F4A2F" />

                    {/* Curve 2: CAC Growth (Q1=8%, Q2=12%, Q3=21%, Q4=31%) */}
                    {/* Maps: 8% -> Y=172, 12% -> Y=148, 21% -> Y=96, 31% -> Y=56 */}
                    <path d="M 80 172 L 210 148 L 340 96 L 470 56" fill="none" stroke="#E29A52" strokeWidth="3" />
                    <circle cx="80" cy="172" r="4" fill="#E29A52" />
                    <circle cx="210" cy="148" r="4" fill="#E29A52" />
                    <circle cx="340" cy="96" r="4" fill="#E29A52" />
                    <circle cx="470" cy="56" r="4" fill="#E29A52" />

                    {/* Legend */}
                    <circle cx="150" cy="20" r="4" fill="#2F4A2F" />
                    <text x="160" y="24" fill="#1a1a1a" fontSize="10">Revenue Growth (%)</text>
                    <circle cx="330" cy="20" r="4" fill="#E29A52" />
                    <text x="340" y="24" fill="#1a1a1a" fontSize="10">CAC Growth (%)</text>
                  </svg>
                </div>
                <p className="text-[12px] text-gray-400">
                  Insight: Revenue is growing steadily, but customer acquisition costs (CAC) are rising exponentially.
                </p>
              </div>
            </div>

            {/* Channel Dependency Donut/Bar Chart */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Channel Dependency Creates Hidden Risk
              </h3>
              <p>
                Many startups grow through a single acquisition channel—be it LinkedIn, Paid Ads, Founder Network, or Partnerships. The channel works. Until it doesn't. The moment one channel becomes responsible for most growth, the business becomes vulnerable.
              </p>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 my-6 text-center space-y-6 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Revenue Contribution by Channel
                </span>
                <div className="w-full flex flex-col gap-4 max-w-lg mx-auto pt-2">
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Paid Ads</span>
                      <span>58%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '58%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Founder Network</span>
                      <span>22%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#E29A52] h-full rounded-full" style={{ width: '22%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Partnerships</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#FAFDF6] border border-[#cbd5e1] h-full rounded-full" style={{ width: '12%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Organic Search & Referrals</span>
                      <span>8%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gray-300 h-full rounded-full" style={{ width: '8%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400">
                  A healthy business diversifies growth channels before it is forced to do so.
                </p>
              </div>
            </div>

            {/* Why Founders Misdiagnose */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Why Most Founders Misdiagnose the Problem
              </h3>
              <p>
                When growth slows, founders often respond by: Hiring more salespeople, spending more on marketing, building more features, or launching new products. Sometimes those actions help. Often they amplify the underlying issue.
              </p>
              <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl my-4 text-gray-600">
                Imagine adding fuel to a car with a damaged engine. The problem isn't the fuel. It's the system underneath it. The same applies to growth.
              </div>
            </div>

            {/* Re-engineering Section */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Business Model Re-engineering Is Not a Pivot
              </h3>
              <p>
                The word "re-engineering" often creates unnecessary fear. Founders assume it means starting over. It rarely does. Most successful re-engineering efforts keep the core business intact. The product, market, and customer remain—what changes is the architecture around them.
              </p>
              <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6] space-y-3">
                <span className="font-semibold text-gray-700 block">Re-engineering often includes:</span>
                <ul className="grid grid-cols-2 gap-3 text-[13px] text-gray-600">
                  <li className="flex items-center gap-2">✓ Redesigning pricing structures</li>
                  <li className="flex items-center gap-2">✓ Improving acquisition efficiency</li>
                  <li className="flex items-center gap-2">✓ Simplifying product portfolios</li>
                  <li className="flex items-center gap-2">✓ Reducing founder dependency</li>
                  <li className="flex items-center gap-2">✓ Strengthening operational systems</li>
                  <li className="flex items-center gap-2">✓ Creating clearer expansion paths</li>
                </ul>
              </div>
            </div>

            {/* Case Study Callout */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                A Pattern We've Seen Repeatedly
              </h3>
              <p>
                One fintech company we worked with had a proven product, a large addressable market, and more than 1,000 leads. Yet revenue had remained stagnant for nearly two years. The issue wasn't product, demand, or sales effort. It was structural: too many offerings, founder-dependent sales, and a pricing model that created friction.
              </p>
              <p>
                By narrowing focus, rebuilding sales systems, and redesigning pricing, the company achieved meaningful growth without changing the core product. The business didn't need a new direction. It needed a better operating model.
              </p>
            </div>

            {/* Interactive Founder Diagnostic */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Interactive Founder Diagnostic
              </h3>
              <p>
                Before your next growth initiative, ask yourself these questions. Check the ones that make you uncomfortable:
              </p>
              
              <div className="bg-[#FAFDF6] border border-[#EEF8E6] rounded-xl p-6 space-y-4">
                {[
                  "What breaks if revenue doubles next quarter?",
                  "Does one acquisition channel drive most growth?",
                  "Have we reviewed pricing in the last 12 months?",
                  "Does every important decision still depend on the founder?",
                  "Are teams becoming busier without becoming more effective?",
                  "Is complexity growing faster than revenue?"
                ].map((q, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={diagnosticChecked[idx]}
                      onChange={() => toggleDiagnostic(idx)}
                      className="mt-1 accent-[#2F4A2F]"
                    />
                    <span className={`text-[13.5px] transition-colors ${diagnosticChecked[idx] ? 'text-[#2F4A2F] font-semibold' : 'text-gray-600'}`}>
                      {q}
                    </span>
                  </label>
                ))}
              </div>

              {diagnosticChecked.filter(Boolean).length > 2 && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-[13px] text-amber-800">
                  <strong>Diagnostic Result:</strong> Since multiple answers make you uncomfortable, you are likely not facing a simple execution challenge. You are facing a business model challenge that requires re-engineering.
                </div>
              )}
            </div>

            {/* Final Thought */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Final Thought
              </h3>
              <p>
                Most startups don't fail because they couldn't build. They fail because they never redesigned the system underneath the growth. Product-market fit gets you into the game. Model-market fit determines how long you stay in it.
              </p>
              <div className="bg-[#FAFDF6] border border-dashed border-[#EEF8E6] rounded-xl p-5 text-center text-[#2F4A2F] font-semibold">
                "The businesses that scale successfully are rarely the ones that work the hardest. They're the ones that continuously re-engineer how growth happens."
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Growth Problems Rarely Start Where They Appear
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                Through Thinking Sprints, we help founders identify the structural bottlenecks limiting growth and redesign the systems underneath them.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'consumer-insights-vs-market-research' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Most founders know their market. They can tell you the size of it, the TAM, SAM, and SOM, who the competitors are, and where the industry is heading.
              </p>
              <p>
                Yet surprisingly often, they struggle to answer a much simpler question: <strong>Why does a customer actually choose us?</strong>
              </p>
              <p>
                Not what they say in surveys. Not what the industry report suggests. Not what the category trends imply. But why they pull out a credit card, recommend the product to a friend, or quietly disappear after three months.
              </p>
              <p>
                This is where many startups confuse market research with consumer insight. And the distinction matters far more than most founders realize.
              </p>
              <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl my-4 text-gray-600">
                Market research tells you what the market looks like. Consumer insight tells you why people behave the way they do. One helps you understand the landscape. The other helps you make decisions.
              </div>
            </div>

            {/* Startup Research Trap Confidence Chart */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Startup Research Trap
              </h3>
              <p>
                We've seen startups spend months researching industries while spending almost no time understanding actual customers. The result is predictable: the market makes sense, but the customer doesn't.
              </p>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 my-6 text-center space-y-6 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Founder Confidence: Market Knowledge vs. Customer Behaviour
                </span>
                <div className="w-full flex flex-col gap-4 max-w-lg mx-auto pt-2">
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Market Size Clarity</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Competitor Mapping</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Industry Trends</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-gray-700">
                      <span>Customer Behaviour Understanding</span>
                      <span className="text-amber-600">35%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#E29A52] h-full rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-400">
                  Headline: "Most startups know far more about their market than their actual customers."
                </p>
              </div>
            </div>

            {/* Insight Pyramid */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Insight Pyramid
              </h3>
              <p>
                Consumer behavior rarely happens at one level. There are usually three layers: what people say, what they mean, and what is actually driving their behavior.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6] text-center space-y-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Layer 1: What They Say</span>
                  <h4 className="text-[16px] font-bold text-[#2F4A2F] italic">"I need better project management."</h4>
                  <p className="text-[12.5px] text-gray-500 font-light mt-2">Surface level request centered on features or tools.</p>
                </div>
                <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6] text-center space-y-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Layer 2: What They Mean</span>
                  <h4 className="text-[16px] font-bold text-[#2F4A2F] italic">"I need my team to be more organized."</h4>
                  <p className="text-[12.5px] text-gray-500 font-light mt-2">Intermediate level mapping to operational efficiency.</p>
                </div>
                <div className="border border-[#EEF8E6] rounded-xl p-5 bg-[#EEF8E6]/30 text-center space-y-2">
                  <span className="text-[10px] text-[#E29A52] font-bold uppercase tracking-wider block">Layer 3: What Drives Behaviour</span>
                  <h4 className="text-[16px] font-bold text-amber-700 italic">"I'm worried things are slipping, and I don't want to look incompetent."</h4>
                  <p className="text-[12.5px] text-gray-600 font-light mt-2">Deeper emotional/psychological driver where strategy lives.</p>
                </div>
              </div>
              <p className="text-[12px] text-gray-400 text-center mt-2">
                "The decision rarely happens where the behavior is visible."
              </p>
            </div>

            {/* What They Say vs What's Happening */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Data-Led Assumptions vs Insight-Led Decisions
              </h3>
              <p>
                Founders often trust what customers say. That's understandable. The challenge is that customers are not always accurate narrators of their own behavior. If you hear "price is too high," the instinctive response is to lower it. But deeper interviews may reveal they don't understand the value, the onboarding feels risky, or the ROI isn't obvious.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Data Says (What Customers Say)</span>
                  <span>Insight Reveals (What's Actually Happening)</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>"Price is too high"</span>
                    <span>Value is unclear or onboarding feels risky</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Users aren't converting</span>
                    <span>Users don't trust the outcome or setup is too complex</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Churn is increasing</span>
                    <span>Expectations were set incorrectly during onboarding</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Adoption is low</span>
                    <span>Onboarding creates user anxiety</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Customers want more features</span>
                    <span>Customers want certainty and simplicity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decisions Consumer Insight Shapes */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Decisions Consumer Insight Shapes
              </h3>
              <p>
                Founders often think consumer insight belongs inside research teams. In reality, it shapes almost every important growth decision:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
                <li><strong>Pricing:</strong> What are customers actually paying for? (Value vs feature count)</li>
                <li><strong>Positioning:</strong> What job are they hiring your product to do?</li>
                <li><strong>Retention:</strong> What keeps them coming back?</li>
                <li><strong>Product Evolution:</strong> Which problems matter enough to solve next?</li>
                <li><strong>Customer Acquisition:</strong> What message creates trust fastest?</li>
              </ul>
              <p>Without these answers, growth becomes expensive guesswork.</p>
            </div>

            {/* Final Thought */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Final Thought
              </h3>
              <p>
                Market research helps you understand the category. Consumer insight helps you understand the customer. The two are not interchangeable. One describes the landscape; the other explains behavior. When growth stalls, the answer is rarely hiding inside another industry report. It is usually hiding inside a customer conversation.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Growth decisions are only as good as the insights behind them
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                Through Thinking Sprints, we help founders uncover the motivations, behaviors, and decision patterns that shape growth.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'from-idea-to-10x' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Ask most founders what design thinking means and you'll hear some version of the same answer: wireframes, user testing, prototypes, product design, UX workshops.
              </p>
              <p>They're not wrong. They're just seeing a small part of the picture.</p>
              <p>
                Over the last decade, design thinking has become one of the most misunderstood ideas in business. It has been boxed into product teams, innovation labs, and sticky-note-filled workshops. Meanwhile, its most powerful application has been largely ignored: <strong>Strategy.</strong>
              </p>
              <p>
                Because the biggest problems founders face are rarely product problems. They're strategy problems. And strategy, more often than not, fails for the same reason products fail: it was planned, not designed.
              </p>
            </div>

            {/* Design Thinking Strategic Equivalents */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                What Design Thinking Looks Like at the Strategic Level
              </h3>
              <p>
                Traditional strategy assumes the business leader already understands the problem. Design thinking starts with a different assumption: <em>What if we are solving the wrong problem altogether?</em>
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-[#FAFDF6] p-3.5 border-b border-gray-100 font-semibold text-[13px] text-[#2F4A2F]">
                  <span>Design Thinking Stage</span>
                  <span>Strategic Equivalent</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">1. Empathise</span>
                    <span>Understand customers, markets, and stakeholders deeply</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">2. Define</span>
                    <span>Identify the real, underlying growth constraints</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">3. Ideate</span>
                    <span>Explore diverse strategic alternatives before committing</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">4. Prototype</span>
                    <span>Run low-risk, cheap experiments to test assumptions</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">5. Test</span>
                    <span>Validate assumptions and signals before scaling</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-400 text-center">
                Headline: "The best strategies are discovered, not declared."
              </p>
            </div>

            {/* What Founders Think vs Feel */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Stage One: Empathise
              </h3>
              <p>
                Most businesses spend more time analyzing markets than understanding people. This is where strategic blind spots begin. At Thinking Spree, we often find that what founders believe customers want and what customers actually value are completely different.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-2">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Founder Assumption</span>
                  <span>Customer Reality</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>They want more features</span>
                    <span>They want less complexity</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Price is the issue</span>
                    <span>Trust and risk mitigation is the issue</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>We need more leads</span>
                    <span>We need better conversion on existing traffic</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Customers want innovation</span>
                    <span>Customers want certainty and safety</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Where Problems Exist Chart */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Stage Two: Define — A Growth Insight
              </h3>
              <p>
                This is where many businesses make expensive mistakes. They solve symptoms instead of root causes. For example, the problem appears to be low revenue (solved by pushing sales), but the real problem is unclear positioning.
              </p>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 my-6 text-center space-y-6 shadow-sm">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Perceived Problem Areas vs. Actual Root Causes
                </span>
                <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto pt-2">
                  <div className="space-y-3">
                    <span className="text-[12px] font-semibold text-gray-500 block text-left">Where Businesses Think Problems Exist</span>
                    <div className="space-y-1.5 text-left text-[12px] text-gray-600">
                      <div>Sales (42%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '42%' }} />
                      </div>
                      <div>Marketing (29%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '29%' }} />
                      </div>
                      <div>Product (18%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '18%' }} />
                      </div>
                      <div>Strategy (11%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '11%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[12px] font-semibold text-gray-500 block text-left">Where Problems Actually Exist</span>
                    <div className="space-y-1.5 text-left text-[12px] text-gray-600">
                      <div>Positioning (34%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '34%' }} />
                      </div>
                      <div>Business Model (26%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '26%' }} />
                      </div>
                      <div>Customer Understanding (21%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '21%' }} />
                      </div>
                      <div>Execution (19%)</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2F4A2F] h-full rounded-full" style={{ width: '19%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Experiment Funnel */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Stage Four: Prototype — Strategic Experiment Funnel
              </h3>
              <p>
                One of the biggest advantages of design thinking is that it reduces strategic risk. Instead of making large, expensive bets, founders test small assumptions. Consider pricing: the traditional approach is to redesign and launch the entire architecture; the design-led approach is to test packaging, positioning, and willingness-to-pay conversations first.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-3 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700 text-center">
                  <span>Experiment</span>
                  <span>Cost</span>
                  <span>Learning Value</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600 text-center">
                  <div className="grid grid-cols-3 p-3.5 items-center">
                    <span className="font-semibold text-gray-700 text-left">Customer Interviews</span>
                    <span className="text-emerald-600 font-medium">Low</span>
                    <span className="text-indigo-600 font-semibold">High</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 items-center">
                    <span className="font-semibold text-gray-700 text-left">Pilot Offer (Pre-sales)</span>
                    <span className="text-emerald-600 font-medium">Low</span>
                    <span className="text-indigo-600 font-semibold">High</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 items-center">
                    <span className="font-semibold text-gray-700 text-left">Pricing Test</span>
                    <span className="text-amber-600 font-medium">Medium</span>
                    <span className="text-indigo-600 font-semibold">High</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 items-center">
                    <span className="font-semibold text-gray-700 text-left">Full Market Expansion</span>
                    <span className="text-red-600 font-medium">High</span>
                    <span className="text-amber-600 font-semibold">Medium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy Design Loop */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Strategy Design Loop
              </h3>
              <p>
                Growth is not a one-time plan; it is a design process. At Thinking Spree, we view strategy and design thinking as the same discipline:
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 bg-[#FAFDF6] p-6 rounded-xl border border-[#EEF8E6]">
                {["UNDERSTAND", "DEFINE", "DESIGN", "TEST", "LEARN", "REPEAT"].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#2F4A2F] text-white px-4 py-2 rounded-lg font-bold text-[12px] shadow-sm tracking-wider">
                      {step}
                    </div>
                    {idx < 5 && <span className="text-gray-400 font-bold">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Growth starts when assumptions become visible
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                Through Thinking Sprints, we help founders rethink positioning, pricing, growth, and business models using a design-led strategy approach.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'the-90-day-sprint' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Most founders don't have a time problem. They have a clarity problem. That's a difficult thing to admit because from the outside, most startups look incredibly busy.
              </p>
              <p>
                The team is shipping features, sales calls are happening, marketing campaigns are running, and investor updates are being sent. Everyone is working. Yet six months later, very little has fundamentally changed. The same questions remain unanswered.
              </p>
              <blockquote className="border-l-4 border-[#2F4A2F] pl-4 py-1 text-gray-600 italic">
                "Being busy feels productive. Clarity creates momentum."
              </blockquote>
              <p>
                We've seen this pattern repeatedly. Not because founders lack ambition, but because activity and clarity are not the same thing. Product-market fit is rarely discovered through more activity; it is discovered through better thinking.
              </p>
            </div>

            {/* Activity vs Progress Comparison */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Activity vs Progress
              </h3>
              
              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Activity (What Teams Do)</span>
                  <span>Progress (What Startups Need)</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>More meetings</span>
                    <span>Clear decisions and boundaries</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>More features</span>
                    <span>Stronger, focused positioning</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>More customer conversations</span>
                    <span>Validated, structured customer insights</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>More planning & decks</span>
                    <span>Executed, low-cost experiments</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>More effort & overtime</span>
                    <span>Better, predictable outcomes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sources of Insight */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Phase 1: Sources of Insight
              </h3>
              <p>
                Before decisions come understanding. At Thinking Spree, a typical sprint moves through structured phases. Phase 1 focuses on gathering diverse insights to identify what matters.
              </p>

              <div className="grid md:grid-cols-4 gap-4 pt-2">
                <div className="border border-gray-100 rounded-xl p-4 bg-[#FAFDF6] text-center space-y-1">
                  <h5 className="font-bold text-[#2F4A2F] text-[14px]">Customer Interviews</h5>
                  <p className="text-[12px] text-gray-500">Uncover behaviour patterns</p>
                </div>
                <div className="border border-gray-100 rounded-xl p-4 bg-[#FAFDF6] text-center space-y-1">
                  <h5 className="font-bold text-[#2F4A2F] text-[14px]">Internal Workshops</h5>
                  <p className="text-[12px] text-gray-500">Map internal assumptions</p>
                </div>
                <div className="border border-gray-100 rounded-xl p-4 bg-[#FAFDF6] text-center space-y-1">
                  <h5 className="font-bold text-[#2F4A2F] text-[14px]">Market Analysis</h5>
                  <p className="text-[12px] text-gray-500">Validate opportunities</p>
                </div>
                <div className="border border-gray-100 rounded-xl p-4 bg-[#FAFDF6] text-center space-y-1">
                  <h5 className="font-bold text-[#2F4A2F] text-[14px]">Existing Data</h5>
                  <p className="text-[12px] text-gray-500">Identify performance signals</p>
                </div>
              </div>
            </div>

            {/* Traditional Planning vs Sprint Thinking */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Phase 3: Traditional Planning vs Sprint Thinking
              </h3>
              <p>
                A sprint forces teams to turn assumptions into explicit hypotheses. Instead of "We think customers want this," we write: "We believe startup founders will pay more for clarity than additional features." That subtle shift allows rapid prototyping and validation.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-[#FAFDF6] p-3.5 border-b border-gray-100 font-semibold text-[13px] text-[#2F4A2F]">
                  <span>Traditional Planning Approach</span>
                  <span>Sprint Thinking Approach</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Plan first, test later</span>
                    <span>Test first, plan around evidence</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Large, high-risk bets</span>
                    <span>Small, low-cost experiments</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Months of theoretical discussion</span>
                    <span>Weeks of validation with customers</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Protect initial assumptions</span>
                    <span>Actively challenge assumptions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Before vs After Sprint */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                What Comes Out the Other Side? Before vs. After
              </h3>
              <p>
                The biggest outcome of a sprint isn't strategic; it's psychological. The team moves from feeling overwhelmed and having opinions to having a testable model and structured confidence.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Before Sprint</span>
                  <span>After Sprint</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Multiple competing priorities</span>
                    <span className="text-emerald-700 font-medium">Clear operational focus</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Unvalidated assumptions</span>
                    <span className="text-emerald-700 font-medium">Tested, proven hypotheses</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Activity-driven execution</span>
                    <span className="text-emerald-700 font-medium">Insight-driven execution</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Long planning cycles</span>
                    <span className="text-emerald-700 font-medium">Faster decision-making</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Uncertainty & hesitation</span>
                    <span className="text-emerald-700 font-medium">Structured business confidence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Clarity doesn't require six months of consulting
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                It requires the right questions, the right structure, and the discipline to challenge assumptions quickly. Through Thinking Sprints, we compress uncertainty into 90 days.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Book a Sprint Discovery Call
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'building-purposeful-businesses' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Somewhere along the way, founders were taught a false choice: You can build a business that creates impact, or you can build a business that creates profit. But rarely both.
              </p>
              <p>
                Investors talk about scalability; founders talk about purpose. Businesses often separate the two as though they are competing priorities—one belongs in the boardroom, the other on the website.
              </p>
              <p>
                We've never believed that. In fact, some of the most resilient businesses we've encountered were built because someone cared deeply about a problem—not because they spotted a market opportunity. Conviction came first.
              </p>
              <p>
                <strong>Purpose is not a marketing layer added after the business is built. It is a design decision made before the business exists.</strong>
              </p>
            </div>

            {/* The False Choice Comparison */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The False Choice
              </h3>
              
              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Common Assumption</span>
                  <span>Reality</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Purpose reduces profitability</span>
                    <span>Purpose improves operational focus</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Impact limits growth potential</span>
                    <span>Impact creates sharp differentiation</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Values slow down decision-making</span>
                    <span>Values simplify and speed up decision-making</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Mission competes with scale</span>
                    <span>Mission guides and anchors scale</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-400 text-center">
                Headline: "The strongest businesses don't choose between purpose and profit. They use one to strengthen the other."
              </p>
            </div>

            {/* Decisions Influenced by Purpose */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Business Decisions Influenced by Purpose
              </h3>
              <p>
                Purpose becomes meaningful when it influences everyday decisions. It acts as a filter helping teams distinguish expansion from distraction.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-[#FAFDF6] p-3.5 border-b border-gray-100 font-semibold text-[13px] text-[#2F4A2F]">
                  <span>Decision Area</span>
                  <span>Purpose-Led Question</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">Customer Selection</span>
                    <span>Who benefits most from what we build?</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">Product Roadmap</span>
                    <span>Does this feature solve a meaningful problem?</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">Pricing Strategy</span>
                    <span>Is value accessible and economically sustainable?</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">Partnerships</span>
                    <span>Does this alignment match our core mission?</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="font-semibold text-gray-700">Growth Pathway</span>
                    <span>Does scaling strengthen our overall impact?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose & Resilience */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Purpose and Business Resilience
              </h3>
              
              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Desired Business Outcome</span>
                  <span>Purpose-Led Advantage</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Customer Retention</span>
                    <span>Stronger, value-based loyalty</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Referrals & Growth</span>
                    <span>Higher customer advocacy and NPS</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Team Recruitment</span>
                    <span>Better alignment and talent attraction</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Market Trust</span>
                    <span>Consistent values and reputation</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Brand Strength</span>
                    <span>Greater differentiation in noisy categories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Competitiveness */}
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Purpose as a Competitive Advantage
              </h3>
              <p>
                We often see this in sectors where human outcomes matter deeply, such as senior living, childcare, or education. In these categories, customers aren't purchasing basic accommodation or supervision—they are investing in safety, development, peace of mind, and progress.
              </p>
              <p>
                Purpose-driven companies in these sectors consistently outperform competitors because they design their purpose directly into the operating model rather than treating it as a marketing statement.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Building something that matters?
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                We work with founders who believe purpose and profitability should reinforce each other. Learn how purpose can become part of your business architecture.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Explore Paths
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'what-luxury-and-deep-tech-startups-have-in-common' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                A luxury senior living community and an industrial robotics company appear to have almost nothing in common. One sells lifestyle, comfort, and peace of mind; the other sells automation, efficiency, and technological capability.
              </p>
              <p>
                Yet many of their growth challenges are remarkably similar. In fact, some of the same mistakes that slow down a robotics company also slow down a luxury brand.
              </p>
              <p>
                The reason is surprisingly simple: <strong>Neither business is selling something customers fully understand. They are selling something customers must first believe in.</strong>
              </p>
              <p>
                Because when customers don't have a clear mental model for what you are offering, traditional growth tactics become less effective. The challenge isn't generating demand; it is creating belief.
              </p>
            </div>

            {/* What Founders Think vs Customer Buy */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                What Founders Think They Sell vs. What Customers Buy
              </h3>
              <p>
                In premium and deep-tech sectors, the product isn't the product. The outcome is the product. Founders often sell features while customers buy outcomes:
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-3 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Sector</span>
                  <span>Founder Perspective</span>
                  <span>Customer Perspective</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-3 p-3.5">
                    <span className="font-semibold text-gray-700">Luxury Senior Living</span>
                    <span>Premium accommodation</span>
                    <span>Dignity, trust, and peace of mind</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span className="font-semibold text-gray-700">Childcare</span>
                    <span>Childcare services & supervision</span>
                    <span>Safety, trust, and developmental progress</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span className="font-semibold text-gray-700">Education</span>
                    <span>Curriculum & content delivery</span>
                    <span>Investing in future opportunities & progress</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span className="font-semibold text-gray-700">Industrial Robotics</span>
                    <span>Automation technology & specifications</span>
                    <span>Reliability, predictable output, reduced risk</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span className="font-semibold text-gray-700">AI Software</span>
                    <span>Advanced algorithms & features</span>
                    <span>Better, faster business decisions</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-400 text-center mt-2">
                Headline: "Customers buy outcomes. Founders often sell features."
              </p>
            </div>

            {/* Traditional vs Emerging Categories */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Traditional vs. Emerging Categories
              </h3>
              <p>
                In categories where customer understanding is low, go-to-market becomes an education system. Its job isn't merely generating leads; it is helping customers develop belief because belief comes before purchase.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-[#FAFDF6] p-3.5 border-b border-gray-100 font-semibold text-[13px] text-[#2F4A2F]">
                  <span>Established Category</span>
                  <span>Emerging/Bespoke Category</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Demand already exists</span>
                    <span>Demand must be developed & nurtured</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Customers understand value instantly</span>
                    <span>Customers need deep education & analogies</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Purchase decisions are fast</span>
                    <span>Trust-building and validation takes longer</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Marketing drives conversion rates</span>
                    <span>Education drives conversion rates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Equation Table */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Value Equation
              </h3>
              <p>
                Perceived value depends on customer understanding. If capability is high but understanding is low, perceived value remains low:
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-3 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700 text-center">
                  <span>Product Capability</span>
                  <span>Customer Understanding</span>
                  <span>Perceived Value</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600 text-center">
                  <div className="grid grid-cols-3 p-3.5">
                    <span>High</span>
                    <span>Low</span>
                    <span className="text-red-600 font-medium">Low</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 bg-[#EEF8E6]/20">
                    <span className="font-semibold">High</span>
                    <span className="font-semibold">High</span>
                    <span className="text-emerald-600 font-bold">High</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span>Low</span>
                    <span>High</span>
                    <span className="text-amber-600 font-medium">Moderate</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5">
                    <span>Low</span>
                    <span>Low</span>
                    <span className="text-red-600 font-medium">Low</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-400 text-center mt-2">
                Headline: "Value isn't created by the product alone. It's created by customer understanding."
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Building something customers don't yet have a mental model for?
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                Whether you are creating a premium experience, a deep-tech innovation, or something entirely new, we help design trust, education, and belief directly into your business model.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        )}

        {article.slug === 'the-ecosystem-advantage' && (
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 font-medium">
                Most founders spend their early years obsessed with building—building products, teams, processes, and investor decks.
              </p>
              <p>
                What often gets overlooked is something equally important: <strong>Building the ecosystem around the business.</strong> Not just the audience or the customer base, but the wider ecosystem of partners, institutions, and advocates.
              </p>
              <p>
                While products create value, ecosystems accelerate value creation. Some of the fastest-growing businesses didn't grow faster because they built better products; they grew faster because they built better relationships.
              </p>
              <p>
                Partnership strategy is not a networking activity. It is a business model decision.
              </p>
            </div>

            {/* Transactional vs Ecosystem */}
            <div className="space-y-4 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Transactional Partnerships vs. Ecosystem Building
              </h3>
              <p>
                Most founders think about partnerships transactionally: <em>Can they introduce customers? Can they distribute our product?</em> Ecosystem thinking goes further. It designs a system where everyone benefits.
              </p>

              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white mt-4">
                <div className="grid grid-cols-2 bg-gray-50 p-3.5 border-b border-gray-100 font-semibold text-[13px] text-gray-700">
                  <span>Transactional Thinking</span>
                  <span>Ecosystem Thinking</span>
                </div>
                <div className="divide-y divide-gray-100 text-[13px] text-gray-600">
                  <div className="grid grid-cols-2 p-3.5">
                    <span>One-off introductions</span>
                    <span>Long-term collaboration networks</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Short-term revenue extraction</span>
                    <span>Shared, compounding value creation</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Individual, fragmented opportunities</span>
                    <span>Network effects across channels</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Immediate margin gains</span>
                    <span>Strategic moat and long-term advantage</span>
                  </div>
                  <div className="grid grid-cols-2 p-3.5">
                    <span>Relationship management (overhead)</span>
                    <span>Ecosystem architecture and design</span>
                  </div>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-400 text-center mt-2">
                Headline: "The best partnerships don't create opportunities. They create systems."
              </p>
            </div>

            {/* The Three Stages of Partnership Architecture */}
            <div className="space-y-6 pt-6">
              <h3 className="text-[20px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                The Three Stages of Partnership Architecture
              </h3>
              <p>
                The partnerships a startup needs change as it grows. A common mistake is pursuing the wrong partnerships for your stage.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Early Stage */}
                <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6] space-y-3">
                  <h4 className="text-[15px] font-bold text-[#2F4A2F]">Early Stage: Borrow Credibility</h4>
                  <p className="text-[12.5px] text-gray-500 font-light leading-relaxed">
                    At the beginning, customers evaluate legitimacy. The challenge is trust, not demand.
                  </p>
                  <div className="border-t border-gray-100 pt-3 text-[12px] text-gray-600">
                    <span className="font-semibold block mb-1">Key Partners & Benefits:</span>
                    <ul className="space-y-1">
                      <li>• Universities → Credibility</li>
                      <li>• Accelerators → Validation</li>
                      <li>• Pilot Customers → Proof</li>
                      <li>• Ecosystem → Visibility</li>
                    </ul>
                  </div>
                </div>

                {/* Growth Stage */}
                <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFDF6] space-y-3">
                  <h4 className="text-[15px] font-bold text-[#2F4A2F]">Growth Stage: Expand Reach</h4>
                  <p className="text-[12.5px] text-gray-500 font-light leading-relaxed">
                    As traction builds, the question becomes scale and channel distribution.
                  </p>
                  <div className="border-t border-gray-100 pt-3 text-[12px] text-gray-600">
                    <span className="font-semibold block mb-1">Key Partners & Benefits:</span>
                    <ul className="space-y-1">
                      <li>• Channel Partners → Distribution</li>
                      <li>• Associations → Reach</li>
                      <li>• Strategic Alliances → Market Access</li>
                      <li>• Communities → Customer Growth</li>
                    </ul>
                  </div>
                </div>

                {/* Scale Stage */}
                <div className="border border-gray-100 rounded-xl p-5 bg-[#EEF8E6]/30 border-dashed space-y-3">
                  <h4 className="text-[15px] font-bold text-[#2F4A2F]">Scale Stage: Build Resilience</h4>
                  <p className="text-[12.5px] text-gray-500 font-light leading-relaxed">
                    At scale, focus shifts toward sustainability and defensive moats.
                  </p>
                  <div className="border-t border-gray-100 pt-3 text-[12px] text-gray-600">
                    <span className="font-semibold block mb-1">Key Partners & Benefits:</span>
                    <ul className="space-y-1">
                      <li>• Enterprise Partners → Expansion</li>
                      <li>• Institutions → Stability</li>
                      <li>• Strategic Investors → Leverage</li>
                      <li>• Gov & Industry Bodies → Influence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2F4A2F] rounded-xl p-8 text-white text-center space-y-4">
              <h4 className="text-[18px] font-bold" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Ready to build your ecosystem advantage?
              </h4>
              <p className="text-[13px] text-white/80 max-w-xl mx-auto font-light">
                Explore how partnership architecture can become a compounding growth advantage rather than an afterthought.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="bg-[#E29A52] text-white px-6 py-3 rounded text-[13px] font-semibold hover:bg-[#c7803e] transition-colors inline-block">
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ─── Metrics Summary Grid (Universal context matching) ─── */}
        <div className="bg-[#2F4A2F] rounded-xl p-8 text-white mt-16 shadow-sm">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="md:border-r border-white/10 pr-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                3x
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                Pipeline Velocity
              </div>
            </div>
            <div className="md:border-r border-white/10 px-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                1,500+
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                Sprints Conducted
              </div>
            </div>
            <div className="pl-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                100%
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                Outcome Aligned
              </div>
            </div>
          </div>
        </div>

        {/* ─── Page Inner Banner CTA ─── */}
        <div className="bg-[#FAFDF6] border border-[#EEF8E6] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 my-12 relative overflow-hidden">
          {/* Background ornament */}
          <img
            src="/Offering/element_3.png"
            alt="ornament"
            className="absolute -bottom-4 -right-4 w-24 h-24 opacity-60 pointer-events-none select-none z-0"
          />
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Growth problems only stand out when they appear.
            </h4>
            <p className="text-[12.5px] text-gray-500 font-light">
              We structure custom strategic T-Sprints to resolve your pipeline velocity.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#2F4A2F] text-white text-[12.5px] font-semibold px-5 py-2.5 rounded hover:bg-[#1F3A1F] transition-colors shrink-0 relative z-10 shadow-sm"
          >
            Explore Paths
          </Link>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}

