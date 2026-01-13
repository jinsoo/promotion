import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      company, 
      manager, 
      phone, 
      email, 
      date, 
      location, 
      budget, 
      field, 
      note 
    } = body;

    // Validate required fields
    if (!company || !manager || !phone || !email || !field) {
      return NextResponse.json(
        { error: '필수 입력 항목을 확인해주세요.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Y Communication <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `[프로젝트 문의] ${company} - ${field}`,
      html: `
        <div style="font-family: 'Noto Sans KR', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            📧 새로운 프로젝트 문의
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; width: 120px; border: 1px solid #e2e8f0;">회사명</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">담당자</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${manager}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">연락처</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">이메일</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
              </td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">일시</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${date || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">장소</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${location || '-'}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">예산</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${budget || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #e2e8f0;">섭외분야</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; color: #4f46e5; font-weight: bold;">${field}</td>
            </tr>
          </table>
          
          ${note ? `
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
            <h3 style="margin: 0 0 10px 0; color: #475569;">기타사항</h3>
            <p style="margin: 0; white-space: pre-wrap;">${note}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
            이 메일은 Y Communication 웹사이트에서 자동으로 발송되었습니다.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
