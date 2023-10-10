import type { IOnCompleted, IOnData, IOnError } from './base'
import { get, post, ssePost, getRequest } from './base'
import type { Feedbacktype } from '@/types/app'
import { userSession, userHashedId } from "@/auth/helpers";


export const sendChatMessage = async (body: Record<string, any>, { onData, onCompleted, onError }: {
  onData: IOnData
  onCompleted: IOnCompleted
  onError: IOnError
}) => {
  return ssePost('chat-messages', {
    body: {
      ...body,
      response_mode: 'streaming'
    },
  }, { onData, onCompleted, onError })
}

export const fetchConversations = async () => {
  return get('conversations', { params: { limit: 20, first_id: '' } })
}

export const fetchChatList = async (conversationId: string) => {
  return get('messages', { params: { conversation_id: conversationId, limit: 20, last_id: '' } })
}

// init value. wait for server update
export const fetchAppParams = async () => {
  return get('parameters')
}

export const updateFeedback = async ({ url, body }: { url: string; body: Feedbacktype }) => {
  return post(url, { body })
}

export const userAppData = (loginname: any): Promise<any> => {
  return getRequest(`workspaces/current/endusers/query?loginname=${loginname}`)
}
export const getDepartments = (enduserid: any): Promise<any> => {
  return getRequest(`workspaces/current/endusers/${enduserid}/departments`)
}
export const getAppId = (enduserid: any): Promise<any> => {
  return getRequest(`workspaces/current/departments/${enduserid}/apps`)
}
export const getAppKey = (appid: any): Promise<any> => {
  return getRequest(`apps/${appid}/api-keys`)
}


