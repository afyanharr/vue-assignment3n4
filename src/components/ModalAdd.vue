<script setup>
import { ref } from 'vue'
import { useAddDataStore } from '../stores/addData';
import { useRouter } from 'vue-router';
const formData = ref({name: '', price: '', description: '', image: ''})
const store = useAddDataStore();
const router = useRouter();

const submitForm = () => {
    // Check if any of the form fields are empty
    if (!formData.value.name || !formData.value.price || !formData.value.description || !formData.value.image) {
        alert('Harap isi semua data');
        return; // Exit the function without submitting the form
    }
    store.setFormData(formData.value)
    store.submitFormData()
    alert('Data saved successfully!');
    router.push('/menu'); 
    location.reload(); 
}

</script>

<template>
    <div class="modal fade text-start" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-bold" id="exampleModalLabel">Tambah Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="menuPrice" class="form-label">Menu Name</label>
                                    <input type="text" class="form-control" id="menuName" aria-describedby="menuName" v-model="formData.name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="menuPrice" class="form-label">Menu Price</label>
                                    <input type="text" class="form-control" id="menuPrice" aria-describedby="menuPrice" v-model="formData.price">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="description" class="form-label">Description</label>
                                <input type="textarea" class="form-control" id="description" aria-describedby="description" v-model="formData.description">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="imageurl" class="form-label">Image url</label>
                                <input type="text" class="form-control" id="imageurl" aria-describedby="imageurl" placeholder="Recomended using /src/assets/img/menu-<1-8>.jpg" v-model="formData.image">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-warning" @click="submitForm">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

