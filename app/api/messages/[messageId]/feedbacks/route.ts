import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getInfo, setSession } from '@/app/api/utils/common'
import { chatClient } from '@/utils/chat-client'

export async function POST(request: NextRequest, { params }: {
  params: { messageId: string }
}) {
  let val = request.cookies.get('key')?.value
  let chat = chatClient(val)

  const body = await request.json()
  const {
    rating,
  } = body
  const { messageId } = params
  const { user } = getInfo(request)
  const { data } = await chat.messageFeedback(messageId, rating, user)
  return NextResponse.json(data)
}
