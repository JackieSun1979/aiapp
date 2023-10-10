import type { FC } from 'react'
import React from 'react'

import { userSession, userHashedId } from "@/auth/helpers";
import { redirect } from "next/navigation";

import Main from '@/app/components'
import { userAppData, getDepartments, getAppId, getAppKey } from '@/service'
import datakey from '@/service/appkey'
import { setKey } from '@/config'


const App: FC = async ({
  params,
}: any) => {
  const user = await userSession();
  if (!user) {
    redirect("/login");
  }

  const userId = await userHashedId()
  let appkey = null

  let { endusers } = await userAppData('demo003@cloud.com')
  // let { endusers } = await userAppData('demo@cloud.com')
  if (endusers.length) {
    let { departments } = await getDepartments(endusers[0].id)
    let { apps }: any = await getAppId(departments[0].id)
    let keys: any = datakey
    appkey = keys[apps[0].id] ? keys[apps[0].id] : null
  }
  // appkey = 'app-uGTYWEbQvrYGra8oMUZt5ixp'
  setKey(appkey)

  return (
    <Main params={params} userId={userId} appkey={appkey} />
  )
}
export default React.memo(App)
