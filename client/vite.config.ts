import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.MAILCHIMP_API_KEY": JSON.stringify(env.MAILCHIMP_API_KEY),
      "process.env.LIST_ID": JSON.stringify(env.LIST_ID),
    },
    build: {
      outDir: "client/dist",
    },
  };
});
