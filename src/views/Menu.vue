<script setup>
import logo1 from '../assets/img/oven-mitts.png';
import logo2 from '../assets/img/dough.png';
import logo3 from '../assets/img/butter.png';
import { ref, onMounted } from 'vue';
import ModalEdit from '../components/ModalEdit.vue';
import ModalAdd from '../components/ModalAdd.vue';

let fetchedData = ref(null);

const fetchApi = async () => {
  try {
    const getData = await fetch('http://localhost:3000/menu');
    if (!getData.ok) {
      throw new Error('Network was not ok!');
    }
    const data = await getData.json();
    fetchedData.value = data;
    
  } catch (err) {
    console.log(err); 
  }
  return {
    fetchedData,
  }
};

onMounted(fetchApi);

</script>

<template>
<div class="container">
  <div class="container">
      <div class="container text-center">
          <h4 class="text-warning mt-4">---Food menu---</h4>
          <h2 class="mt-1 mb-3" id="text-head">Most Popular Items</h2>
          <div class="row">
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-4 p-4">
                  <div class="row">
                    <div class="col-md-4">
                      <img :src="logo1" alt="Description of the image" class="image-logo">
                    </div>
                    <div class="col-md-8">
                      <p class="mb-0 pb-0 text-start">Popular</p>
                      <h4 class="text-start">Breakfast</h4>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-4">
                  <div class="row">
                    <div class="col-md-4">
                      <img :src="logo2" alt="Description of the image" class="image-logo">
                    </div>
                    <div class="col-md-8">
                      <p class="mb-0 pb-0 text-start">Special</p>
                      <h4 class="text-start">Lunch</h4>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-4">
                  <div class="row">
                    <div class="col-md-4">
                      <img :src="logo3" alt="Description of the image" class="image-logo">
                    </div>
                    <div class="col-md-8">
                      <p class="mb-0 pb-0 text-start">Lovely</p>
                      <h4 class="text-start">Dinner</h4>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-md-4">
                  <p class="mb-0 pb-0 text-start">Special</p>
                  <h4 class="text-start">Launch</h4>
                </div>
                <div class="col-md-4">
                  <p class="mb-0 pb-0 text-start">Lovely</p>
                  <h4 class="text-start">Dinner</h4>
                </div> -->
              </div>
            </div>
            <div class="col-md-4">
              
            </div>
          </div>
          <button type="button" class="btn btn-warning mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#addModal">Tambah Menu</button>
          <ModalAdd/>
      </div>
  </div>
  <div class="container pt-4">
    <div v-if="fetchedData">
      <div class="row ">
        <div class="col-md-6  pe-5" v-for="item in fetchedData" :key="item.id">
          <div class="row pb-3">
            <div class="col-md-3">
              <img :src="item.image" alt="Burger" id="image">
            </div>
            <div class="col-md-9">
              <div class="row">
                <h4 class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">{{ item.name }}</span>
                  <span class="text-warning fw-bold">{{ item.price }}</span>
                </h4>
                <hr class="mt-0 mb-0 ms-3">
                <p><i>{{ item.detail }}</i></p>
                <div class="pt-0 mt-0">
                  <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" :data-bs-target="'#exampleModal-' + item.id">Edit</button>
                </div>
                <ModalEdit :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
#text-head {
  color: #0f182a;
}
#image {
  width: 110%;
}
.image-logo {
  width : 250%
}
</style>../components/ModalEdit.vue
