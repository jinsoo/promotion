'use client';

export function Partners() {
  const partnerGroups = [
    {
      title: '공공 / 지방자치',
      partners: ['지방자치인재개발원', '서울특별시청', '경기도청', '강원도특별자치도교육청'],
    },
    {
      title: '기업 / 브랜드',
      partners: ['SAMSUNG', 'LG전자', '현대백화점', '교보생명', '애터미', 'Market Kurly', 'Coway'],
    },
    {
      title: '글로벌 / IT',
      partners: ['Microsoft Research Asia', 'HP', 'Symantec', 'FireEye'],
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
        <div className="space-y-16">
          {partnerGroups.map((group, index) => (
            <div key={index}>
              <h3
                className="text-xl font-bold mb-8 flex items-center gap-3"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                <span
                  className="w-1 h-8"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.partners.map((partner, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 text-sm font-medium transition-all duration-300 border"
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--color-charcoal)',
                      borderColor: 'transparent',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-gold)';
                      e.currentTarget.style.color = 'var(--color-primary-dark)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.color = 'var(--color-charcoal)';
                    }}
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
