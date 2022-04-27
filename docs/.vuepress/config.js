/*
 * @Descripttion: xyDesign && 微信公众号【星云设计资讯】
 * @version: 1.0.0
 * @Author: xyDesign && 微信公众号【星云设计资讯】
 * @Date: 2022-04-25 14:04:40
 * @web: http://www.xysheji.cn
 * @LastEditTime: 2022-04-27 11:43:58
 * @FilePath: \jc-process\docs\.vuepress\config.js
 */
/*
 * @Descripttion: xyDesign && 微信公众号【星云设计资讯】
 * @version: 1.0.0
 * @Author: xyDesign && 微信公众号【星云设计资讯】
 * @Date: 2022-04-25 14:04:40
 * @web: http://www.xysheji.cn
 * @LastEditTime: 2022-04-27 10:47:23
 * @FilePath: \jc-process\docs\.vuepress\config.js
 */
module.exports = {
    title: '物资管理模块',
    description: '流程及操作',
    //host:'192.168.1.103',
    port:'6605',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
      ],
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Github', link: 'https://github.com/aofeng1227/jc-process' },
          { text: '流程及步骤', link: '/process/process' },
        ],
        sidebar: 'auto'
    },
    lastUpdated: 'Last Updated'
}