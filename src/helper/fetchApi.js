import { ref } from 'vue';

export const fetchData = async (url) => {

    const data = ref(null)
    const error = ref(null)
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const menu = await response.json();
        data.value = menu;
        
    } catch (error) {
        error.value = error;
        console.log('there was a problem with the fetch operation');
    }
    return {data, error}
}
