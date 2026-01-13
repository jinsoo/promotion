import { client } from '@/lib/sanity/client';
import { businessQuery } from '@/lib/sanity/queries';
import BusinessClient from './BusinessClient';

export const revalidate = 60;

export default async function BusinessPage() {
  const businessItems = await client.fetch(businessQuery);

  return <BusinessClient businessItems={businessItems} />;
}
