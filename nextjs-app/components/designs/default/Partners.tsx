'use client';

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider text-sm">
            CLIENT LIST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">협업 파트너사</h2>
          <p className="text-slate-500 mt-4">
            신뢰와 실력으로 함께하는 동반자들입니다.
          </p>
        </div>

        <div className="space-y-12">
          {/* Public / Government */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
              공공 / 지방자치
            </h3>
            <div className="flex flex-wrap gap-3">
              {['지방자치인재개발원', '서울특별시청', '경기도청', '강원도특별자치도교육청'].map(
                (partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm"
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
              기업 / 브랜드
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'SAMSUNG',
                'LG전자',
                '현대백화점',
                '교보생명',
                '애터미',
                'Market Kurly',
                'Coway',
              ].map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Global / IT */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
              글로벌 / IT
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Microsoft Research Asia', 'HP', 'Symantec', 'FireEye'].map(
                (partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm font-medium"
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
