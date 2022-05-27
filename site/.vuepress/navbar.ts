import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },
  {
    text: "教程",
    icon: "edit",
    prefix: "/document/",
    children: [
      {
        text: "vue前端",
        icon: "edit",
        prefix: "article/",
        link:"vue前端"
      },
      {
        text: "java后端",
        icon: "edit",
        prefix: "article/",
        link:"java后端"
      },
      {
        text: "python全栈",
        icon: "edit",
        prefix: "article/",
        link:"python全栈"
      },
      {
        text: "linux运维",
        icon: "edit",
        prefix: "article/",
        link:"linux运维"
      },
      {
        text: "数据库",
        icon: "edit",
        prefix: "article/",
        link:"数据库"
      },
      {
        text: "编程基础",
        icon: "edit",
        prefix: "article/",
        link:"编程基础"
      },
      {
        text: "高数英语",
        icon: "edit",
        prefix: "article/",
        link:"高数英语"
      },



    ],
  },
  { text: "项目", icon: "creative", link: "/project/" },
  { text: "服务", icon: "anonymous", link:   "/service" },


  {
    text: "b站链接",
    icon: "",
    link: "https://space.bilibili.com/13462367?spm_id_from=333.1007.0.0",
  },
]);
