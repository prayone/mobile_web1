<template>
  <div class="pc-banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-center none-effect">
          <a href="javascript:;">
            <img src="/static/img/banner001.jpg">
          </a>
          <!-- <span class="swiper-introduce">雄厚师资团队，精于考试技巧</span> -->
          <div class="layer-mask"></div>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="/static/img/banner002.jpg">
          </a>
          <!-- <span class="swiper-introduce">雄厚师资团队，精于考试技巧</span> -->
          <div class="layer-mask"></div>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="/static/img/banner003.jpg">
          </a>
          <!-- <span class="swiper-introduce">雄厚师资团队，精于考试技巧</span> -->
          <div class="layer-mask"></div>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="/static/img/banner004.jpg">
          </a>
          <!-- <span class="swiper-introduce">雄厚师资团队，精于考试技巧</span> -->
          <div class="layer-mask"></div>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="/static/img/banner005.jpg">
          </a>
          <!-- <span class="swiper-introduce">雄厚师资团队，精于考试技巧</span> -->
          <div class="layer-mask"></div>
        </div>
      </div>
      <div class="button">
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../swiper/swiper.min'
	export default {
		data() {
			return {}
		},
    mounted() {
      var swiper = new Swiper('.swiper-container',{
        autoplay: true,
        speed: 3500,
        autoplayDisableOnInteraction: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween:0,
        // slidesOffsetBefore:90,
        // slidesOffsetAfter:90,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function(swiper) {
          swiper.slides[3].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
          668: {
            slidesPerView: 1,
          }
        }
      });
    }
	}
</script>

<style scoped>
  @import '../../../static/css/style.css';
  
</style>
