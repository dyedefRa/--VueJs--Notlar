<template>
    <div> 
        <br>
         <router-link :to="userprofilineDon">Back to {{kullanici.name}}' Profile </router-link>
       <div v-for="post in posts">
           <hr>
 <p>POST ID :{{post.id}}</p>
        <p><b>{{post.title}}</b></p>
        <p>{{post.body}}</p>

       </div>
 <button>POST</button>
    </div>
</template>

<script>
export default {
  name: "UserPost",
  data() {
    return {
      posts: [],
      kullanici: []
    };
  },computed: {
          
            userprofilineDon() {
               return `/user/${this.kullanici.id}`

               
            }

        },
  
 
  created() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${
        this.$route.params.id
      }`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.posts = res;
      });

      //Kullanici bilgilerini linke verecektım o yuzden. adını almak cıın yaptım Bura onemsız
      fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.kullanici = res;
         
        });
  }
};
</script>

<style>
</style>
