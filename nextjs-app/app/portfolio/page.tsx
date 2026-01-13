import Link from 'next/link';
import { Calendar, Building2 } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider text-sm">
            PORTFOLIO
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">포트폴리오</h1>
          <p className="text-slate-500 mt-4">
            와이 커뮤니케이션의 다양한 활동을 확인하세요.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events Card */}
          <Link
            href="/portfolio/events"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
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
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white hover:shadow-2xl hover:shadow-slate-500/30 transition-all duration-300 hover:-translate-y-1"
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
