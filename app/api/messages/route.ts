import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getInfo, setSession } from '@/app/api/utils/common'
import { chatClient } from '@/utils/chat-client'


export async function GET(request: NextRequest) {
  const { sessionId, user } = getInfo(request)
  let val = request.cookies.get('key')?.value
  let chat = chatClient(val)

  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get('conversation_id')
  const { data }: any = await chat.getConversationMessages(user, conversationId as string)
  return NextResponse.json(data, {
    headers: setSession(sessionId),
  })
}
