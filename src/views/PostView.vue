<template>
    <div class="card mb-3 bg-light">
    <div class="card-body p-3">
            <p class="card-title-text font-weight-bold">Nam pretium turpis</p>
        <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
        <div class="float-right mt-n1">
            <img src="../assets/chaton.png" width="32" height="32" class="rounded-circle" alt="Avatar">
        </div>
       <ButtonView/>
    </div>
    </div>
</template>

<script>
import ButtonView from '../components/ButtonView.vue'

export default {

    name: 'PostView',

    components: {

    ButtonView

    }

}
</script>

<style>

.card {

    
    box-shadow: 2px 10px 6px #444; 
   
    
}


</style>