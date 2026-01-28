const event = {
  name: 'event',
  title: '행사',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '행사 내용',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: '날짜',
      type: 'date',
    },
    {
      name: 'views',
      title: '조회수',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'schedule',
      title: '일정',
      type: 'string',
    },
    {
      name: 'location',
      title: '장소',
      type: 'string',
    },
    {
      name: 'description',
      title: '내용',
      type: 'text',
    },
    {
      name: 'host',
      title: '진행',
      type: 'reference',
      to: [{ type: 'announcer' }],
    },
    {
      name: 'images',
      title: '사진들',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
  orderings: [
    {
      title: '최근순',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
};

export default event;
