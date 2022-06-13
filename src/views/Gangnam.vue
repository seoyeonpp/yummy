<template>
  <div class="gangnam">
    <div id="wrap">
      <div class="container sub-page">
        <router-link to="/" class="go-main">메인으로가기</router-link>
        <h1>강남점심맛집</h1>
        <KakaoMap />
      </div>
    </div>
  </div>
</template>

<script>
import KakaoMap from '../components/KakaoMap.vue';
export default {
  name: "App",
  components: {
    KakaoMap
  },
};
</script>