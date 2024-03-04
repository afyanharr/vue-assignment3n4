<script setup>
import restaurant from '../assets/img/restaurant.jpg';
import freshBurger from '../assets/img/bigBurger.png';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToBook = () => {
  router.push('/Book');
  
  return {
    navigateToBook
  }
};
</script>

<template>
    <div class="container background-layer-1" :style="{ backgroundImage: `url(${restaurant})` }">
        <div class="row p-2 background-main mt-3 ">
            <div class="col-md-6">
                <div class="row mt-5">
                    <h1 class="text-light">Enjoy Our</h1>
                    <h1 class="text-light">Delicious Meal</h1>
                    <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt dolorum ducimus dolor rem quibusdam assumenda!</p>
                    <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo maxime, saepe dolorum nostrum at voluptatibus.</p>
                    <p class="text-light">erat amet</p>
                </div>
                <div class="col-md-6">
                    <button type="submit" v-on:click="navigateToBook" class="btn btn-warning btn-lg btn-block text-light">Book a table</button>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center mt-3">
                <img :src="freshBurger" alt="Image" id="image-menu">
            </div>
        </div>
    </div>
</template>



<style scoped>
.col-md-6 .btn {
    width: 100%;
}

.background-layer-1 {

    height: 500px;
    background-image: url(${restaurant});
    background: rgba(0,0,0,0.7);
}

#image-menu {
    width: 65%;
    height: auto;
}
</style>