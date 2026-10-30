import React, { useState } from 'react';
import { BEFORE_AFTER_GALLERY, TESTIMONIALS, BUSINESS_CONFIG, BeforeAfterItem } from '../config';
import { Sparkles, MessageSquare, ExternalLink, HelpCircle, Check, ArrowRight } from 'lucide-react';

interface BeforeAfterTileProps {
  item: BeforeAfterItem;
}

// Styled SVG Detailing Graphic for Before & After states
const DetailingGraphic: React.FC<{ type: 'paint' | 'interior' | 'wheels'; state: 'before' | 'after' }> = ({
  type,
  state,
}) => {
  const isBefore = state === 'before';

  if (type === 'paint') {
    return (
      <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={isBefore ? 'paintBefore' : 'paintAfter'} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isBefore ? '#262626' : '#141417'} />
            <stop offset="50%" stopColor={isBefore ? '#1C1C1E' : '#2D0A0E'} />
            <stop offset="100%" stopColor={isBefore ? '#2A2A2A' : '#0A0A0A'} />
          </linearGradient>
        </defs>

        <rect width="400" height="250" fill={`url(#${isBefore ? 'paintBefore' : 'paintAfter'})`} />

        {isBefore ? (
          // Before: Swirl marks, dull finish, road dust specks
          <g opacity="0.6">
            {/* Swirl lines */}
            <circle cx="120" cy="80" r="35" stroke="#555" strokeWidth="1" strokeDasharray="4 6" fill="none" />
            <circle cx="120" cy="80" r="20" stroke="#444" strokeWidth="0.8" fill="none" />
            <circle cx="280" cy="140" r="45" stroke="#555" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            <circle cx="200" cy="110" r="60" stroke="#444" strokeWidth="0.7" strokeDasharray="5 7" fill="none" />
            {/* Dust particles */}
            {[
              [50, 40], [80, 160], [150, 30], [210, 190], [290, 60],
              [340, 180], [180, 80], [260, 90], [310, 40], [70, 120]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#737373" opacity="0.7" />
            ))}
            <text x="200" y="210" textAnchor="middle" fill="#888888" fontSize="12" fontFamily="Montserrat">
              [ Dull oxidized finish & water spotting ]
            </text>
          </g>
        ) : (
          // After: Mirror gloss reflection, laser light bar, water beading, sparkle
          <g>
            {/* Reflection light bar */}
            <path d="M 0 60 Q 200 120 400 40 L 400 110 Q 200 180 0 120 Z" fill="#D91E2A" opacity="0.18" />
            <path d="M 0 85 Q 200 145 400 65" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M 0 90 Q 200 150 400 70" stroke="#D91E2A" strokeWidth="3" filter="drop-shadow(0 0 8px #D91E2A)" />
            {/* Water beading droplets */}
            {[
              [80, 60], [140, 100], [220, 70], [290, 110], [350, 60],
              [110, 140], [190, 160], [270, 140], [330, 170]
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#38BDF8" opacity="0.8" />
                <circle cx={x - 1.5} cy={y - 1.5} r="1.5" fill="#FFFFFF" />
              </g>
            ))}
            {/* Sparkle */}
            <path d="M 280 80 Q 280 90 270 90 Q 280 90 280 100 Q 280 90 290 90 Q 280 90 280 80 Z" fill="#FFFFFF" />
            <text x="200" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Montserrat">
              ✦ Showroom Mirror Gloss & Ceramic Hydrophobic Beading
            </text>
          </g>
        )}
      </svg>
    );
  }

  if (type === 'interior') {
    return (
      <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="none">
        <rect width="400" height="250" fill={isBefore ? '#1F1B18' : '#141416'} />
        {isBefore ? (
          <g opacity="0.7">
            {/* Embedded stains and crumbs */}
            <ellipse cx="140" cy="110" rx="45" ry="25" fill="#3D2D23" opacity="0.8" />
            <ellipse cx="260" cy="140" rx="35" ry="20" fill="#423025" opacity="0.8" />
            <path d="M 80 80 Q 95 120 70 140" stroke="#523F32" strokeWidth="3" strokeLinecap="round" />
            <text x="200" y="210" textAnchor="middle" fill="#A38875" fontSize="12" fontFamily="Montserrat">
              [ Embedded dirt, pet hair & fabric stains ]
            </text>
          </g>
        ) : (
          <g>
            {/* Clean straight extraction vacuum lines */}
            {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1="20"
                x2={x}
                y2="200"
                stroke={i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(217,30,42,0.1)'}
                strokeWidth="18"
              />
            ))}
            <path d="M 120 60 Q 200 90 280 60" stroke="#D91E2A" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Montserrat">
              ✦ Deep Hot-Water Extraction & Odor Elimination
            </text>
          </g>
        )}
      </svg>
    );
  }

  // Wheels
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="none">
      <rect width="400" height="250" fill={isBefore ? '#1C1917' : '#0F0F12'} />
      {isBefore ? (
        <g opacity="0.7">
          <circle cx="200" cy="115" r="70" fill="#292524" stroke="#44403C" strokeWidth="12" />
          <circle cx="200" cy="115" r="45" fill="#1C1917" stroke="#38302A" strokeWidth="6" />
          {/* Baked-on brake dust splatter */}
          <path d="M 170 85 Q 185 100 160 120 Q 180 135 155 150" stroke="#78350F" strokeWidth="4" opacity="0.6" />
          <path d="M 230 85 Q 215 100 240 120 Q 220 135 245 150" stroke="#78350F" strokeWidth="4" opacity="0.6" />
          <text x="200" y="220" textAnchor="middle" fill="#A8A29E" fontSize="12" fontFamily="Montserrat">
            [ Burnt brake dust & brown weathered tire wall ]
          </text>
        </g>
      ) : (
        <g>
          <circle cx="200" cy="115" r="75" fill="#0A0A0A" stroke="#1F2937" strokeWidth="14" />
          <circle cx="200" cy="115" r="50" fill="#111827" stroke="#E5E7EB" strokeWidth="4" />
          <circle cx="200" cy="115" r="14" fill="#1F2937" stroke="#D91E2A" strokeWidth="3" />
          {/* Wheel spokes bright chrome */}
          <line x1="200" y1="65" x2="200" y2="165" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="150" y1="115" x2="250" y2="115" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="165" y1="80" x2="235" y2="150" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="165" y1="150" x2="235" y2="80" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="230" cy="85" r="2" fill="#D91E2A" />
          <path d="M 230 75 Q 230 85 220 85 Q 230 85 230 95 Q 230 85 240 85 Q 230 85 230 75 Z" fill="#FFFFFF" />
          <text x="200" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Montserrat">
            ✦ Mirror Alloy Restoration & Satin Tire Dressing
          </text>
        </g>
      )}
    </svg>
  );
};

const BeforeAfterTile: React.FC<BeforeAfterTileProps> = ({ item }) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');
  const [imgError, setImgError] = useState(false);

  const imgSrc = activeTab === 'before' ? item.beforeSrc : item.afterSrc;
  const showRealImage = item.hasRealImage && !imgError && imgSrc;

  return (
    <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#D91E2A]/50 transition-all duration-300">
      
      {/* Visual Window with Interactive Slider/Toggle */}
      <div className="relative aspect-[16/10] bg-[#0A0A0A] overflow-hidden">
        {/* Render real image if provided and loaded, otherwise sleek CSS/SVG detailing illustration */}
        {showRealImage ? (
          <img
            src={imgSrc}
            alt={`${item.title} - ${activeTab === 'before' ? item.beforeLabel : item.afterLabel}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            width={600}
            height={375}
            onError={() => setImgError(true)}
          />
        ) : (
          <DetailingGraphic type={item.category} state={activeTab} />
        )}

        {/* State Badge in Top Left */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-3 py-1 rounded-md text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider ${
              activeTab === 'before'
                ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                : 'bg-[#D91E2A] text-white shadow-md'
            }`}
          >
            {activeTab === 'before' ? 'Before Detail' : 'After NouwaDetail'}
          </span>
        </div>

        {/* Interactive Segmented Switcher Controls (Bottom Right) */}
        <div className="absolute bottom-3 right-3 z-20 bg-black/85 backdrop-blur-md rounded-lg p-1 border border-white/20 flex items-center gap-1 shadow-lg">
          <button
            type="button"
            onClick={() => setActiveTab('before')}
            className={`cursor-pointer px-3 py-1 rounded text-xs font-['Montserrat',sans-serif] font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'before'
                ? 'bg-neutral-700 text-white shadow-sm'
                : 'text-[#A8ADB5] hover:text-white'
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after')}
            className={`cursor-pointer px-3 py-1 rounded text-xs font-['Montserrat',sans-serif] font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'after'
                ? 'bg-[#D91E2A] text-white shadow-sm'
                : 'text-[#A8ADB5] hover:text-white'
            }`}
          >
            After
          </button>
        </div>

        {/* Owner Replacement Notice Ribbon */}
        <div className="absolute top-3 right-3 z-10 hidden sm:block">
          <div className="px-2 py-0.5 rounded bg-black/70 text-[9px] text-[#A8ADB5] tracking-wider uppercase font-mono border border-white/5">
            {activeTab === 'before' ? item.beforeLabel : item.afterLabel}
          </div>
        </div>
      </div>

      {/* Tile Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-['Montserrat',sans-serif] tracking-widest text-[#D91E2A] uppercase font-bold mb-1">
            {item.vehicleType}
          </div>
          <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-white mb-2">
            {item.title}
          </h3>
          <p className="font-['Inter',sans-serif] text-xs text-[#A8ADB5] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-[#A8ADB5]">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D91E2A]" />
            Central Oregon Mobile Service
          </span>
          <span className="font-medium text-white">{activeTab === 'after' ? 'Restored' : 'Pre-Detail'}</span>
        </div>
      </div>

    </div>
  );
};

export const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-[0.25em] uppercase text-[#D91E2A] font-bold">
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
            <span>Proven Craftsmanship</span>
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
          </div>

          <h2 className="font-['Michroma','Syncopate',sans-serif] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white font-black text-balance">
            Real Results & Testimonials
          </h2>

          <p className="font-['Inter',sans-serif] text-sm md:text-base text-[#A8ADB5] leading-relaxed">
            Every vehicle has a story. See how our mobile deep cleaning revitalizes exterior paint, cabin fabrics, and wheels across Central Oregon.
          </p>
        </div>

        {/* 3 Before/After Placeholder Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BEFORE_AFTER_GALLERY.map((item) => (
            <BeforeAfterTile key={item.id} item={item} />
          ))}
        </div>

        {/* Note on how to replace photos + TikTok Callout */}
        <div className="mb-20 rounded-2xl bg-[#141414] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center shrink-0 text-[#D91E2A]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-bold text-sm text-white uppercase tracking-wider">
                Owner Note: Image Replacement Ready
              </h4>
              <p className="text-xs text-[#A8ADB5] mt-1 leading-relaxed">
                Before/after tiles use self-contained SVG & CSS illustrations so there are zero broken images. To display your real photos, upload them to <code className="text-white bg-black/60 px-1 py-0.5 rounded font-mono">./images/</code> and set <code className="text-white bg-black/60 px-1 py-0.5 rounded font-mono">hasRealImage: true</code> in <code className="text-[#D91E2A]">src/config.ts</code>.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D91E2A] hover:bg-[#BF1622] text-white font-['Montserrat',sans-serif] font-bold text-xs uppercase tracking-widest transition-colors red-glow-hover"
          >
            <span>See More on TikTok</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Clearly Labelled Placeholder Testimonial Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-['Montserrat',sans-serif] tracking-widest uppercase text-[#D91E2A] font-bold">
                Customer Feedback
              </span>
              <h3 className="font-['Michroma',sans-serif] text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                What Our Clients Say
              </h3>
            </div>
            <div className="text-xs text-[#A8ADB5] italic font-['Inter',sans-serif]">
              * Placeholders ready for real customer reviews in src/config.ts
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl bg-[#141414] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
              >
                <div>
                  {/* Placeholder Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#D91E2A] uppercase tracking-wider">
                      [Placeholder Review]
                    </span>
                    <MessageSquare className="w-4 h-4 text-white/30" />
                  </div>

                  <p className="font-['Inter',sans-serif] text-sm text-[#A8ADB5] leading-relaxed mb-6 italic">
                    "{review.feedback}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="font-['Montserrat',sans-serif] font-bold text-xs text-white">
                      {review.author}
                    </h5>
                    <div className="text-[11px] text-[#A8ADB5] mt-0.5">
                      {review.vehicle} · {review.location}
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#D91E2A]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
