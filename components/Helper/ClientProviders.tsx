"use client"
import { SessionProvider } from "next-auth/react"
import type React from "react"

import Provider from "@/components/HOC/Provider"

type Props = {
  children: React.ReactNode
}

const ClientProviders = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Provider>{children}</Provider>
    </SessionProvider>
  )
}

export default ClientProviders
