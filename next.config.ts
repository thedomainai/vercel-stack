import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Recommended: Enable strict mode for catching potential issues
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  // Sentry config file paths
  clientConfigPath: "./config/sentry/client.config.ts",
  serverConfigPath: "./config/sentry/server.config.ts",
  edgeConfigPath: "./config/sentry/edge.config.ts",

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  // Sourcemaps configuration
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Webpack-specific options (for features not supported with Turbopack)
  webpack: {
    // Automatically annotate React components
    reactComponentAnnotation: {
      enabled: true,
    },

    // Automatically tree-shake Sentry logger statements
    treeshake: {
      removeDebugLogging: true,
    },

    // Enables automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,
  },
});
