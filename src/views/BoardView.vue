<template>
<main class="content">
    <HeaderComp/>
    <div class='list-footer' v-on:click="toggleModale">
      <img src="../assets/add_card.png" width="50" height="50" alt="Create a card"/>   <!-- CHANGED ICON ANS SIZE-->
      </div>
    <!-- <div class="container p-0 container"> -->
        <div class="row">
            <!-- <div class="col-12 col-lg-6 col-xl-3 fond"> -->
  <div class="list-container">
    <section class="list-wrapper">
      <draggable :options="{ group: 'lists' }" group="lists" ghostClass="ghost" class="list-draggable">
        <div class="list-card" v-for="(category, index) in categories" :key="index">
          <label class="list-header">
            <div>{{ category.name }}</div>
             <div @click="deleteCategory(category.id)" class="card-link"><ButtonDeleteList/></div>
            </label>
            <div class="list-content">
              <CardsList :categoryId="category.id" :categoryName="category.name" />
              </div>
              <!-- <div class='list-footer' v-on:click="toggleModale"><img src="../assets/publier.png" width="25" height="30" alt="Delete"/> -->
              <CardCreate :reveal="reveal" :toggleModale="toggleModale"/>
          </div>
        </draggable>
      <input type="text" class="input-new-list" placeholder="Type a new list name + Enter" v-model="Name" @keyup.enter="createCategory" /><!-- CHANGED PLACEHOLDER TEXT-->
    </section>
  </div>
  </div>
  </main>
</template>

<script>
var WPAPI = require( 'wpapi' );
import { VueDraggableNext } from "vue-draggable-next";
import CardsList from "../components/CardsList.vue";
import CardCreate from "../components/CardsCreate.vue";
import HeaderComp from "../components/HeaderComp.vue";
import ButtonDeleteList from "../components/ButtonDeleteList.vue";

export default {
    data() {
    return {
    categories: [],
    reveal: false ,
    }
  },
  mounted(){
  this.getCategories();

  
  },
  methods: {
  
    toggleModale() {
      this.reveal = !this.reveal;
    },

    async getCategories() {
      var wp = new WPAPI({
       endpoint: "http://localhost/blog/index.php/wp-json",
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
      });
      this.categories = await wp.categories().order('asc').orderby('id');
    },

    createCategory() {
         var wp = new WPAPI({
        endpoint: "http://localhost/blog/index.php/wp-json",
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
        });
        wp.categories().create({
          name: this.Name,
        })
        .then(function() {
        location.reload(true);
        })
    },
    deleteCategory(id) {
    var wp = new WPAPI({
    endpoint: "http://localhost/blog/index.php/wp-json",    
    username: 'fabienne2',
    password: 'Mysqlp3rsO2'
    });
    wp.categories().id( id ).param("force", true).delete()
    .then(function () {
    location.reload(true);
    })
    },
  },
  components: {
    draggable: VueDraggableNext,
    CardsList,
    CardCreate,
    HeaderComp,
    ButtonDeleteList
  },
}
</script>

<style scoped>

.content {

    margin-left: 5%;
    padding: 0px;
    height: 100%;
    width: 100%;
    

}

.column {

  display: flex;
  flex: wrap;
  flex-direction: column;
  justify-content: space-between;

}
.list-container {

  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  border: 1px;
  z-index: 10;
}

.list-wrapper {

  position: relative;
  display: flex;
  flex: wrap;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 100vw;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  
}

.ghost {

  opacity: 0.5;
}

.list-draggable {

  display: flex;
  flex: wrap;
  flex-direction: row;
  gap: 20px;
  
}
/*CHANGED CSS CLASS*/
.input-new-list {
  display: flex;
  flex: wrap;
  flex-direction: row;
  text-align: center;
  margin: 20px;
  height: 30px;
  padding: 27px 3px 27px 3px;
  border-radius: 10px;
  background-color: rgb(215, 245, 245, 0.2);
  min-width: 260px;
  border-style: dotted;
  border-color: green;
  border-width: 3px;
  font-family: 'Comfortaa', cursive, arial, sans-serif;
  color: white;
  font-size: 1.3em;
   cursor: pointer;
}
/*CHANGED CSS CLASS*/
.input-new-list::placeholder {

  color: white;
  font-size: 0.9em;
  padding: 0px;
  font-weight: 700;
 
}

.list-card {
  position: relative;
  display: flex;
  flex: wrap;
  flex-direction: column;
  min-width: 300px;
  height: auto;
  background-color: transparent;
  margin-top: 20px;
  
}

.list-header {
  position: relative;
  display: flex;
  flex: wrap;
  justify-content: space-around;
  word-break: break-all;
  align-items: center;
  text-align: center;
  min-width: 280px;
  max-width: 280px;
  line-height: 50px;
  padding: 5px 10px 0px 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  color: whitesmoke;
  user-select: none;
  border-style: dotted;
  border-color: whitesmoke;
  font-family: 'Comfortaa', cursive, arial, sans-serif;
  font-size: 1.3em;
  font-weight: 700;
}

img {

  display: flex;
  align-items: center;
}

.list-content {
  /* overflow-y: scroll; */
  position: relative;
  display: flex;
  flex: wrap;
  flex-direction: column;
  min-width: 280px;
  max-width: 280px;
  height: auto;
  background-color: transparent;
  padding: 10px 10px 0px 10px;
  box-shadow: 1.5px 1.5px 1.5px 0.1px rgba(255, 255, 255, 0.1);
  color: rgba(24, 43, 77, 1);
  border-style: dotted;
  border-color: whitesmoke;
   font-family: 'Comfortaa', cursive, arial, sans-serif;
  font-size: 1em;
  font-weight: 700;
}

  /* CHANGED CSS CLASS */
.list-footer {
  position: relative;
  display: flex;
  flex: wrap;
  align-items: center;
  justify-content: flex-start;
  /* width: 80px; */
  /* margin-top: 10px; */
  padding: 5px 0px 25px 0px;
  /* background-color: rgba(235, 236, 240, 1); */
  /* border-radius: 0px 0px 10px 10px; */
  background-color: transparent;
  /* padding: 10px 0px 10px 0px; */
  /* border-style: dotted;
  border-color: whitesmoke; */
  
}

.list-footer img {

  cursor: pointer;
 
}

/* .list-footer img:hover {

  border-style: dotted;
  border-color: whitesmoke;
  border-width: 2px;
  padding: 0px;
} */

  /* ADDED CSS CLASS */
.card-link {

  cursor: pointer;
  border-style: hidden;
  outline: none;
 
}

 /* ADDED CSS CLASS */
.card-link:hover {

  border-style: hidden;
  outline: none;
 
}

/* .card-link img:hover {

  border-style: dotted;
  border-color: whitesmoke;
  border-width: 2px;
  padding: 0px;
}  */
</style>
