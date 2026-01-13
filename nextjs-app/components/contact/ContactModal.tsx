'use client';

import { useState } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fieldOptions = [
  { value: '아나운서', label: '아나운서' },
  { value: 'MC', label: 'MC' },
  { value: '강사', label: '강사' },
  { value: '쇼호스트', label: '쇼호스트' },
  { value: '기타', label: '기타' },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get('company'),
      manager: formData.get('manager'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      date: formData.get('date'),
      location: formData.get('location'),
      budget: formData.get('budget'),
      field: formData.get('field'),
      note: formData.get('note'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 2500);
      } else {
        setError(result.error || '문의 전송에 실패했습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold text-slate-900">📧 프로젝트 문의</h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">문의가 전송되었습니다!</h3>
            <p className="text-slate-500">빠른 시일 내에 답변 드리겠습니다.</p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                회사명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="회사/기관명을 입력하세요"
              />
            </div>

            {/* Manager & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  담당자 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="manager"
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="이름"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="example@company.com"
              />
            </div>

            {/* Date & Location */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  일시
                </label>
                <input
                  type="text"
                  name="date"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="예: 2026년 2월 15일"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  장소
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="행사 장소"
                />
              </div>
            </div>

            {/* Budget & Field */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  예산
                </label>
                <input
                  type="text"
                  name="budget"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="예산 범위"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  섭외분야 <span className="text-red-500">*</span>
                </label>
                <select
                  name="field"
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">선택하세요</option>
                  {fieldOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                기타사항
              </label>
              <textarea
                name="note"
                rows={4}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                placeholder="추가 요청사항이나 문의 내용을 입력하세요"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 text-slate-600 bg-slate-100 font-medium rounded-xl hover:bg-slate-200 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    문의하기
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
