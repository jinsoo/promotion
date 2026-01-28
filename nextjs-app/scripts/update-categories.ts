import 'dotenv/config';
import { createClient } from '@sanity/client';

// Create write client with environment variables
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// 카테고리 매핑
const categoryMappings: { category: string; keywords: string[] }[] = [
  {
    category: 'official-mc',
    keywords: ['시상식', '발표회', '선포식'],
  },
  {
    category: 'showhost-live',
    keywords: ['뷰티쇼', '토크콘서트', '청신호tv', '영어 쇼호스트', '미주 라이브', '라이브 촬영', '인스타 라이브', '요리쇼', '봉통 라이브', '리틀그라운드'],
  },
  {
    category: 'video-ad',
    keywords: ['영상 촬영', '광고 촬영', '정책방송', '의학정보'],
  },
  {
    category: 'corporate-training',
    keywords: ['세일즈 강연', '양성 과정', '스피치 과정', '의정 강화'],
  },
  {
    category: 'speech-consulting',
    keywords: ['스피치 컨설팅', 'SNS 홍보 전략'],
  },
];

async function updateCategories() {
  // 모든 이벤트 가져오기
  const events = await writeClient.fetch(`*[_type == "event"]{_id, title}`);
  
  console.log(`Found ${events.length} events`);

  for (const event of events) {
    let matchedCategory: string | null = null;

    // 키워드 매칭으로 카테고리 찾기
    for (const mapping of categoryMappings) {
      for (const keyword of mapping.keywords) {
        if (event.title.includes(keyword)) {
          matchedCategory = mapping.category;
          break;
        }
      }
      if (matchedCategory) break;
    }

    if (matchedCategory) {
      console.log(`Updating "${event.title}" -> ${matchedCategory}`);
      await writeClient.patch(event._id).set({ category: matchedCategory }).commit();
    } else {
      console.log(`No match for "${event.title}"`);
    }
  }

  console.log('Done!');
}

updateCategories().catch(console.error);
