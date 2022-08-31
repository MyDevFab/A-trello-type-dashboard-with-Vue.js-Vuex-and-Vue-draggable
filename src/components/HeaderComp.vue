<template>
<div class='row'>
  <h1 class='h1 mb-1 title"'>Let's prepare holidays</h1>
  <div class='group'>
  <h2 class='h3 mb-1 group-name'>Les Meilleurs</h2>
 
            <img src="../assets/lamabebe.jpg" width="50" height="50" class="rounded-circle" alt="Avatar">
            <img src="../assets/chaton2.png" width="50" height="50" class="rounded-circle" alt="Avatar">
            <img src="../assets/quokka.jpg" width="50" height="50" class="rounded-circle" alt="Avatar">
        
        </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>


.row {

  margin: 30px 150px 10px -55px; 
  padding: 50px;
  display: flex;
  flex: wrap;
  justify-content: space-between;
  align-items: center;
  color: whitesmoke;
  font-family: 'Comfortaa', cursive, arial, sans-serif;
  font-weight: 700;
/* font-family: 'Ewert', cursive, arial, sans-serif;*/
/* font-family: 'Seaweed Script', cursive, arial, sans-serif; */

}

h1 {
padding: 1%;
border-style:dotted;
border-left-style: hidden;
border-right-style: hidden;

}

img {

  border: 2px solid #ddd;
  border-radius: 10px;

}
</style>