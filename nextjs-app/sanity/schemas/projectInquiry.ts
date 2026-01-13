const projectInquiry = {
  name: 'projectInquiry',
  title: '프로젝트 문의',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: '회사/기관명',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'manager',
      title: '담당자',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: '연락처',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: '이메일',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'date',
      title: '행사 일시',
      type: 'string',
      description: '예: 2026년 2월 15일',
    },
    {
      name: 'location',
      title: '행사 장소',
      type: 'string',
    },
    {
      name: 'budget',
      title: '예산',
      type: 'string',
    },
    {
      name: 'field',
      title: '섭외 분야',
      type: 'string',
      options: {
        list: [
          { title: '아나운서', value: '아나운서' },
          { title: 'MC', value: 'MC' },
          { title: '강사', value: '강사' },
          { title: '쇼호스트', value: '쇼호스트' },
          { title: '기타', value: '기타' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'note',
      title: '기타 문의사항',
      type: 'text',
    },
    {
      name: 'status',
      title: '상태',
      type: 'string',
      options: {
        list: [
          { title: '신규', value: 'new' },
          { title: '검토중', value: 'in_progress' },
          { title: '완료', value: 'completed' },
        ],
      },
      initialValue: 'new',
    },
    {
      name: 'createdAt',
      title: '등록일',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
  preview: {
    select: {
      company: 'company',
      manager: 'manager',
      field: 'field',
      createdAt: 'createdAt',
    },
    prepare(selection: any) {
      const { company, manager, field, createdAt } = selection;
      return {
        title: `${company} (${manager})`,
        subtitle: `${field} | ${new Date(createdAt).toLocaleDateString()}`,
      };
    },
  },
};

export default projectInquiry;
