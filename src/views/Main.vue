<template>
  <div class="main">
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
    <h1>회사 점심 맛집 랜덤뽑기!!!!</h1>
    <p>지역을 선택해주세요</p>
    <router-link to="/gangnam">강남</router-link>
    <router-link to="/sangam">상암</router-link>
  </div>
</template>

<script>

export default {
  name: 'Main',
  mounted() {
      let increment = 0;
      const carousel = document.getElementById('carousel');

      setInterval(() => {
        increment++;
        carousel.style.transform = 'rotateX(' + (increment * -60) + 'deg)';
        carousel.setAttribute ('data-state', (increment % 6) + 1);

      }, 2000);

  }

}
</script>
<style scoped>
  #splash {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #daf1ff;
    z-index: 999;
  }

  #carousel-wrapper,
  #carousel figure {
    height: 100px;
    line-height: 100px;
    color: white;
  }

  #carousel figure:nth-of-type(1) {transform: rotateX(0deg)   translateZ(86px);}
  #carousel figure:nth-of-type(2) {transform: rotateX(60deg)  translateZ(86px);}
  #carousel figure:nth-of-type(3) {transform: rotateX(120deg) translateZ(86px);}
  #carousel figure:nth-of-type(4) {transform: rotateX(180deg) translateZ(86px);}
  #carousel figure:nth-of-type(5) {transform: rotateX(240deg) translateZ(86px);}
  #carousel figure:nth-of-type(6) {transform: rotateX(300deg) translateZ(86px);}

  #carousel[data-state="1"] figure:nth-of-type(1),
  #carousel[data-state="2"] figure:nth-of-type(2),
  #carousel[data-state="3"] figure:nth-of-type(3),
  #carousel[data-state="4"] figure:nth-of-type(4),
  #carousel[data-state="5"] figure:nth-of-type(5),
  #carousel[data-state="6"] figure:nth-of-type(6) { opacity: 1; }

  #carousel-wrapper {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 50%;
    text-align: center;
    perspective: 1100px;
  }

  #carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    transform-style: preserve-3d;
    transition: all 1s;
  }

  #carousel figure {
    display: block;
    position: absolute;
    width: 100%;
    margin: 0;
    font-size: 80px;
    font-weight: bold;
    color: black;
    text-align: center;
    opacity: .2;
    transition: all 1s;
    backface-visibility: hidden;
  }
</style>