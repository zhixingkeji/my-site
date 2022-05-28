import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

    author: {
        name: "Mr.Hope",
        url: "https://mrhope.site",
    },

    iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

    logo: "/logo.svg",

    repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "demo/src",

    // navbar
    navbar: navbar,
    sidebarDepth: 1,
    // sidebar
    sidebar: {
        "/project/": [

            {
                text: "项目1",


                link: "项目1",


            },
            {
                text: "项目2",
                link: "项目2"
            },


        ],


        //vue前端笔记
        "/document/vue前端": [
            //html
            {
                text: "html教程",

                icon: "edit",
                link: "html",


            },

            //css
            {
                text: "css教程",

                icon: "edit",
                collapsable: true,
                children: [
                    {
                        text: "css",
                        link: "css"

                    },
                    {
                        text: "scss",
                        link: "scss"

                    },
                    {
                        text: "less",
                        link: "less"

                    },

                ]

            },


            //js
            {
                text: "js教程",

                icon: "edit",
                collapsable: true,
                children: [
                    {
                        text: "javascript",
                        link: "javascript"

                    },
                    {
                        text: "typescript",
                        link: "typescript"

                    },

                ]


            },

            //vue
            {
                text: "vue教程",

                icon: "edit",
                collapsable: true,
                children: [
                    {
                        text: "vue2教程",
                        link: "vue2"

                    },
                    {
                        text: "vue3教程",
                        link: "vue3"

                    },

                    {
                        text: "uniapp教程",


                        link: "uniapp",


                    },

                ]


            },

            //react
            {
                text: "react教程",

                icon: "edit",
                link: "react",


            },

        ],


        //编程基础笔记
        "/document/编程基础": [

            //  c#教程
            {
                text: "c#教程",
                icon: "edit",

                link: "csharp",

            },

        ],


        //数据库笔记
        "/document/数据库": [

            {
                text: "vue3教程",
                icon: "edit",

                link: "vue3教程",


            },
            {
                text: "vue2教程",

                icon: "edit",
                link: "vue2教程",


            },
            {
                text: "uniapp教程",

                icon: "edit",
                link: "uniapp",


            },
        ],

        //java后端笔记
        "/document/java后端": [

            {
                text: "vue3教程",
                icon: "edit",

                link: "vue3教程",


            },
            {
                text: "vue2教程",

                icon: "edit",
                link: "vue2教程",


            },
            {
                text: "uniapp教程",

                icon: "edit",
                link: "uniapp",


            },
        ],

        //python全栈笔记
        "/document/python全栈": [

            {
                text: "vue3教程",
                icon: "edit",

                link: "vue3教程",


            },
            {
                text: "vue2教程",

                icon: "edit",
                link: "vue2教程",


            },
            {
                text: "uniapp教程",

                icon: "edit",
                link: "uniapp",


            },
        ],

        //linux运维笔记
        "/document/linux运维": [

            {
                text: "git教程",
                icon: "edit",

                link: "git",


            },
            {
                text: "docker教程",

                icon: "edit",
                link: "docker",


            },

        ],

        //高数英语笔记
        "/document/高数英语": [

            {
                text: "vue3教程",
                icon: "edit",

                link: "vue3教程",


            },
            {
                text: "vue2教程",

                icon: "edit",
                link: "vue2教程",


            },
            {
                text: "uniapp教程",

                icon: "edit",
                link: "uniapp",


            },
        ],
    },

    footer: "默认页脚",

    displayFooter: true,

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        description: "一个前端开发者",
        intro: "/intro.html",
        medias: {
            Baidu: "https://example.com",
            Bitbucket: "https://example.com",
            Dingding: "https://example.com",
            Discord: "https://example.com",
            Dribbble: "https://example.com",
            Email: "https://example.com",
            Evernote: "https://example.com",
            Facebook: "https://example.com",
            Flipboard: "https://example.com",
            Gitee: "https://example.com",
            GitHub: "https://example.com",
            Gitlab: "https://example.com",
            Gmail: "https://example.com",
            Instagram: "https://example.com",
            Lines: "https://example.com",
            Linkedin: "https://example.com",
            Pinterest: "https://example.com",
            Pocket: "https://example.com",
            QQ: "https://example.com",
            Qzone: "https://example.com",
            Reddit: "https://example.com",
            Rss: "https://example.com",
            Steam: "https://example.com",
            Twitter: "https://example.com",
            Wechat: "https://example.com",
            Weibo: "https://example.com",
            Whatsapp: "https://example.com",
            Youtube: "https://example.com",
            Zhihu: "https://example.com",
        },
    },

    encrypt: {
        config: {
            "/guide/encrypt.html": ["1234"],
        },
    },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // 如果你不需要评论，可以直接删除 comment 配置，
        // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
        // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
        comment: {
            /**
             * Using giscus
             */
            type: "giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69",

            /**
             * Using twikoo
             */
            // type: "twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // type: "waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        mdEnhance: {
            enableAll: true,
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
        },
    },
});
