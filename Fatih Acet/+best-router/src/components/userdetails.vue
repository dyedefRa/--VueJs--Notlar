<template>
  <div>
       <!-- <p>ID :{{objem.id}} </p> -->
   <p>NAME :<b>{{objem.name}}</b> </p>
   <p>USERNAME :<b>{{objem.username}}</b></p>
    <p>EMAIL :<b>{{objem.email}}</b> </p>
  
   <p>PHONE :<b>{{objem.phone}}</b></p>

  <router-link :to=postUrl>{{objem.name}}'s Posts</router-link> &nbsp;  &nbsp; 
   <router-link :to=nextUser>Next User's Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "UserDetails",

  data() {
    return {
      objem: []
    };
  },
  computed: {
    postUrl() {
      return `/user/${this.objem.id}/posts`;
    },
    nextUser() {
      return `/user/${this.objem.id + 1}`;
    }
  },
  watch: {
    $route: "yenidenyukle"
  },
  methods: {
    yenidenyukle() {
      this.goFetch();
    },
    goFetch() {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.objem = res;
        });
    }
  },
  created() {
    this.goFetch();
  }
};
</script>

<style>
</style>
