import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nameKorean,
      nameEnglish,
      phone,
      email,
      agency,
      photoLinks,
      tagline,
      introduction,
      education,
      career,
      awards,
      specialties,
      specialtiesOther,
      videoPortfolio,
      audioSample,
      otherWorks,
      instagram,
      youtube,
      linkedin,
      otherSns,
      colorTone,
      designStyle,
      referenceUrl,
      needContactForm,
      language,
      additionalRequests,
    } = body;

    // Basic validation
    if (!nameKorean || !phone || !email || !tagline || !career) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // Map specialty IDs to labels
    const specialtyLabels: Record<string, string> = {
      mc: 'MC/진행',
      narration: '내레이션',
      voiceover: '보이스오버/더빙',
      news: '뉴스/리포팅',
      lecture: '강의/교육',
      other: '기타',
    };

    const specialtiesText = specialties
      .map((s: string) => specialtyLabels[s] || s)
      .join(', ') + (specialtiesOther ? ` (${specialtiesOther})` : '');

    // Color tone and design style labels
    const colorToneLabels: Record<string, string> = {
      bright: '밝은/화사한',
      calm: '차분한/모던',
      luxury: '고급스러운/다크',
    };

    const designStyleLabels: Record<string, string> = {
      minimal: '심플/미니멀',
      dynamic: '화려한/역동적',
      professional: '전문적/비즈니스',
    };

    const languageLabels: Record<string, string> = {
      ko: '한국어만',
      'ko-en': '한국어 + 영어',
      other: '기타',
    };

    // Send Email via Resend
    try {
      await resend.emails.send({
        from: 'Y Communication <onboarding@resend.dev>',
        to: ['virtalf@gmail.com'],
        subject: `[프로필 웹페이지 제작 요청] ${nameKorean}님`,
        html: `
        <div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; border-bottom: 2px solid #c9a962; padding-bottom: 10px;">
            프로필 웹페이지 제작 요청서
          </h1>
          
          <h2 style="color: #c9a962; margin-top: 30px;">1. 기본 정보</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>성명 (한글)</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nameKorean}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>성명 (영문)</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nameEnglish || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>연락처</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>이메일</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>소속사</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${agency || '-'}</td></tr>
          </table>

          <h2 style="color: #c9a962; margin-top: 30px;">2. 프로필 사진</h2>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${photoLinks || '미첨부'}</p>

          <h2 style="color: #c9a962; margin-top: 30px;">3. 소개 및 경력</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>한 줄 소개</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tagline}</td></tr>
          </table>
          <p><strong>자기소개:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${introduction || '-'}</p>
          <p><strong>학력:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${education || '-'}</p>
          <p><strong>주요 경력:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${career}</p>
          <p><strong>수상 이력:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${awards || '-'}</p>

          <h2 style="color: #c9a962; margin-top: 30px;">4. 전문 분야</h2>
          <p>${specialtiesText || '-'}</p>

          <h2 style="color: #c9a962; margin-top: 30px;">5. 포트폴리오</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>영상</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${videoPortfolio || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>음성</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${audioSample || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>기타</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${otherWorks || '-'}</td></tr>
          </table>

          <h2 style="color: #c9a962; margin-top: 30px;">6. SNS / 외부 링크</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>Instagram</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${instagram || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>YouTube</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${youtube || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>LinkedIn</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${linkedin || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>기타</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${otherSns || '-'}</td></tr>
          </table>

          <h2 style="color: #c9a962; margin-top: 30px;">7. 디자인 선호도</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>색상 톤</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${colorToneLabels[colorTone] || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>스타일</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${designStyleLabels[designStyle] || '-'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>참고 사이트</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${referenceUrl || '-'}</td></tr>
          </table>

          <h2 style="color: #c9a962; margin-top: 30px;">8. 추가 요청 사항</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 120px;"><strong>문의폼 필요</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${needContactForm ? '예' : '아니오'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>언어 지원</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${languageLabels[language] || language}</td></tr>
          </table>
          <p><strong>기타 요청 사항:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${additionalRequests || '-'}</p>

          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 12px;">이 이메일은 프로필 웹페이지 제작 요청 폼에서 자동 발송되었습니다.</p>
        </div>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: '이메일 전송 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Profile Request API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
