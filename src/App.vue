<template>
  <div id="app">
    <!-- <router-view/> -->
    <Main></Main>
    <!-- <imgCaption></imgCaption> -->
  </div>
</template>

<script>
import Main from './components/Main/main'
import imgCaption from './components/ImageCaption/imageCaption'

export default {
  name: 'App',
  components: {
    Main,
    imgCaption
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background: #000;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
