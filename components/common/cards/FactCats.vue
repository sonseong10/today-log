<template>
  <div class="item">
    <p v-if="loading"> Loading...</p>
    <div v-else class="flex flex-col">
      <span></span>
      <strong>{{ catFact }}</strong>
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
        const response = await axios.get('https://meowfacts.herokuapp.com');
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
  .item {
    overflow: hidden;
    position: relative;
    width: 297px;
    height: 192px;
    padding: 25px 24px 0;
    margin-top: 36px;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
    
  }
</style>
