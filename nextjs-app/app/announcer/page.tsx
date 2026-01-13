import { client } from '@/lib/sanity/client';
import { announcersQuery } from '@/lib/sanity/queries';
import AnnouncerClient from './AnnouncerClient';

export const revalidate = 60;

export default async function AnnouncerPage() {
  const announcers = await client.fetch(announcersQuery);

  return <AnnouncerClient announcers={announcers} />;
}
