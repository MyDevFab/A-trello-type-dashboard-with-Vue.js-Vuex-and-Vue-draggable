<template>
<div class="about">
    <h1>This is an about page</h1>
  <ul :key="index" v-for="(post, index) in posts">

      <li>{{post.title.rendered}}</li>

      <li>{{post.content.rendered}}</li>

      <li>{{post.id}}</li>

        <label>Update form</label>
            <input type="text" name="title" v-model="title">
            <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
        <button v-on:click="updatePost(post.id)">Update</button>
        <button v-on:click="deletePost(post.id)">Delete</button>
     
    </ul>
  </div>

  
  <label>Create form</label>
    <input type="text" name="title" v-model="title">
    <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
    <button v-on:click="createPost">Click ici</button>

</template>

<script>
var WPAPI = require( 'wpapi' );
export default {
  data() {
    return {
      posts: [],
      title: "",
      content: "",
      }
    },
  methods: {

    updatePost(id) {
      var wp = new WPAPI({
        endpoint: "http://localhost/blog/index.php/wp-json",
   
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
        });
       
      wp.posts().id( id ).update({
        title: this.title,
        content: this.content,
        
        status: 'publish'
      }).then(function (response) {
        location.reload(true);
        console.log(response)
      })
    },

    deletePost(id) {
      var wp = new WPAPI({
        endpoint: "http://localhost/blog/index.php/wp-json",
   
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
      });
      
      wp.posts().id( id ).delete()
      .then(function () {
        location.reload(true);
      })
    },
  }
}
</script>