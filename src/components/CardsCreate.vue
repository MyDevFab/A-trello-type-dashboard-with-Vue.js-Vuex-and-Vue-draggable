<template>
<div class="bloc-modale" v-if="reveal">
  <div class="overlay"></div>
    <div class="modale">
        <div><p><img src="../assets/chaton2.png" width="50" height="50" class="rounded-circle" alt="Avatar"></p></div>
    <div class='category-name'>
      <!-- {{categoryName}} -->
    </div>
      <button class="button-modale" v-on:click="toggleModale">X</button>
        <div>
          <input type="text" name="title" id='title-content' placeholder='Action' v-model='title'>
        </div>
         <div class='select-categories'>
          <p><label for="category-select">Choose a list name</label></p> 
           <select name="category" id="category" v-model='categories'> 
            <option value="none" selected disabled >Select an Option</option>
            <option id='category-menu'  v-for="(allCategory,index) in allCategories" :key="index" :value="allCategory.id">{{allCategory.name}}</option>
           </select>
        </div>
        <div>
          <textarea name='content' id='card-content' rows="5" cols="30" placeholder='Details' v-model='content'></textarea>
        </div>
        <button id='button-save' @click="createPost"><img src="../assets/enregistrer.png" width="30" height="30" alt="Save"/></button>
    </div>
</div>
</template>

<script>

var WPAPI = require( 'wpapi' );

export default {
  name: "CardsCreate",
  props: ["reveal", "toggleModale"],
  data() {
    return {
        allCategories: [],
    }
  },
  mounted(){
  this.getCategories()
  },
  methods: {

      async getCategories() {
      const res = await fetch("http://localhost/blog/index.php/wp-json/wp/v2/categories");
      const data = await res.json();
      this.allCategories = data ;
      },

    createPost() {
      if (this.title !== "") {
        var wp = new WPAPI({
        endpoint: "http://localhost/blog/index.php/wp-json",
   
        username: 'fabienne2',
        password: 'Mysqlp3rsO2'
        });
        wp.posts().create({
      
        title: this.title,
        content: this.content,
        categories: this.categories,
        
        status: 'publish'
        })
        .then(function() {
          // this.postTitle = "";
           location.reload(true);
        })
      }
    },
  }
};
</script>

<style scoped>

.bloc-modale {
  
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
    font-family: 'Comfortaa', 'cursive', 'arial', 'sans-serif';
}

.overlay {

  background-image: url('../assets/wallpaper_sea.jpg');
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

}

.modale {

 background-color: rgba(255, 255, 255, 0.10);
  color: #333;
  padding: 30px;
  position: fixed;
  color: rgba(24, 43, 77, 1);
  border-style: dotted;
  border-width: 5px;
  border-color: whitesmoke;
  font-family: 'Comfortaa', 'cursive', 'arial', 'sans-serif';
  color: whitesmoke;
  font-size: 1.3em;
  font-weight: 700;
}

.button-modale {

  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  width: 30px;
  height: 34px;
}

#button-save {

   background: transparent;
   border-style: hidden;
}

#button-save:hover {

   background: transparent;
   border-style: hidden;
   cursor:pointer;
    border-style: dotted;
}

.category-select {

    font-family: 'Comfortaa', 'cursive', 'arial', 'sans-serif';


}
.category-name {


  margin-bottom: 30px;
  font-size: 1.3em;
  font-weight: 700;
  font-family: 'Comfortaa', 'cursive', 'arial', 'sans-serif';
 
}

#category-menu {

   font-family: 'Comfortaa', 'cursive', 'arial', 'sans-serif';
   background-color: rgb(131, 174, 209);
   color: whitesmoke;
   padding: 3px;
   text-align: center;

}


#category {

  background-color: rgba(255, 255, 255, 0.50);
  padding: 7px;
  border-style: dotted;
}

#title-content {

  background-color: rgba(255, 255, 255, 0.50);
  margin-bottom: 30px;
  padding: 10px;
  text-align: center;
  border-style: dotted;
  border-width: 5px;
  outline: none;

}

#card-content {

 background-color: rgba(255, 255, 255, 0.50);
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 10px;
  text-align: center;
  border-style: dotted;
  border-width: 5px;
  outline: none;

}



</style>





<!--<template>
  <input
    class="input-card" type="text" placeholder="Create a Card"/>
</template>

<script>


export default {

  name:'CardsCreate',
  props: ["listId"],


  }

</script>

<style>
.input-card {
  position: relative;
 background-color: rgb(215, 245, 245, 0.2);
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border-style: hidden;
  padding: 10px;
  margin-top: 8px;
  word-break: break-all;
  font-size: 16px;
  color: green;
  font-weight: 700;
   cursor: pointer;
}
</style>
-->