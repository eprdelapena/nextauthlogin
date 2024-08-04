"use client";

import React, {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";

interface MyComponentProps {
    children: ReactNode;
  }

export const AuthProvider: React.FC<MyComponentProps> = ({children}) => {
    return <SessionProvider> {children} </SessionProvider>
}
