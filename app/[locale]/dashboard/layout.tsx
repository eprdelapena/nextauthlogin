"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";


import { getMessages } from "next-intl/server";
import "../../../app/globals.css" 
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useTranslations } from 'next-intl'

const inter = Inter({ subsets: ["latin"] });
type Props = {
    children: ReactNode;
    params: {locale: string};
};

export default async function Layout({
  children,
  params: {locale}
}: Props) {
    const t = useTranslations("IndexPage");
  return (

      <div>
        <div className="bg-red-500"> asdads {t("title")} {children}</div>
      </div>
  );
}

