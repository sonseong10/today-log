<template>
  <div class="container mx-auto" >
    <CommonDailyInfo />

    <LayoutsSection >
      <div class="wip-left-lage">
        <div class="wip-left-lage-card"></div>
      </div>
      <div class="wip-right-small">
        <CommonCardsFactCats  />
        <CommonCardsFactDogs />
        <CommonCardsFactCats  />
        <CommonCardsFactDogs />
        <div class="wip-right-small-card"></div>
        <div class="wip-right-small-card"></div>
      </div>
    </LayoutsSection>

    <LayoutsSection >
      <CommonCardsPublicize/>
    </LayoutsSection>

    <LayoutsSection >
      <div class="wip-left-small">
        <CommonCardsFactCats  />
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <div class="wip-left-small-card"></div>
        <CommonCardsFactDogs />
      </div>
      <div class="wip-right-lage">
        <div class="wip-right-lage-card">
        </div>
      </div>
    </LayoutsSection>

    <LayoutsSection>
      <div class="wip-left-lage">
        <div class="wip-middle-card"></div>
      </div>

      <div class="wip-right-lage">
        <div class="wip-middle-card"></div>
      </div>
    </LayoutsSection>

    <div>
      <button>모든 소식보기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default"
  })
</script>