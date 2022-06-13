<template>
  <div class="main">
    <div id="wrap">
      <div id="splash">
        <div id="carousel-wrapper">
          <div id="carousel" data-state="1" style="-webkit-transform: rotateX(0deg)">
            <figure>강남</figure>
            <figure>상암</figure>
            <figure>여의도</figure>
            <figure>홍대</figure>
            <figure>성수</figure>
            <figure>종로</figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bg-wrap">
          <video autoplay loop muted playsinline preload="auto">
            <source src="@/assets/images/video/main.mp4">
          </video>
        </div>
        <div class="contents-wrap">
          <h1>회사 점심 맛집 랜덤뽑기🍔</h1>
          <p>원하는곳 클릭해주세요!!</p>
          <div class="area-wrap">
            <router-link to="/gangnam">강남</router-link>
            <router-link to="/sangam">상암</router-link>
          <!-- <router-link to="/yeouido">여의도</router-link> -->
          </div>
          <!-- <font-awesome-icon icon="fa-thin fa-alien" /> -->
          <footer>
            &copy; 2022, 박서연
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  mounted() {
      let increment = 0;
      const carousel = document.getElementById('carousel'),
            splash = document.getElementById('splash');

      setInterval(() => {
        increment++;
        carousel.style.transform = 'rotateX(' + (increment * -60) + 'deg)';
        carousel.setAttribute ('data-state', (increment % 6) + 1);

      }, 2000);

      setTimeout(() => {
        if (!splash.style.opacity) {
            splash.style.opacity = 1;
        }
        if (splash.style.opacity > 0) {
            splash.style.opacity = 0;
            splash.remove();
        }
      },5000);

  }

}
</script>