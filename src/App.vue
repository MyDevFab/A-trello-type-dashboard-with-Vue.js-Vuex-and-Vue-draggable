<template>
   <router-view/>
</template>

<script>
export default {

  name: 'App',
  components: {
    
  }
}
</script>

<style>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('./assets/wallpaper_sea.jpg');
  background-repeat: no-repeat;
   background-size: 100%;
   height: 100%;

}

/* html, body {
  margin:0px;
  height:100%;
}


.container {

  height:100%;
  width: 100%;
  background-color: red;
  background-size: 100%;
  height:100vh;

}
*/

</style>