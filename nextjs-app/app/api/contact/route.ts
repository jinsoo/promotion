import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { writeClient } from '@/lib/sanity/client';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      company,
      manager,
      phone,
      email,
      date,
      location,
      budget,
      field,
      note,
    } = body;

    // Basic validation
    if (!company || !manager || !phone || !email || !field) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 1. Send Email via Resend
    try {
      await resend.emails.send({
        from: 'Y Communication <onboarding@resend.dev>', // Update this with your verified domain if available
        to: ['info@ycom.live'], // Replace with actual recipient
        subject: `[프로젝트 문의] ${company} - ${manager}님`,
        html: `
        <h1>새로운 프로젝트 문의가 도착했습니다.</h1>
        <p><strong>회사/기관:</strong> ${company}</p>
        <p><strong>담당자:</strong> ${manager}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>일시:</strong> ${date || '미정'}</p>
        <p><strong>장소:</strong> ${location || '미정'}</p>
        <p><strong>예산:</strong> ${budget || '미정'}</p>
        <p><strong>섭외 분야:</strong> ${field}</p>
        <p><strong>기타 문의:</strong><br/>${note || '없음'}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We continue to save to Sanity even if email fails, or we can return error.
      // Usually better to try both but report if critical one fails.
    }

    // 2. Save to Sanity
    try {
      await writeClient.create({
        _type: 'projectInquiry',
        company,
        manager,
        phone,
        email,
        date,
        location,
        budget,
        field,
        note,
        status: 'new',
        createdAt: new Date().toISOString(),
      });
    } catch (sanityError) {
      console.error('Sanity save failed:', sanityError);
      return NextResponse.json(
        { error: '문의 저장 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
