'use client';

import { useState, useEffect, useCallback } from 'react';

interface FormData {
  // 기본 정보
  nameKorean: string;
  nameEnglish: string;
  phone: string;
  email: string;
  agency: string;
  
  // 프로필 사진
  photoLinks: string;
  
  // 소개 및 경력
  tagline: string;
  introduction: string;
  education: string;
  career: string;
  awards: string;
  
  // 전문 분야
  specialties: string[];
  specialtiesOther: string;
  
  // 포트폴리오
  videoPortfolio: string;
  audioSample: string;
  otherWorks: string;
  
  // SNS
  instagram: string;
  youtube: string;
  linkedin: string;
  otherSns: string;
  
  // 디자인 선호도
  colorTone: string;
  designStyle: string;
  referenceUrl: string;
  
  // 추가 요청
  needContactForm: boolean;
  language: string;
  additionalRequests: string;
}

const initialFormData: FormData = {
  nameKorean: '',
  nameEnglish: '',
  phone: '',
  email: '',
  agency: '',
  photoLinks: '',
  tagline: '',
  introduction: '',
  education: '',
  career: '',
  awards: '',
  specialties: [],
  specialtiesOther: '',
  videoPortfolio: '',
  audioSample: '',
  otherWorks: '',
  instagram: '',
  youtube: '',
  linkedin: '',
  otherSns: '',
  colorTone: '',
  designStyle: '',
  referenceUrl: '',
  needContactForm: false,
  language: 'ko',
  additionalRequests: '',
};

const specialtyOptions = [
  { id: 'mc', label: 'MC/진행 (행사, 컨퍼런스, 시상식 등)' },
  { id: 'narration', label: '내레이션 (다큐멘터리, 광고, 기업홍보 등)' },
  { id: 'voiceover', label: '보이스오버 / 더빙' },
  { id: 'news', label: '뉴스 / 리포팅' },
  { id: 'lecture', label: '강의 / 교육' },
  { id: 'other', label: '기타' },
];

const colorToneOptions = [
  { id: 'bright', label: '밝은/화사한' },
  { id: 'calm', label: '차분한/모던' },
  { id: 'luxury', label: '고급스러운/다크' },
];

const designStyleOptions = [
  { id: 'minimal', label: '심플/미니멀' },
  { id: 'dynamic', label: '화려한/역동적' },
  { id: 'professional', label: '전문적/비즈니스' },
];

export default function ProfileRequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [draftId, setDraftId] = useState<string | null>(null);

  // Load draft on mount
  useEffect(() => {
    const loadDraft = async () => {
      try {
        const res = await fetch('/api/profile-request/draft');
        if (res.ok) {
          const data = await res.json();
          if (data.draft) {
            setFormData({ ...initialFormData, ...data.draft });
          }
          if (data.draftId) {
            setDraftId(data.draftId);
          }
        }
      } catch (error) {
        console.error('Failed to load draft:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadDraft();
  }, []);

  // Save draft with debounce
  const saveDraft = useCallback(async (data: FormData) => {
    try {
      await fetch('/api/profile-request/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to save draft:', error);
    }
  }, []);

  // Debounced save on form change
  useEffect(() => {
    if (isLoading) return;
    
    const timeoutId = setTimeout(() => {
      saveDraft(formData);
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [formData, isLoading, saveDraft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSpecialtyChange = (specialtyId: string) => {
    setFormData(prev => {
      const newSpecialties = prev.specialties.includes(specialtyId)
        ? prev.specialties.filter(s => s !== specialtyId)
        : [...prev.specialties, specialtyId];
      return { ...prev, specialties: newSpecialties };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/profile-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        // Clear draft on success
        await fetch('/api/profile-request/draft', { method: 'DELETE' });
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-business-background)]">
        <div className="animate-pulse text-[var(--color-gold)]">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      </div>
    );
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-business-background)] px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Background Sparkles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-10 left-10 w-2 h-2 bg-[var(--color-gold)] rounded-full animate-ping" />
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-[var(--color-gold)] rounded-full animate-bounce" />
              <div className="absolute top-1/2 right-10 w-2 h-2 bg-[var(--color-gold)] rounded-full animate-pulse" />
            </div>

            {/* Cute Hedgehog SVG Animation */}
            <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center group">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                {/* Hedgehog Body (Spikes) */}
                <path
                  d="M100 40 C140 40 170 70 170 110 L170 140 C170 150 160 160 150 160 L50 160 C40 160 30 150 30 140 L30 110 C30 70 60 40 100 40"
                  fill="#8B5E3C"
                />
                <path
                  d="M40 90 L30 80 M60 60 L50 50 M100 45 L100 30 M140 60 L150 50 M160 90 L170 80"
                  stroke="#5D3A1A"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                
                {/* Hedgehog Face (Skin) */}
                <path
                  d="M60 110 C60 90 140 90 140 110 C140 135 130 155 100 155 C70 155 60 135 60 110"
                  fill="#F5D6B5"
                />
                
                {/* Eyes with Blinking Animation */}
                <circle cx="85" cy="115" r="5" fill="#2d3436" className="animate-[pulse_2s_infinite]">
                  <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="115" cy="115" r="5" fill="#2d3436" className="animate-[pulse_2s_infinite]">
                  <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Nose */}
                <circle cx="100" cy="128" r="6" fill="#000" />
                <circle cx="102" cy="126" r="2" fill="#fff" />
                
                {/* Cheeks */}
                <circle cx="75" cy="125" r="5" fill="#FFB7B2" opacity="0.6" />
                <circle cx="125" cy="125" r="5" fill="#FFB7B2" opacity="0.6" />
                
                {/* Feet */}
                <circle cx="70" cy="160" r="8" fill="#F5D6B5" />
                <circle cx="130" cy="160" r="8" fill="#F5D6B5" />

                {/* Heart showing above */}
                <path
                  d="M100 30 Q105 20 115 25 T100 45 T85 25 Q95 20 100 30"
                  fill="#FF6B6B"
                  className="animate-pulse"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-extrabold text-[var(--color-business-primary)] mb-4">
              저희와 함께해주셔서 감사합니다!
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                소중한 정보가 안전하게 전달되었습니다.<br />
                귀여운 고슴도치가 전송 완료 소식을 알려드려요! 🦔✨
              </p>
              <p>
                보내주신 내용을 꼼꼼히 검토한 후,<br />
                최대한 빨리 <strong>설레는 답변</strong>을 들고 연락드리겠습니다.
              </p>
            </div>
            
            <a
              href="https://ycom.live"
              className="mt-8 inline-block text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] underline underline-offset-4"
            >
              처음으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-business-background)] py-12 px-4">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-business-primary)] mb-4">
            프로필 웹페이지 제작 요청서
          </h1>
          <p className="text-gray-600">
            아래 양식을 작성해 주세요. 작성 중인 내용은 자동으로 저장됩니다.
          </p>
          {draftId && (
            <p className="text-sm text-gray-400 mt-2">
              Draft ID: {draftId.slice(0, 8)}...
            </p>
          )}
        </div>

        {/* 기본 정보 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            1. 기본 정보
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성명 (한글) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nameKorean"
                value={formData.nameKorean}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성명 (영문)
              </label>
              <input
                type="text"
                name="nameEnglish"
                value={formData.nameEnglish}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="Hong Gildong"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="email@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                소속사 (있는 경우)
              </label>
              <input
                type="text"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="소속사명"
              />
            </div>
          </div>
        </section>

        {/* 프로필 사진 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            2. 프로필 사진
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              사진 공유 링크 (Google Drive, Dropbox 등)
            </label>
            <textarea
              name="photoLinks"
              value={formData.photoLinks}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
              placeholder="메인 프로필 사진, 활동 사진 등의 공유 링크를 입력해 주세요"
            />
            <p className="text-sm text-gray-500 mt-2">
              * 메인 프로필 사진 (정면 또는 반측면, 고화질) + 활동 사진 3~5장 권장
            </p>
          </div>
        </section>

        {/* 소개 및 경력 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            3. 소개 및 경력
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                한 줄 소개 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="예: 따뜻한 목소리로 소통하는 아나운서"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                자기소개 (200자 내외)
              </label>
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="본인을 소개하는 글을 작성해 주세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                학력
              </label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="학력 사항을 입력해 주세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                주요 경력 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="career"
                value={formData.career}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="주요 경력 사항을 입력해 주세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                수상 이력
              </label>
              <textarea
                name="awards"
                value={formData.awards}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="수상 이력이 있다면 입력해 주세요"
              />
            </div>
          </div>
        </section>

        {/* 전문 분야 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            4. 전문 분야
          </h2>
          <div className="space-y-4">
            {specialtyOptions.map(option => (
              <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.specialties.includes(option.id)}
                  onChange={() => handleSpecialtyChange(option.id)}
                  className="w-5 h-5 text-[var(--color-gold)] border-gray-300 rounded focus:ring-[var(--color-gold)]"
                />
                <span className="text-gray-700 group-hover:text-[var(--color-business-primary)] transition">
                  {option.label}
                </span>
              </label>
            ))}
            {formData.specialties.includes('other') && (
              <input
                type="text"
                name="specialtiesOther"
                value={formData.specialtiesOther}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition mt-2"
                placeholder="기타 전문 분야를 입력해 주세요"
              />
            )}
          </div>
        </section>

        {/* 포트폴리오 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            5. 포트폴리오
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                영상 포트폴리오 (YouTube 등)
              </label>
              <input
                type="url"
                name="videoPortfolio"
                value={formData.videoPortfolio}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="https://youtube.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                음성 샘플 링크
              </label>
              <input
                type="url"
                name="audioSample"
                value={formData.audioSample}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                기타 작업물 링크
              </label>
              <textarea
                name="otherWorks"
                value={formData.otherWorks}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="기타 포트폴리오 링크를 입력해 주세요"
              />
            </div>
          </div>
        </section>

        {/* SNS/외부 링크 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            6. SNS / 외부 링크
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="https://instagram.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                YouTube
              </label>
              <input
                type="url"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="https://youtube.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                기타 SNS
              </label>
              <input
                type="text"
                name="otherSns"
                value={formData.otherSns}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="기타 SNS 링크"
              />
            </div>
          </div>
        </section>

        {/* 디자인 선호도 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            7. 디자인 선호도
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                색상 톤
              </label>
              <div className="flex flex-wrap gap-4">
                {colorToneOptions.map(option => (
                  <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="colorTone"
                      value={option.id}
                      checked={formData.colorTone === option.id}
                      onChange={handleChange}
                      className="w-4 h-4 text-[var(--color-gold)] border-gray-300 focus:ring-[var(--color-gold)]"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                스타일
              </label>
              <div className="flex flex-wrap gap-4">
                {designStyleOptions.map(option => (
                  <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="designStyle"
                      value={option.id}
                      checked={formData.designStyle === option.id}
                      onChange={handleChange}
                      className="w-4 h-4 text-[var(--color-gold)] border-gray-300 focus:ring-[var(--color-gold)]"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                참고 사이트 URL
              </label>
              <input
                type="url"
                name="referenceUrl"
                value={formData.referenceUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="원하는 스타일의 웹사이트 URL"
              />
            </div>
          </div>
        </section>

        {/* 추가 요청 사항 */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-business-primary)] mb-6 pb-2 border-b-2 border-[var(--color-gold)]">
            8. 추가 요청 사항
          </h2>
          <div className="space-y-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="needContactForm"
                checked={formData.needContactForm}
                onChange={handleChange}
                className="w-5 h-5 text-[var(--color-gold)] border-gray-300 rounded focus:ring-[var(--color-gold)]"
              />
              <span className="text-gray-700">문의/섭외 폼 필요</span>
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                언어 지원
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
              >
                <option value="ko">한국어만</option>
                <option value="ko-en">한국어 + 영어</option>
                <option value="other">기타</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                기타 희망 기능 / 요청 사항
              </label>
              <textarea
                name="additionalRequests"
                value={formData.additionalRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition"
                placeholder="추가로 원하시는 사항이 있다면 입력해 주세요"
              />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center">
          {submitStatus === 'error' && (
            <p className="text-red-500 mb-4">제출 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-12 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '제출 중...' : '요청서 제출하기'}
          </button>
        </div>
      </form>
    </div>
  );
}
