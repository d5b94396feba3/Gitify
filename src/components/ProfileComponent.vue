<template>
  <div id="pro">

<div v-if="user_found==false && animation">
<center id="no_user">
    <b-col md="6" class="mb-3">
      <p></p>
      <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
    </b-col>
</center>
</div>


<div v-else-if="user_found">
<b-container class="bv-example-row">
    <a :href="current_user.html_url" target="_blank"><b-img v-bind="mainProps"  v-bind:src=image_url rounded="circle" id="profile_img" alt="Circle image"></b-img></a>
  <p id="acc_name"><i class="fab fa-github-square"></i> <a :href="current_user.html_url" target="_blank">{{current_user.name}}</a></p>
  <b-row cols="1" cols-sm="2" cols-md="1" cols-lg="4" id="after_img">
    <b-col>Received: <i id="icons" class="fas fa-star"></i> {{star_count}}</b-col>
    <b-col>Public (repos): <i class="fab fa-github"></i> {{repos_length}}</b-col>
    <b-col>Joined: {{current_user.created_at.substr(0, 10)}}</b-col>
    <b-col>Last Updated: {{current_user.updated_at.substr(0, 10)}}</b-col>
  </b-row>
</b-container>

<p id="param_popular">Popular Repositories</p>
<b-container >
<b-list-group class="list">

  <b-list-group-item button v-for="(repo,index) in repos" :key="index">
   <a :href="repo.html_url" target="_blank"><p id="title"> {{repo.name}}</p></a>
   <p id="description" v-if="repo.description">{{repo.description}}</p>
   <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4" id='des_row'>
    <b-col><p id="repos_info"><i id="icons" class="fas fa-star"></i> {{repo.stargazers_count}}</p></b-col>
    <b-col> <p id="repos_info"><i id="icons" class="fas fa-code-branch"></i> {{repo.forks_count}}</p></b-col>
    <b-col><p id="repos_info">Created: {{repo.created_at.substr(0, 10)}}</p></b-col>
    <b-col><p id="repos_info">Updated: {{repo.updated_at.substr(0, 10)}}</p></b-col>
    <b-col></b-col>
    <b-col></b-col>
  </b-row>
</b-list-group-item>

<b-list-group-item button v-if="repos_length<1 || (star_count==0 && fork_count==0)">
<p>No Repositority Found</p>
</b-list-group-item>

</b-list-group>
</b-container>
</div>
<div v-else>
<center id="no_user">
            <h4> Not Found</h4>
            <h5>it seems you entered wrong username</h5>
</center>
</div>

</div>
</template>

<script>


export default {
  name: 'ProfileComponent',
   data() {
      return {
        current_user:'',
        search:this.$store.getters.userName,
        user_found:false,
        animation:true,
        image_url:'',
        repo_found:false,
        current_user_repos:'',
        repos_length:0,
        star_count:0,
        forks_count:0,
        repos:[],
        none_ropos:[],
        mainProps: {
           blank: false,
           blankColor: '#777',
            width: 200,
            height: 164,
            class: 'm1'
            // logo: require(this.current_user.avatar_url)
            }
      }
    },
  created: function(){

    fetch(`https://api.github.com/users/`+this.search)
    .then(async (data) => {
        if (data.ok) {
            data = await data.json()
            this.current_user=data
            this.image_url=this.current_user.avatar_url

    fetch(`https://api.github.com/users/${this.search}/repos?per_page=100`)
    .then(async (data) => {
        if (data.ok) {
            data = await data.json()
            this.current_user_repos=data
            this.repos_length=this.current_user_repos.length
            let count=0
            this.ropos=[]
            this.none_ropos=[]
            this.star_count=0
            this.fork_count=0
            this.user_found=true
        if(this.repos_length>0) {

            for(let i=0; i<this.repos_length; i++){
            //forks_count:
            count=count+this.current_user_repos[i].stargazers_count
            if(this.current_user_repos[i].stargazers_count >0
              && this.current_user_repos[i].stargazers_count >= this.current_user_repos[i].forks_count){
                 this.star_count= this.star_count+1;
                this.repos.push(this.current_user_repos[i])
            }

            else if(this.current_user_repos[i].forks_count >0 ){
                 this.fork_count= this.fork_count+1
                this.repos.push(this.current_user_repos[i])
            }

            this.none_ropos.push(this.current_user_repos[i])

            }
        this.star_count=count

        if( this.star_count> this.fork_count){
             sortArray(this.repos, "stargazers_count", -1); // Desc
        }else{
              sortArray(this.repos, "forks_count", -1); // Desc
        }
        }
        else
        {
           console.log('No Repository Found.')
        }

        }
        else{
          console.log('No user found')
        }
    }).catch(e => console.log('Connection error', e))

        }
        else{

          this.user_found=false
          this.animation=false

        }
    }).catch(e => console.log('Connection error', e))
  }

};

function sortArray(array, property, direction) {
    direction = direction || 1;
    array.sort(function compare(a, b) {
        let comparison = 0;
        if (a[property] > b[property]) {
            comparison = 1 * direction;
        } else if (a[property] < b[property]) {
            comparison = -1 * direction;
        }
        return comparison;
    });
    return array;
}

</script>


<style scoped>

body{
    color: white;
    font-family: Avenir;
}
#pro .list-group-item {
  background:#201e1e;
  color:white;
  border:1px solid #696969;
  margin-bottom:15px;
  font-family: Avenir;
  font-size:18px;
}
p{
    margin-top:20px;
    margin-bottom: 20px;
}
#after_img{
    margin-top: 15px;
}

#profile_img{
    margin-top:0px;
}
a{
  text-decoration: none;
}
#pro  #des_row{
  margin-top: 0px;
}
#pro #icons{
  opacity: 0.7;
  font-size: 0.9rem;
}

#no_user{
    margin-top: 200px;
    color:white;
    opacity: 0.5;
    margin-bottom:300px;
}
#param_popular{
  margin-top:55px;
  font-family: Avenir;
  font-size:19px;
}
#title{
  font-family: Avenir;
  font-size:22px;
}
#repos_info{

  font-family: Avenir;
  font-size:17px;
}
#acc_name{
  font-family: Avenir;
  font-size:19px;
  margin-bottom:22px;
}
#description{
    font-family: Avenir;
}
</style>


