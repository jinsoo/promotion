import { Metadata } from 'next';
import ProfileRequestForm from '@/components/profile-request/ProfileRequestForm';

export const metadata: Metadata = {
  title: '프로필 웹페이지 제작 요청서 | Y Communication',
  description: '프리랜서 아나운서를 위한 개인 프로필 웹페이지 제작 요청서입니다.',
};

export default function ProfileRequestPage() {
  return <ProfileRequestForm />;
}
