'use client';

import Image from 'next/image';

export function Partners() {
  const partnerGroups = [
    {
      title: '공공 / 지방자치',
      partners: [
        { name: '지방자치인재개발원', logo: '/images/partners/logodi.svg' },
        { name: '서울특별시청', logo: '/images/partners/seoul_metropolitan_government.png' },
        { name: '경기도청', logo: '/images/partners/gg_provincial_government.svg' },
        { name: '강원도특별자치도교육청', logo: '/images/partners/gangwon.svg' },
      ],
    },
    {
      title: '기업 / 브랜드',
      partners: [
        { name: 'SAMSUNG', logo: '/images/partners/samsung.svg' },
        { name: 'LG전자', logo: '/images/partners/lg_electronics.svg' },
        { name: '현대백화점', logo: '/images/partners/hyundai_department_store.png' },
        { name: '교보생명', logo: '/images/partners/kyobo_life_insurance.svg' },
        { name: '애터미', logo: '/images/partners/atomy_.svg' },
        { name: 'Market Kurly', logo: '/images/partners/market_kurly.svg' },
        { name: 'Coway', logo: '/images/partners/coway.svg' },
      ],
    },
    {
      title: '글로벌 / IT',
      partners: [
        { name: 'Microsoft Research Asia', logo: '/images/partners/microsoft_research_asia.svg' },
        { name: 'HP', logo: '/images/partners/hp.svg' },
        { name: 'Symantec', logo: '/images/partners/symantec.svg' },
        { name: 'FireEye', logo: '/images/partners/fireeye.svg' },
      ],
    },
  ];

  return (
    <section 
      id="partners" 
      className="py-24 lg:py-40"
      style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 lg:mb-24 gap-6">
            <div className="w-full md:w-auto">
                <span 
                  className="text-sm font-bold tracking-widest uppercase block mb-4"
                  style={{ color: 'var(--color-business-secondary)' }}
                >
                  CLIENT LIST
                </span>
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  협업 파트너사
                </h2>
            </div>
            <p className="text-white/40 mb-2">
                신뢰와 실력으로 함께하는 동반자들입니다.
            </p>
        </div>

        <div className="space-y-24 border-t border-white/5 pt-16 lg:pt-24">
          {/* Partner Groups */}
          {partnerGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span 
                  className="w-[2px] h-6 lg:h-8"
                  style={{ backgroundColor: 'var(--color-business-secondary)' }}
                ></span>
                {group.title}
              </h3>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 lg:gap-6">
                {group.partners.map((partner, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center justify-center p-4 bg-white/[0.03] border border-white/5 rounded-lg transition-all duration-500 hover:bg-white/[0.08] hover:border-white/10 aspect-[4/3]"
                  >
                    <div className="relative w-full h-full transition-all duration-300 grayscale invert brightness-[2] opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 group-hover:opacity-100">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 12vw"
                      />
                    </div>
                    {/* Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
