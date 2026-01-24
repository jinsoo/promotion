'use client';

import { Navbar as ModernNavbar } from '@/components/designs/modern/Navbar';
import { Navbar as BusinessNavbar } from '@/components/designs/business/Navbar';
import { Navbar as DefaultNavbar } from '@/components/designs/default/Navbar';

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

// Export the appropriate Navbar based on design type
export function Navbar() {
  if (designType === 'modern') {
    return <ModernNavbar />;
  }
  if (designType === 'business') {
    return <BusinessNavbar />;
  }
  return <DefaultNavbar />;
}
