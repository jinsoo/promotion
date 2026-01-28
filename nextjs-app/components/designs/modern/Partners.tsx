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
      className="py-40"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
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
        <div className="space-y-24">
          {partnerGroups.map((group, index) => (
            <div key={index}>
              <h3
                className="text-xl font-bold mb-10 flex items-center gap-3"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                <span
                  className="w-1 h-8"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
                {group.title}
              </h3>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
                {group.partners.map((partner, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center justify-center p-4 bg-white/50 rounded-lg transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 aspect-[4/3]"
                  >
                    <div className="relative w-full h-full transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 12vw"
                      />
                    </div>
                    {/* Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-xl">
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
