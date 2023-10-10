import { ChatClient } from 'dify-client'
import { API_URL } from '@/config'

export const chatClient = (val: any) => {
    return new ChatClient(val, API_URL + '/v1' || undefined)
}
