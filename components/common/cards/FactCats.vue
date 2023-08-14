<template>
  <div class="card shadow-3xl" >
    <p v-if="loading"> Loading...</p>

    <div v-else class="flex flex-col">
      <span>🐈 고양이의 가벼운 사실</span>

      <a href="#" class="more-button">알아보기</a>

      <span class="ltr">
        <span class="me-2">#고양이</span>
        <span>#짧은 지식</span>
      </span> 
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const catFact = ref('');
    const loading = ref(true);

    onMounted(async () => {
      try {
        const response = await axios.get('https://meowfacts.herokuapp.com?lang=kor');
        catFact.value = response.data.data[0];
        loading.value = false;
      } catch (error) {
        console.error('Failed to fetch cat fact:', error);
        catFact.value = 'Failed to fetch cat fact. Please try again later.';
        loading.value = false;
      }
    });

    return {
      catFact,
      loading,
    };
  },
};
</script>

<style scoped>
  .card {
    overflow: auto;
    position: relative;
    width: calc((100% / 2) - 10px);
    height: 192px;
    padding: 25px 24px 0;
    margin-top: 36px;
    border-radius: 14px;
    background-color: #fff;
    
  }
</style>
