<script setup>
import { defineProps, ref } from 'vue';
import { useAddDataStore } from '../stores/addData';
const store = useAddDataStore();
const props = defineProps({
  item: Object
});

const editForm = () => {
  const updatedData = {
    id: props.item.id !== '' ? props.item.id : Math.floor(Math.random()),
    name: props.item.name !== '' ? props.item.name : 'Burger',
    price: props.item.price !== '' ? props.item.price : "$115",
    detail: props.item.detail !== '' ? props.item.detail : "Ipsum ipsum clita erat amet dolor justo diam",
    image: props.item.image !== '' ? props.item.image : "/src/assets/img/menu-2.jpg"
  };
  store.updateData(updatedData)
  alert('Data saved successfully!'); 
  location.reload(); 
}

</script>

<template>
    <div class="modal fade" :id="'exampleModal-' + item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>    
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="exampleModalLabel">Edit Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="menuName" class="form-label">Menu Name</label>
                                    <input type="text" class="form-control" id="menuName" aria-describedby="menuName" v-model="item.name" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="menuPrice" class="form-label">Menu Price</label>
                                    <input type="text" class="form-control" id="menuPrice" aria-describedby="menuPrice" v-model="item.price" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="description" class="form-label">Description</label>
                                <input type="text" class="form-control" id="description" aria-describedby="description" v-model="item.detail" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="image" class="form-label">Image URL</label>
                                <input type="text" class="form-control" id="image" aria-describedby="imageurl" v-model="item.image" required>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-12">
                                <button type="button" class="btn btn-warning" @click="editForm" :disabled="!item.name || !item.price || !item.detail || !item.image">Save changes</button>
                            </div>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

