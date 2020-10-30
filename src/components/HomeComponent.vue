<template>
  <div id="main_div">

<div class="main">
  <b-jumbotron class="jumbot">
    <template #header><h1 id="animate_h1" v-animate-css="animationInfinite">Gitify</h1></template>

    <template #lead>
     Get insightful information about any GitHub users.
    </template>

    <hr class="my-4">

  <!-- <b-input-group class="mt-3 mb-3">
  <div class="col-xs-5">
    <b-form-input width="90" autocomplete="off" placeholder="Enter github username" id="input-none" v-model="name"></b-form-input>
  </div>
  </b-input-group> -->
      <b-input-group size="sm" class="mb-2">
          <div class="col-xs-5">
      <b-input-group-prepend>
        <i class="fab fa-github" id="search_github"></i>
      </b-input-group-prepend>
      <b-form-input autocomplete="off" placeholder="Enter github username" id="input-none" v-model="name"></b-form-input>
      </div>
    </b-input-group>

  <router-link to="/profile"><b-button id="btn" variant="dark" :disabled="isDisable" @click="getInput">Search</b-button></router-link>
  </b-jumbotron>
</div>



  </div>
</template>

<script>

export default {
  name: 'HomeComponent',
  data() {
    return {
      name: '',
  animationInfinite: {
  classes: 'zoomInUp',
  duration: 2500,
  iteration: 'infinite'
}
    }
  },
computed: {
  isDisable() {
    return this.name.length <4;
  }
},
  methods:{

    getInput(){
      this.$store.commit('setName',this.name)
      console.log(this.$store.commit('setName',this.name))
    }
  }
};
</script>

<style scoped>

.row{
  text-align: center;
}
#input-none{

  border: 1px solid #ccc;
  margin-top: 10px;
  height: 50px;
  color: white;
  background-color:rgb(48, 43, 43);

}
input::-webkit-input-placeholder {/* Chrome/Opera/Safari/Edge */
  color:white;
}
input::placeholder {
	color:white;
}

#btn{
  color: white;
  opacity: 0.95;
  margin-left:22px;

}

a{
  text-decoration: none;
  color: white;
}
.col-xs-5{
  display: flex;
  margin: 0 auto;
}
#animate_h1{
 font-size:115px;
  opacity: 0.7;
  color:white;
}
.main{
margin-top:47px;
width: 60%;
margin: 0 auto;
opacity: 0.8;
color:white;
}

#main_div {
  margin-top:134px;
}
.jumbot{
  background-color: rgb(48, 43, 43);
}
.my-4{
  background-color:white;
}
#search_github{

  margin-top: 15px;
  margin-right: 5px;
  font-size:38px;
}
</style>

