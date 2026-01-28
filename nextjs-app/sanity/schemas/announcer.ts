const announcer = {
  name: 'announcer',
  title: '아나운서',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '이름',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: '직함',
      type: 'string',
    },
    {
      name: 'category',
      title: '카테고리',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '아나운서', value: 'announcer' },
          { title: 'MC', value: 'mc' },
          { title: '강사', value: 'instructor' },
          { title: '외국인', value: 'foreigner' },
        ],
      },
    },
    {
      name: 'affiliation',
      title: '소속',
      type: 'string',
    },
    {
      name: 'photo',
      title: '프로필 사진',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'education',
      title: '학력',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'career',
      title: '경력',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'awards',
      title: '수상',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'portfolioImages',
      title: '포트폴리오 사진',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'priority',
      title: '중요도',
      type: 'number',
      description: '숫자가 높을수록 상단에 표시됩니다 (기본값: 100)',
      initialValue: 100,
      validation: (Rule: any) => Rule.min(0).max(100),
    },
  ],
};

export default announcer;
