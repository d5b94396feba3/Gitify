<template>
  <div id="row">
      <ProfileComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComponent from "@/components/ProfileComponent.vue";

export default {

  name: 'Profile',
    components: {
    ProfileComponent
  }
};
</script>

<style scoped>

#row{

   margin-top:18px;
   color: white;
}

</style>
