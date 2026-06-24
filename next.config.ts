import type { NextConfig } from "next";

const medusaBackendUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
const medusaImagePattern = medusaBackendUrl
  ? (() => {
      try {
        const { protocol, hostname, port } = new URL(medusaBackendUrl);
        return {
          protocol: protocol.replace(":", "") as "http" | "https",
          hostname,
          ...(port ? { port } : {}),
        };
      } catch {
        return null;
      }
    })()
  : { protocol: "http" as const, hostname: "localhost", port: "9000" };

// @ts-ignore
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      ...(medusaImagePattern ? [medusaImagePattern] : []),
    ],
  },
};

export default nextConfig;
