"use client";

import { authenticator } from "@/utils/backendUtils";
import { ImageKitProvider } from "imagekitio-next";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const urlEndpoints = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoints}
        authenticator={authenticator}
      >
        {children}
      </ImageKitProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
