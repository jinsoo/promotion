import { client } from '@/lib/sanity/client';
import { eventsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import EventsClient from './EventsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EventsPage() {
  console.log('Fetching events from Sanity...');
  try {
    const events = await client.fetch(eventsQuery);
    console.log(`Fetched ${events.length} events`);
    return <EventsClient events={events} />;
  } catch (error) {
    console.error('Error fetching events:', error);
    return <EventsClient events={[]} />;
  }


}
