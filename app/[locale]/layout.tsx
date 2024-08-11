import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "../Providers";

import { getMessages } from "next-intl/server";
import "../../app/globals.css"
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });
type Props = {
    children: ReactNode;
    params: {locale: string};
};

export default async function Layout({
  children,
  params: {locale}
}: Props) {

    const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
      <body className={`${inter.className} bg-white h-[100vh] w-[100wh]`}><AuthProvider>{children}</AuthProvider></body>
      </NextIntlClientProvider>
    </html>


  );
}

