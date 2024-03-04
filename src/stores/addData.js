import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAddDataStore = defineStore('addDataStore', () => {
  const dataMenu = ref([]);
  const menuData = ref(null);
  const lastIdMenu = ref(null);
  const formData = ref(null)

  async function fetchDatax() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      dataMenu.value = data;
      menuData.value = data.menu;
      const dataLength = menuData.value.length;
      lastIdMenu.value = menuData.value[dataLength - 1].id;

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  function setFormData(data) {
    formData.value = data;
  }

  async function submitFormData() {
    const iniData = {
      id: 40,
      name: 'Chicken Burger40',
      price: '$11540',
      detail: 'Ipsum ipsum clita erat amet dolor justo diam40',
      image: '/src/assets/img/menu-1.jpg',
    };
    try {
      const response = await fetch('http://localhost:3000/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value),
      });
      const data = await response.json();
      dataMenu.value.push(data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  async function updateData(updatedData) {
    try {
      const response = await fetch(`http://localhost:3000/menu/${updatedData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      // Optionally, handle the response data if needed
      const responseData = await response.json();
      console.log('Updated data:', responseData);
      return responseData; // Optionally, return the updated data
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; // Propagate the error to the caller
    }
  };

  return { 
    fetchDatax, 
    dataMenu, 
    menuData, 
    lastIdMenu, 
    submitFormData,
    formData,
    setFormData,
    updateData
 };
});