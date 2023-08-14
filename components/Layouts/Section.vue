<template>
  <section class="layout">
    <slot  />
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .layout {
    display: flex;
  }

  .wip-left-lage,
  .wip-left-small,
  .wip-right-small,
  .wip-right-lage {
    width: calc(100% / 2);
    padding: 0 20px;
  }

  .wip-left-small,
  .wip-right-small {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
  }
  

  .wip-left-lage-card,
  .wip-right-lage-card {
    width: 100%;
    overflow-y: auto;
    height: 620px;
    padding: 25px 24px 0;
    margin-top: 36px;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
}

.wip-left-small-card,
.wip-right-small-card {
  overflow-y: auto;
    position: relative;
    width: calc((100% / 2) - 10px);
    height: 320px;
    padding: 25px 24px 0;
    margin-top: 36px;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
}

.wip-middle-card {
    width: 100%;
    overflow-y: auto;
    height: 360px;
    padding: 25px 24px 0;
    margin-top: 36px;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
}

</style>