<template>
  <div class="container mx-auto" >
    <CommonDailyInfo />

    <LayoutsSection >
      <CommonCardsFactCats  />
      <CommonCardsFactDogs />
    </LayoutsSection>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default"
  })
</script>