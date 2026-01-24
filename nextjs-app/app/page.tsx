import { MainPage as DefaultMainPage } from '@/components/designs/default/MainPage';
import { MainPage as ModernMainPage } from '@/components/designs/modern/MainPage';
import { MainPage as BusinessMainPage } from '@/components/designs/business/MainPage';

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

export default function Home() {
  if (designType === 'modern') {
    return <ModernMainPage />;
  }
  if (designType === 'business') {
    return <BusinessMainPage />;
  }
  return <DefaultMainPage />;
}
