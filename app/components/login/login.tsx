"use client";
import { APP_INFO } from "@/config";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

let line28 = {
  lineHeight: '28px'
}
let leftStyle: any = {
  color: '#FFFFFF',
  lineHeight: '28px'
}
let title = {
  fontSize: '20px',
  fontWeight: '700',
  marginBottom: '20px'
}
let rightTitle = {
  margin: '0 auto',
}

const leftCont = (
  <div>
    <h4 style={title}>基于AI大模型新一代AI应用</h4>
    <p>GotoAI 核心技术团队来自于Microsoft以及</p>
    <p>LangChain 技术社区资深开发团队，即刻联系GotoAI</p>
    <p>团队开启企业AI 数字化转型之旅</p>
    <p>www.gotoai.world</p>
    <p>400-862-1600</p>
  </div>
)

export const LogIn = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex bg-sky-500 w-[450px] text-center items-center p-4 relative" style={leftStyle}>
        {leftCont}
        <a className="w-full absolute left-0 bottom-[20px] text-sm" href="https://www.gotoai.world/">© {APP_INFO.title} {(new Date()).getFullYear()}</a>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-2 flex-col w-[600px]">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl flex gap-2">
              <span className="text-primary" style={rightTitle}>{APP_INFO.title}</span>
            </CardTitle>
            <CardDescription className="text-center" style={line28}>
              AI大模型+企业私域数据+行业专业数据，定制化企业AI，AI自动学习数据，自主训练与意图识别，建立自动对话和对话分析，建立用户画像，集成到网站，微信，可扩展集成钉钉，企业抖音多种应用, 7*24小时高效智能AI服务
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 w-[400px]" style={rightTitle}>
            {/* <Button onClick={() => signIn("github")}>GitHub</Button> */}
            {/* <Button onClick={() => signIn("azure-ad")}> Microsoft 365</Button> */}
            <button className="bg-sky-500 text-white h-[36px]" onClick={() => signIn("azure-ad")}> Microsoft 365</button>
          </CardContent>
        </div>
      </div>

    </div>
  );
};
