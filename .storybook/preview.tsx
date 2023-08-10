import React from "react";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { withTests } from "@storybook/addon-jest";

import results from "../.jest-test-results.json";
import "../src/app/globals.css";

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      retry: false,
    },
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: { current: "light" },
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  loaders: [mswLoader],
  decorators: [
    Story => (
      <QueryClientProvider client={queryClient}>
        <Story />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    ),
    withTests({ results }),
  ],
};

export default preview;
