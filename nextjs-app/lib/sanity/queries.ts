import { groq } from 'next-sanity';

// 행사 목록 (최근순)
export const eventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    views,
    schedule,
    location,
    description,
    "host": host->name,
    category,
    images
  }
`;

// 사업 목록
export const businessQuery = groq`
  *[_type == "business"] | order(date desc) {
    _id,
    title,
    description,
    category,
    images,
    date
  }
`;

// 아나운서 목록 (기본 정보만 - 빠른 로딩)
export const announcersQuery = groq`
  *[_type == "announcer"] {
    _id,
    name,
    title,
    category,
    affiliation,
    photo,
    priority
  }
`;

// 아나운서 상세
export const announcerByIdQuery = groq`
  *[_type == "announcer" && _id == $id][0] {
    _id,
    name,
    title,
    category,
    affiliation,
    photo,
    education,
    career,
    awards,
    portfolioImages
  }
`;

// 카테고리별 아나운서 필터
export const announcersByCategoryQuery = groq`
  *[_type == "announcer" && $category in category] {
    _id,
    name,
    title,
    category,
    affiliation,
    photo,
    priority
  }
`;
