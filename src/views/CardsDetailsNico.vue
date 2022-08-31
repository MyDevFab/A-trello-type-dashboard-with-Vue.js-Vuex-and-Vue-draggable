<template>
<main class="content">
   <HeaderComp/>
    <div class="container p-0 container">
      <div class="card-body">
        <div class="card">
         <div class="card-text">
           <div><p><img src="../assets/chaton.png" width="50" height="50" class="rounded-circle" alt="Avatar"></p></div>
          <div v-if="!editing">
            <h4 class="card-title" @click="enableEditing">{{title}}</h4>
            <h5 v-html="content" class="card-content" type="text" cols="20" rows="4" @click="enableEditing"></h5>
          </div>
          <div v-if="editing">
            <input id="create-text" type="text" cols="20" rows="4" v-model="title">
            <textarea id="create-text" type="text" cols="20" rows="4" v-model="content"></textarea> 
            <button @click="disableEditing">Cancel</button>
          </div>
          </div>
         <div>
          <button @click="enableEditing" class="card-link"><img src="../assets/editer.png" width="30" height="30" alt="Edit"/></button>
          <button @click="deletePost(id)" class="card-link"><img src="../assets/supprimer.png" width="30" height="30" alt="Delete"/></button>
          <button @click="back" class="card-link"><img src="../assets/home.png" width="30" height="30" alt="Home"/></button>
        </div>
      </div>
    </div>
     </div>
  </main>
</template>

<script>
var WPAPI = require( 'wpapi' );
import HeaderComp from "../components/HeaderComp.vue";

export default {

  name:'CardsDetails',
  data() {
    return {
      post: [],
      title:"",
      content:"",
      data:"",
    }
    
  },
  props: ['id'],

  components: {
  HeaderComp

  },
  mounted() {
    this.getPost(this.id);
  },

  methods: {
    
  async getPost(id) {
    var wp = new WPAPI({
    endpoint: "http://localhost:8888/wordpress/wp-json",
    username: 'nico',
    password: 'nicolas82'
    });
    this.data = await wp.posts().id( id ).get();
    this.title = this.data.title.rendered
    this.content = this.data.content.rendered
    console.log(this.data.content.rendered)
    console.log(this.data)
    },

    enableEditing(){
      this.editing = true 
      this.title = this.data.title.rendered + " "
      this.content = this.data.content.rendered + " "
       
    },
  

     disableEditing(){
      this.title = this.data.title.rendered;
      this.content = this.data.title.rendered;
      this.editing = false;
    },

      saveEdit(){

        var wp = new WPAPI({
        endpoint: "http://localhost:8888/wordpress/wp-json",
        username: 'nico',
        password: 'nicolas82'
        });

        wp.posts().id(this.id).update({
        title: this.title,
        content: this.content,
        status: 'publish',
        })
        this.disableEditing();
        this.$router.push("/");
      },

    deletePost(id) {
      var wp = new WPAPI({
      endpoint: "http://localhost:8888/wordpress/wp-json",
      username: 'nico',
      password: 'nicolas82'
    });
    wp.posts().id(id).delete()
      this.$router.push("/");
    },
    back() {
      this.$router.push("/");
    }
  }
}

</script>

<style>
.content {

    margin-left: 5%;
    padding: 0px;
    height: 100%;
    width: 100%;
    
}

.container {

  display: flex;
  background-repeat: no-repeat;
  background-size: 120%;
  justify-content:space-around;

}


#create-title
{
    display:flex;
    text-align: center;
    justify-content: center;
    margin: 0px auto;
    padding: 10px;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style:hidden;
    border-left-style: hidden;
}

#create-text
{
    display:flex;
    text-align: center;
    flex: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    color:  black;
    border-width: 1px;
    border-color: whitesmoke;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style: hidden;
    border-left-style: hidden;
    outline: none;
}

.column {

  display: flex;
  flex: wrap;
  flex-direction: column;

}

.card {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
   display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 400px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.10);
  padding: 10px 10px 25px 10px;
  box-shadow: 1.5px 1.5px 1.5px 0.1px rgba(255, 255, 255, 0.1);
  color: rgba(24, 43, 77, 1);
  border-style: dotted;
  border-color: whitesmoke;
  font-family: 'Comfortaa', cursive, arial, sans-serif;
  font-size: 1em;
  font-weight: 700;

}

.card-title {
    
  color: black;
  font-size: 1.5rem;
  padding: 10px;
  margin-bottom: 10px;
}

.card-content {
    
  color: black;
  font-size: 1.3rem;
  padding: 10px;
  margin-bottom: 10px;
}


.card-text {
    
  
  font-size: 1.5rem;
  padding: 10px;
  margin-bottom: 10px;


}

.card-body {

  justify-content: stretch;
   flex: wrap;
   flex-direction: column;
   margin: 10%;
}

.card-link {

  padding: 7px 0px 7px 0px;
  cursor: pointer;
  background-color: transparent;
  border-style: hidden;
  width: 45px;
  height: 45px;
 
}

.card-link:hover {

  padding: 7px 0px 7px 0px;
  border-style:dashed;
  border-color: white;
  border-width: 0.12rem;
  cursor: pointer;
 
}
</style>
