<template>
  <draggable :options="{ group: 'cards' }" group="cards" ghostClass="ghost">
   <span class="element-card" v-for="(post, index) in posts" :key="index">
      {{ post.title.rendered }}
      <router-link :to="{ name: 'CardsDetails', params:{ id: post.id }}">
        <img src="../assets/view.png" width="20" height="20" alt="View"/>
      </router-link>
      <!-- <ButtonView/> -->
    </span>
      
 
  </draggable>
</template>
<script>
var WPAPI = require( 'wpapi' )
import { VueDraggableNext } from "vue-draggable-next";
// import ButtonView from '../components/ButtonView.vue'

export default {

  name:'CardsList',
  props: ["categoryId", "categoryName"],
  components: {
    draggable: VueDraggableNext,
      // ButtonView
  },

  data() {
    return {
    posts: [],
    // categories: []
    }
  },
  mounted(){
    this.getPosts();
  },
  methods: {
    async getPosts() {
       var wp = new WPAPI({
        endpoint: "http://localhost/blog/index.php/wp-json",
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
        });

        let posts = await wp.posts().get();
        this.posts = posts?.filter((post)=> {
      if (post.categories?.toString() == this.categoryId) { 
        return true;
      } else {
        return false;
      }})   
    },
  },
  
}
</script>

<style>
.element-card {
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: rgb(215, 245, 245, 0.2);
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  min-height: 30px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: left;
}
</style>