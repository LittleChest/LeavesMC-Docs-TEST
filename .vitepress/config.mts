import { defineConfigWithTheme } from "vitepress";
import { en } from "./en";
import { zh_Hans, search as zhHansSearch } from "./zh_Hans";

export default defineConfigWithTheme({
  srcDir: "./src",
  lastUpdated: true,
  rewrites: {
    "index.md": "index.md",
    ":file(.*)/index.md": ":file/index.md",
    ":file(.*).md": ":file/index.md"
  },
  // @TODO
  ignoreDeadLinks: true,

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  locales: {
    root: { label: "English", ...en },
    zh_Hans: { label: "简体中文", ...zh_Hans }
  },

  themeConfig: {
    externalLinkIcon: true,

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/5hgtU72w33" },
      { icon: "github", link: "https://github.com/Leaves" }
    ],

    search: {
      provider: "local",
      options: {
        locales: { ...zhHansSearch }
      }
    }
  }
});
