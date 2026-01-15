import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">함께 성장할 준비가 되셨나요?</h2>
        <p className="text-slate-400 mb-10 text-lg">
          새로운 프로젝트에 대해 이야기 나누는 것을 좋아합니다.
          <br />
          언제든 편하게 연락주세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {/* Phone Card */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <div className="w-8 h-8 text-indigo-400 mx-auto mb-4">📞</div>
            <h3 className="text-lg font-bold mb-1">Phone</h3>
            <p className="text-slate-300 mb-2">010-3129-6842</p>
          </div>

          {/* Email Card */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <div className="w-8 h-8 text-indigo-400 mx-auto mb-4">📧</div>
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <p className="text-slate-300 mb-2">sue_ycom@naver.com</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
          &copy; 2026 Y Communication. All rights reserved.
          <br />
          Designed for high impact.
        </div>
      </div>
    </footer>
  );
}
