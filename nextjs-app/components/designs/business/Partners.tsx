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
      className="py-20 lg:py-32 bg-[var(--color-business-primary)] overflow-hidden"
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 lg:mb-16 gap-6">
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

        <div className="space-y-12 border-t border-white/5 pt-12 lg:pt-16">
          {/* Partner Groups */}
          {partnerGroups.map((group, index) => (
            <div key={index} className="pause-on-hover px-4">
              <h3 className="text-base lg:text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span 
                  className="w-[2px] h-5 lg:h-6"
                  style={{ backgroundColor: 'var(--color-business-secondary)' }}
                ></span>
                {group.title}
              </h3>

              <div className="relative flex overflow-hidden group/marquee">
                <div className={`flex flex-nowrap ${index % 2 === 0 ? 'animate-marquee' : 'animate-marquee-slow'}`}>
                  {/* First set of logos */}
                  <div className="flex gap-10 py-4 pr-10 flex-shrink-0">
                    {group.partners.map((partner, i) => (
                      <div
                        key={`set1-${i}`}
                        className="group/item relative flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-300 aspect-[4/1]"
                      >
                        <div className="relative w-full h-full transition-all duration-300 grayscale invert brightness-[1.8] group-hover/item:grayscale-0 group-hover/item:invert-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-white/10">
                          {partner.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set 2 */}
                  <div className="flex gap-10 py-4 pr-10 flex-shrink-0" aria-hidden="true">
                    {group.partners.map((partner, i) => (
                      <div
                        key={`set2-${i}`}
                        className="group/item relative flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-300 aspect-[4/1]"
                      >
                        <div className="relative w-full h-full transition-all duration-300 grayscale invert brightness-[1.8] group-hover/item:grayscale-0 group-hover/item:invert-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-white/10">
                          {partner.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set 3 */}
                  <div className="flex gap-10 py-4 pr-10 flex-shrink-0" aria-hidden="true">
                    {group.partners.map((partner, i) => (
                      <div
                        key={`set3-${i}`}
                        className="group/item relative flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-300 aspect-[4/1]"
                      >
                        <div className="relative w-full h-full transition-all duration-300 grayscale invert brightness-[1.8] group-hover/item:grayscale-0 group-hover/item:invert-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-white/10">
                          {partner.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set 4 for guaranteed coverage */}
                  <div className="flex gap-10 py-4 pr-10 flex-shrink-0" aria-hidden="true">
                    {group.partners.map((partner, i) => (
                      <div
                        key={`set4-${i}`}
                        className="group/item relative flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-300 aspect-[4/1]"
                      >
                        <div className="relative w-full h-full transition-all duration-300 grayscale invert brightness-[1.8] group-hover/item:grayscale-0 group-hover/item:invert-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-white/10">
                          {partner.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
