import { client } from '@/lib/sanity/client';
import { businessQuery } from '@/lib/sanity/queries';
import ClassClient from '@/components/class/ClassClient';

export const revalidate = 60;

export default async function ClassPage() {
  const businessItems = await client.fetch(businessQuery);

  return <ClassClient businessItems={businessItems} />;
}
