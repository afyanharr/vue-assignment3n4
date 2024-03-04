<script setup>
import { ref, onMounted } from 'vue';
import imageBackground from '../assets/img/person-dinner.jpg';
import ModalSuccess from '../components/ModalSuccess.vue';

let fetchedData = ref(null);

const fetchApi = async () => {
    try {
        const getData = await fetch('http://localhost:3000/bookings')
    if (!getData.ok) {
        throw new Error('Network was not ok!') 
    }
    const data = await getData.json()
    fetchedData.value = data

    } catch (err) {
        console.log(err)    
    }
    return {
      imageBackground,
      fetchedData,
    };
};

onMounted(fetchApi);

</script>

<template>
    <div class="container background-layer-1">
        <div class="row p-2 background-main mt-3 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">
            <div class="col-md-6 mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">
                <img :src="imageBackground" alt="Description of the image" class="mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0" id="image">
            </div>
            <div class="col-md-6">
                <h2 class="text-warning pt-5">Reservation -----</h2>
                <h1 class="text-light pb-4">Book a table online</h1>
                <div v-if="fetchedData">
                    <form>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="name" class="form-control" id="exampleFormControlInput1" :value="fetchedData[0].name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" :value="fetchedData[0].email">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Date and time" v-model="fetchedData[0].booking_date">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select class="form-select" id="exampleFormControlSelect1" v-model="fetchedData[0].people">
                                        <option disabled selected>No of people</option>
                                        <option :value="1">1</option>
                                        <option :value="2">2</option>
                                        <option :value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="row">
                    <div class="col-md-12 text-center">
                        <button type="submit" class="btn btn-warning btn-lg btn-block text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                    </div>
                </div>

                <ModalSuccess/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col-md-6 .btn {
    width: 100%;
}

.background-main {
    background-color: #0f182a;
}

#image {
    width: auto; /* Set the desired width */
    height: 500px; /* Allow the height to adjust proportionally */
}
</style>