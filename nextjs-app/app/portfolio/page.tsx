import Link from 'next/link';
import { Calendar, Building2 } from 'lucide-react';

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

// Design-specific styles
const designStyles = {
  default: {
    container: 'pt-24 pb-16 bg-white',
    label: 'text-indigo-600',
    title: 'text-slate-900',
    subtitle: 'text-slate-500',
    eventsCard: 'bg-gradient-to-br from-indigo-600 to-purple-700 hover:shadow-indigo-500/30',
    businessCard: 'bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-slate-500/30',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    eventsCard: 'bg-gradient-to-br from-amber-600 to-amber-800 hover:shadow-amber-500/30',
    businessCard: 'bg-gradient-to-br from-slate-700 to-slate-800 hover:shadow-slate-400/20',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    eventsCard: 'bg-[#222] border border-[#c9a962]/30 hover:border-[#c9a962] hover:shadow-[#c9a962]/20',
    businessCard: 'bg-[#2d3436] border border-[#c9a962]/30 hover:border-[#c9a962] hover:shadow-[#c9a962]/20',
  },
};

export default function PortfolioPage() {
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

  return (
    <div className={styles.container}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${styles.label} font-bold tracking-wider text-sm`}>
            PORTFOLIO
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>포트폴리오</h1>
          <p className={`${styles.subtitle} mt-4`}>
            와이 커뮤니케이션의 다양한 활동을 확인하세요.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events Card */}
          <Link
            href="/portfolio/events"
            className={`group relative overflow-hidden rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${styles.eventsCard}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-3">행사</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                공식행사MC, 쇼호스트, 입찰PT, 기업교육 등<br />
                다양한 현장 기록을 확인하세요.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                자세히 보기 →
              </span>
            </div>
          </Link>

          {/* Business Card */}
          <Link
            href="/portfolio/business"
            className={`group relative overflow-hidden rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${styles.businessCard}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-3">사업</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                와이 커뮤니케이션의<br />
                주요 사업 영역을 확인하세요.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                자세히 보기 →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
