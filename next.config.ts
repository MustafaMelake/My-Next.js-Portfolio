import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project directory. A stray lockfile in a
  // parent directory (e.g. C:\Users\<user>\package-lock.json) otherwise makes
  // Next infer the wrong root, which emits a build warning and can misresolve
  // dependencies. See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
