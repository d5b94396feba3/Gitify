<template>
  <div class="about">

<div class="main">
  <b-jumbotron class="jumbot">
    <template #header><h3>About</h3>    <hr class="my-4"></template>

    <template #lead>
      <p id="param"> Gitify is GitHub profile analyzer which connects with GitHub API's to fetch
     user information for analysis.</p>
    </template>

    <!-- <hr class="my-4"> -->

  </b-jumbotron>
</div>

  </div>
</template>


<style scoped>


.main{
margin-top:47px;
width: 60%;
margin: 0 auto;
color:white;
 opacity: 0.8;
}

.about {
  margin-top:190px;
}
#param{
  margin-top:25px;
  font-size:18px;

}
.jumbot{
  background-color: rgb(48, 43, 43);
}
.my-4{
  background-color:white;
}
</style>