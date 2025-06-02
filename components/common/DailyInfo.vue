<template>
    <h3 :style="backgroundStyle" class="title">
      <strong>{{ month }}월 {{ day }}일에 전하는</strong>
      <span>라이브러리 이야기입니다</span>
    </h3>
</template>



<script>
import { ref } from 'vue';

export default {
  setup() {
    const today = ref(new Date());
    const month = today.value.getMonth() + 1;
    const day = today.value.getDate();
    const backgroundStyle = ref({
      backgroundImage: `url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/calendar/light/ico_date${day}.gif")`,
    });

    return { month, day,backgroundStyle };
  },

};
</script>

<style scoped>
  h3.title {
    padding-top: 96px;
    background-repeat: no-repeat;
    background-position: 0 96px;
    background-size: 132px;
    font-size: 46px;
    line-height: 66px;
    letter-spacing: -1px;
  }

  strong {
    display: block;
    padding-left: 144px;
    font-weight: 700;
  }

  span {
    padding-left: 144px;
  }
</style>