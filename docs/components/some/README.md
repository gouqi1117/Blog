# Vue自定义指令
Vue中内置了一系列的指令（比如v-model，v-show，v-if），在Vue中是允许你注册自定义指令的。

## *以下是在vue中的两种不同的写法：*
### 组合式写法
```vue
<template>
  <input v-focus />
</template>

<script setup>
  // 在setup里，自定义指令必须以v开头
  const vFocus = {
    mounted:(el) => el.focus()
  }
</script>
```

此时第一次进入该页面时，将会自动聚焦于该input输入框

在`<script setup>`中，编写自定义指令时必须为以`v`开头的驼峰式命名的变量。

### 选项式写法
```vue
<template>
  <input v-focus />
</template>

<script>
export default{
  directives:{
    focus:{
      mounted(el) {
        el?.focus()
      }
    }
  }
}
</script>
```

在选项时写法中，注册自定义指令需通过`directives`选项

## 自定义指令的生命周期
* Vue为自定义指令提供了如下的几个钩子函数：
   * ***created***：在绑定元素的 attribute 或事件监听器被应用之前调用；
   * ***beforeMount***：当指令第一次绑定到元素并且在挂载父组件之前调用；
   * ***mounted***：在绑定元素的父组件被挂载后调用；
   * ***beforeUpdate***：在更新包含组件的 VNode 之前调用；
   * ***updated***：在包含组件的 VNode 及其子组件的 VNode 更新后调用；
   * ***beforeUnmount***：在卸载绑定元素的父组件之前调用；
   * ***unmounted***：当指令与元素解除绑定且父组件已卸载时，只调用一次；
