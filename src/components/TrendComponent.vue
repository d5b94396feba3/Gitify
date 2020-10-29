<template>
<div id="trendCompo">


<div class="main">
  <b-jumbotron class="jumbot">
    <template #header><h3>GitHub Trending</h3></template>

    <template #lead>

   <p id="param">
    Currently, there is no official GitHub API to get list of trending repositories
    but you can still see trending repositories on the GitHub trending page.
   </p>
    </template>

    <hr class="my-4">

    <p>
      To redirect Github trending page
    </p>
        <b-button variant="dark" href="https://github.com/trending" target="_blank">Click Here</b-button>
  </b-jumbotron>
</div>

</div>
</template>

<script>
export default {
  name: 'TrendComponent',
};
</script>

<style scoped>


.main{
margin-top:47px;
width: 60%;
margin: 0 auto;
color:white;
opacity: 0.8;
}

#trendCompo {
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
