import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';
import { announcerByIdQuery } from '@/lib/sanity/queries';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const announcer = await client.fetch(announcerByIdQuery, { id });
    
    if (!announcer) {
      return NextResponse.json({ error: 'Announcer not found' }, { status: 404 });
    }
    
    return NextResponse.json(announcer);
  } catch (error) {
    console.error('Error fetching announcer:', error);
    return NextResponse.json({ error: 'Failed to fetch announcer' }, { status: 500 });
  }
}
