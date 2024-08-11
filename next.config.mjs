
//1. do this
import createNextIntlPlugin from "next-intl/plugin";


//2. do this
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};


//3. do this
export default withNextIntl(nextConfig);
