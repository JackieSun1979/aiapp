import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getInfo, setSession } from '@/app/api/utils/common'
import { chatClient } from '@/utils/chat-client'

export async function GET(request: NextRequest) {
  const { sessionId, user } = getInfo(request)
  let val = request.cookies.get('key')?.value
  try {
    let chat = chatClient(val)
    const { data } = await chat.getApplicationParameters(user)
    return NextResponse.json(data as object, {
      headers: setSession(sessionId),
    })
  } catch (error) {
    return NextResponse.json([]);
  }
}
