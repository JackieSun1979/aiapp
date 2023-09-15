import type { FC } from 'react'
import React from 'react'

import { userSession } from "@/auth/helpers";
import { redirect } from "next/navigation";

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

const App: FC<IMainProps> = async ({
  params,
}: any) => {
  const user = await userSession();
  if (!user) {
    redirect("/login");
  }
  return (
    <Main params={params} />
  )
}
export default React.memo(App)
