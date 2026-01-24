'use client';

export function Partners() {
  return (
    <section 
      id="partners" 
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 lg:mb-20 gap-6 text-center md:text-left">
            <div className="w-full md:w-auto">
                <span 
                  className="text-sm font-bold tracking-widest uppercase block mb-4"
                  style={{ color: 'var(--color-business-secondary)' }}
                >
                  CLIENT LIST
                </span>
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  협업 파트너사
                </h2>
            </div>
            <p className="text-white/60 mb-2 mx-auto md:mx-0">
                신뢰와 실력으로 함께하는 동반자들입니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-white/10 pt-10 lg:pt-16">
          {/* Public / Government */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
              <span 
                className="w-[2px] h-5 lg:h-6"
                style={{ backgroundColor: 'var(--color-business-secondary)' }}
              ></span>
              공공 / 지방자치
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {['지방자치인재개발원', '서울특별시청', '경기도청', '강원도특별자치도교육청'].map(
                (partner) => (
                  <li 
                    key={partner}
                    className="text-white/60 hover:text-white transition-colors py-2 border-b border-white/10 last:border-0 text-sm lg:text-base"
                  >
                    {partner}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
              <span 
                className="w-[2px] h-5 lg:h-6"
                style={{ backgroundColor: 'var(--color-business-secondary)' }}
              ></span>
              기업 / 브랜드
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {[
                'SAMSUNG',
                'LG전자',
                '현대백화점',
                '교보생명',
                '애터미',
                'Market Kurly',
                'Coway',
              ].map((partner) => (
                <li
                    key={partner}
                    className="text-white/60 hover:text-white transition-colors py-2 border-b border-white/10 last:border-0 text-sm lg:text-base"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>

          {/* Global / IT */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
              <span 
                className="w-[2px] h-5 lg:h-6"
                style={{ backgroundColor: 'var(--color-business-secondary)' }}
              ></span>
              글로벌 / IT
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {['Microsoft Research Asia', 'HP', 'Symantec', 'FireEye'].map(
                (partner) => (
                    <li
                        key={partner}
                        className="text-white/60 hover:text-white transition-colors py-2 border-b border-white/10 last:border-0 text-sm lg:text-base"
                    >
                      {partner}
                    </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
