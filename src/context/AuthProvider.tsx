"use client";

import { SessionProvider } from 'next-auth/react';
import {ReactNode} from 'react';
// import {Session} from 'next-auth';

const AuthProvider = ({children} :{children:ReactNode}) => {
  return (
    <SessionProvider >
        {children}
    </SessionProvider>
  )
}

export default AuthProvider