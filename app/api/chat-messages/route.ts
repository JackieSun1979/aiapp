import { type NextRequest } from 'next/server'
import { getInfo, setSession } from '@/app/api/utils/common'
import { chatClient } from '@/utils/chat-client'

export async function POST(request: NextRequest) {
  let val = request.cookies.get('key')?.value
  let chat = chatClient(val)
  const body = await request.json()
  const {
    inputs,
    query,
    conversation_id: conversationId,
    response_mode: responseMode,
  } = body
  const { user } = getInfo(request)
  const res = await chat.createChatMessage(inputs, query, user, responseMode, conversationId)
  return new Response(res.data as any)
}
