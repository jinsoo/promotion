import { client } from '@/lib/sanity/client';
import { eventsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import EventsClient from './EventsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EventsPage() {
  const events = await client.fetch(eventsQuery);

  return <EventsClient events={events} />;
}
