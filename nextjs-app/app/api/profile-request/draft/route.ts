import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';

const DRAFTS_DIR = path.join(process.cwd(), 'data', 'drafts');
const DRAFT_COOKIE_NAME = 'profile_draft_id';
const DRAFT_EXPIRY_DAYS = 7;

// Ensure drafts directory exists
async function ensureDraftsDir() {
  try {
    await fs.access(DRAFTS_DIR);
  } catch {
    await fs.mkdir(DRAFTS_DIR, { recursive: true });
  }
}

// Generate UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// GET - Load draft
export async function GET() {
  try {
    const cookieStore = await cookies();
    let draftId = cookieStore.get(DRAFT_COOKIE_NAME)?.value;

    // If no draft ID, create one
    if (!draftId) {
      draftId = generateUUID();
      return NextResponse.json({ draft: null, draftId });
    }

    await ensureDraftsDir();
    
    const filePath = path.join(DRAFTS_DIR, `${draftId}.json`);
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const draft = JSON.parse(fileContent);
      return NextResponse.json({ draft, draftId });
    } catch {
      // No draft file exists
      return NextResponse.json({ draft: null, draftId });
    }
  } catch (error) {
    console.error('Load draft error:', error);
    return NextResponse.json({ draft: null, draftId: null });
  }
}

// POST - Save draft
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const cookieStore = await cookies();
    let draftId = cookieStore.get(DRAFT_COOKIE_NAME)?.value;

    // If no draft ID, create one
    if (!draftId) {
      draftId = generateUUID();
    }

    await ensureDraftsDir();
    
    const filePath = path.join(DRAFTS_DIR, `${draftId}.json`);
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8');

    // Set cookie with the draft ID
    const response = NextResponse.json({ success: true, draftId });
    response.cookies.set(DRAFT_COOKIE_NAME, draftId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * DRAFT_EXPIRY_DAYS, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Save draft error:', error);
    return NextResponse.json(
      { error: '드래프트 저장 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// DELETE - Clear draft
export async function DELETE() {
  try {
    const cookieStore = await cookies();
    const draftId = cookieStore.get(DRAFT_COOKIE_NAME)?.value;

    if (draftId) {
      await ensureDraftsDir();
      const filePath = path.join(DRAFTS_DIR, `${draftId}.json`);
      
      try {
        await fs.unlink(filePath);
      } catch {
        // File may not exist, ignore
      }
    }

    // Clear the cookie
    const response = NextResponse.json({ success: true });
    response.cookies.delete(DRAFT_COOKIE_NAME);

    return response;
  } catch (error) {
    console.error('Delete draft error:', error);
    return NextResponse.json(
      { error: '드래프트 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
