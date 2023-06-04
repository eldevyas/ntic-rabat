import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/lib/auth';


// This function can be marked `async` if using `await` inside
export async function middleware(Request: NextRequest, Response: NextResponse) {
    if (Request.nextUrl.pathname.startsWith('/')) {
        if (Request) {
            // Get NextAuth session from Request
            const Session: any = Request.cookies.get("") as any;
            if (Session) {
                // Set NextAuth session to Request
                console.log('Session: ', Session);
            } else {
                console.log('No session found on Request.');
            }
        }
    }
}

// Configuration
export const config = {
    matcher: [
        '/connect',
    ],
};