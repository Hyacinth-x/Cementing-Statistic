<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  errorCaptured(err,vm,info) {
    //err 具体错误信息 vm错误发生的组件 info 错误信息(指出哪一个地方报错)
    console.log("组件报错信息",err,vm,info);
  }
}
</script>

<style>
#app{
  min-height: 100vh;
  background-color: #f0faff;
}
</style>
