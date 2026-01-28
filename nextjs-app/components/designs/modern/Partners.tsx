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
      className="py-24 bg-[var(--color-bg-warm)] overflow-hidden"
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-gold)' }}
          >
            CLIENT LIST
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mt-4"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              letterSpacing: '-0.03em',
              color: 'var(--color-primary-dark)',
            }}
          >
            협업 파트너사
          </h2>
          <p className="mt-4" style={{ color: 'var(--color-charcoal)' }}>
            신뢰와 실력으로 함께하는 동반자들입니다.
          </p>
        </div>

        {/* Partner Groups */}
        <div className="space-y-12">
          {partnerGroups.map((group, index) => (
            <div key={index} className="pause-on-hover px-4">
              <h3
                className="text-lg font-bold mb-6 flex items-center gap-3"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                <span
                  className="w-1 h-6"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
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
                        <div className="relative w-full h-full transition-all duration-300 grayscale brightness-[0.7] group-hover/item:grayscale-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-md opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-gray-900">
                          {partner.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-10 py-4 pr-10 flex-shrink-0" aria-hidden="true">
                    {group.partners.map((partner, i) => (
                      <div
                        key={`set2-${i}`}
                        className="group/item relative flex-shrink-0 w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-300 aspect-[4/1]"
                      >
                        <div className="relative w-full h-full transition-all duration-300 grayscale brightness-[0.7] group-hover/item:grayscale-0 group-hover/item:brightness-100">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 160px"
                          />
                        </div>
                        {/* Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-md opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:-translate-y-1 whitespace-nowrap z-50 pointer-events-none shadow-2xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-gray-900">
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
