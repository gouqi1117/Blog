import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "can U see",
  base: "/Blog/",
  description: "can can need",
  theme: defaultTheme({
    navbar: [
      {
        text: "首页666",
        link: "/",
      },
      {
        text: "components",
        link: "/components/",
      },
      {
        text: "gitee",
        link: "https://gitee.com/gouqiyao",
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "About vue",
          children: [
            {
              text: "自定义指令",
              link: "/components/some/",
            },
          ],
        },
      ],
    },
  }),
});
