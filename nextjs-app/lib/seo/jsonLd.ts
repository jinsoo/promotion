// JSON-LD 구조화 데이터 헬퍼 — 네이버/구글 리치 스니펫 지원

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '와이 커뮤니케이션',
    alternateName: 'Y Communication',
    url: 'https://ycom.live',
    logo: 'https://ycom.live/images/og-default.jpg',
    description:
      '대한민국 최고의 스피치·미디어 컨설팅, 전문 연사 섭외 및 교육 기획 전문 기업',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Korean',
    },
    areaServed: {
      '@type': 'Country',
      name: 'KR',
    },
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '와이 커뮤니케이션',
    alternateName: 'Y Communication',
    url: 'https://ycom.live',
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ycom.live/announcer?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function personJsonLd(announcer: {
  name: string;
  title?: string;
  affiliation?: string;
  photoUrl?: string;
  education?: string[];
  career?: string[];
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: announcer.name,
    jobTitle: announcer.title || '아나운서',
    url: `https://ycom.live/announcer/${announcer.id}`,
    ...(announcer.photoUrl && { image: announcer.photoUrl }),
    ...(announcer.affiliation && {
      worksFor: {
        '@type': 'Organization',
        name: announcer.affiliation,
      },
    }),
    ...(announcer.education &&
      announcer.education.length > 0 && {
        alumniOf: announcer.education.map((edu) => ({
          '@type': 'EducationalOrganization',
          name: edu,
        })),
      }),
    knowsAbout: ['아나운서', 'MC', '스피치', '방송'],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
