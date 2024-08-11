import React from 'react'
import { useTranslations } from 'next-intl'

const page = () => {
    const t = useTranslations("IndexPage");
  return (
    <div>{t("enddate")}</div>
  )
}

export default page