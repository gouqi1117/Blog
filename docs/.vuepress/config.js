import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "can U see",
  base: "/Blog/",
  description: "can can need",
  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
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
          text: "写点啥",
          children: [
            {
              text: "得写点啥",
              link: "/components/some/",
            },
          ],
        },
      ],
    },
  }),
});
