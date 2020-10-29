<template>
  <div id="trend">
    <TrendComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import TrendComponent from "@/components/TrendComponent.vue";

export default {
  name: 'Repository',
  components: {
    TrendComponent
  }
};
</script>

<style>
#trend{
  margin-top: 19px;
  color:white;
}
</style>
