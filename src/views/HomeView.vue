<template>
  <main class="content">
          <HeaderComp/>
    <div class="container p-0 container">
        <div class="row">
            <div class="col-12 col-lg-6 col-xl-3 fond">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">TO DO</h5>
                    </div>
                    <div class="card-body">

                        <PostView/>
                        <PostView/>

                        <div class='test'>
                            <ButtonAddPost/>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 fond">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">IN PROGRESS</h5>
                    </div>
                    <div class="card-body">

                        <PostView/>
                        <PostView/>
                        <PostView/>
                        <PostView/>

                        <div class='test'>
                            <ButtonAddPost/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 fond">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">ON HOLD</h5>
                    </div>
                    <div class="card-body">

                        <PostView/>
                        <PostView/>
                        <PostView/>

                        <div class='test'>
                            <ButtonAddPost/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 fond">
                <div class="card">
                    <div class="card-body">
                        <div class='action'>
                        <a href="#" class="btn btn-block action">ADD NEW LIST</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import PostView from './PostView.vue'
import ButtonAddPost from '../components/ButtonAddPost.vue'

export default {
  name: 'HomeView',

  components: {
      
      HeaderComp,
      PostView,
      ButtonAddPost

  }
}
</script>

<style scoped>

html, body {

    margin-top: 0px;
    padding: 0px;

}

.content {

    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    

}

.card {

    background-color: transparent;
}

/* .fond {

    background-image: url('../assets/paille.jpg');
} */

.card-body {

    font-family: 'Seaweed Script', cursive, arial, sans-serif;
    font-size: 1.2em;
    /* background-color: rgb(254, 249, 231 );
    background-image: url('../assets/paille.jpg'); */
}

.action {

    font-family: 'Comfortaa', cursive, arial, sans-serif;
    font-size: 1.2em;
    background-color: transparent;
    color: white;
    font-weight: 700;
    cursor: pointer;
}

.test {

    font-family: 'Comfortaa', cursive, arial, sans-serif;
    font-size: 1.2em;
    background-color: white;
    color: rgb(128, 194, 29);
    font-weight: 700;
    cursor: pointer;
}

/* .card-body a {

font-family: 'Comfortaa', cursive, arial, sans-serif;
    font-size: 1.2em;
    background-color: rgb(42, 77, 173);

} */


.card-header {
    
    color: white;
    background-color: transparent;
    border-style:dotted;
    border-color: whitesmoke;
 
  
}

.card-title {
    padding: .75rem;
    margin: 3% auto;
    font-family: 'Comfortaa', cursive, arial, sans-serif;
    font-weight: 700;
    font-size: 1.6em;
   
}

</style>