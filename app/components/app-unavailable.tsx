'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

type IAppUnavailableProps = {
  isUnknwonReason: boolean
  errMessage?: string
}

const AppUnavailable: FC<IAppUnavailableProps> = ({
  isUnknwonReason,
  errMessage,
}) => {
  const { t } = useTranslation()
  let message = errMessage
  if (!errMessage)
    message = (isUnknwonReason ? t('app.common.appUnkonwError') : t('app.common.appUnavailable')) as string

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      {/* <h1 className='mr-5 h-[50px] leading-[50px] pr-5 text-[24px] font-medium'
        style={{
          borderRight: '1px solid rgba(0,0,0,.3)',
        }}>{(errMessage || isUnknwonReason) ? 500 : 404}</h1> */}
      <div className='text-center'>
        <div className='text-sm'>{message}</div>
        <div className='w-[240px] flex justify-center text-sm leading-none text-muted-foreground cursor-pointer rounded-xl px-6 py-3 mt-4 bg-sky-500 border-sky-500 text-white' onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}
export default React.memo(AppUnavailable)
