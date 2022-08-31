<template>
<div>
    <router-link :to="{ name: 'CardsDetails'}">
        <img src="../assets/view.png" width="20" height="20" alt="View"/>
    </router-link>
<!-- <router-link :to="{ name: 'CardsDetails'}"><img src="../assets/view.png" width="20" height="20" alt="View"/></router-link> -->
    <!-- <a href="../views/CardsDetails.vue"><img src="../assets/view.png" width="20" height="20" alt="View"/></a> 
     params: { id: card.id }
    -->
    </div>
</template>

<script>

export default {

    name: 'ButtonView'
  

}
</script>

<style scoped>

  

</style>