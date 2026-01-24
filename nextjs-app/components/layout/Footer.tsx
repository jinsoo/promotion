'use client';

import { Footer as ModernFooter } from '@/components/designs/modern/Footer';
import { Footer as BusinessFooter } from '@/components/designs/business/Footer';
import { Footer as DefaultFooter } from '@/components/designs/default/Footer';

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

// Export the appropriate Footer based on design type
export function Footer() {
  if (designType === 'modern') {
    return <ModernFooter />;
  }
  if (designType === 'business') {
    return <BusinessFooter />;
  }
  return <DefaultFooter />;
}
