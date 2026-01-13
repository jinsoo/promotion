const business = {
  name: 'business',
  title: '사업',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '사업명',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: '설명',
      type: 'text',
    },
    {
      name: 'category',
      title: '카테고리',
      type: 'string',
    },
    {
      name: 'images',
      title: '이미지',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'date',
      title: '날짜',
      type: 'date',
    },
  ],
};

export default business;
