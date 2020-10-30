<template>


  <div id="app">

  <b-nav tabs align="center" id="nav" class="navbar navbar-dark">

  <b-navbar-brand href="/"><img :src="images.logo" width="85%" height="80%"></b-navbar-brand>
  <b-nav-item  id="item" to="/" exact exact-active-class="active">Home</b-nav-item>
  <b-nav-item id="item" to="/repository" exact exact-active-class="active" class="dark">Trending</b-nav-item>
  <b-nav-item id="item" to="/about" exact exact-active-class="active" class="dark">About</b-nav-item>

  </b-nav>
  <router-view />
  <div class="row">
    <div class="col-12">
    <hr style=" border-top: 2px solid #696969; ">
    <p>Made with ❤️ in Vue.js. Developed by <a href="https://github.com/Shahibur66" style='color: white;' target="_blank" >Shahibur Rahman</a>.
    </p>
    </div>
  </div>
  </div>

</template>

<script>

// import {mapActions} from "vuex"

export default {
    data() {
        return {
            images: {
                logo: require('./assets/gitify.png')
            }
        }
    }
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

item{
 color: blue !important;
}

#app .nav-item a { color: white }
#app .active{
  color:red;
}
#nav{
  margin-top:50px;
  font-family: Avenir;
}

#app .nav-item .active {
  background-color: rgb(48, 44, 44);

 }
.row{
   color: white;
   margin-top:115px;
   font-family: Avenir;
 }
body{
  background-color:#201e1e;
}
</style>
