## Vue路由 meta属性

可以在路由导航守卫跳转的时候判断有没有这个信息,如果有让跳转

文件: src/router/index.js

设置meta属性

```jsx
{
  path: '/userinfo',
  component: userinfo,
  meta: {
    istoken: true
  }
}
```



```jsx
// 路由守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') 
      && !localStorage.getItem('id') 
      && to.meta.istoken === true) {
    Toast.fail('请重新登录')
    next('/login')
    return
  }
  next()
})
```







## 路由前置拦截验证身份





## 生成树级动态路由菜单





## 封装axios

