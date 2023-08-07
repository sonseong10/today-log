<script setup lang="ts">
defineProps(['error'])
const handleError = () => clearError({ redirect: '/' })


</script>

<template>
  <div class="mx-auto container">
    <p v-html="error.statusCode"></p>
    <p v-html="error.message"></p>
    <button @click="handleError">Clear error</button>
  </div>
</template>