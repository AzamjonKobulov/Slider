<script>
  import styles from "./styles.module.pcss";
  import Slide1 from "../../assets/project/sochi.png";
  import Slide2 from "../../assets/project/sochi.png";
  import Slide3 from "../../assets/project/sochi.png";
  import Slide4 from "../../assets/project/sochi.png";
  import { onMount } from "svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
  import "swiper/swiper-bundle.min.css";

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const images = [Slide1, Slide2, Slide3, Slide4];

  let swiper;
  let isMount = false;

  onMount(() => {
    isMount = true;
  });

  const initSwiper = (e) => {
    swiper = e.detail[0];
  };
</script>

<section class={styles.about}>
  {#if isMount}
    <div class={styles.slide}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoHeight={true}
        loop={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        autoplay={{
          delay: 5000,
        }}
        class={styles.slider}
        on:swiper={initSwiper}
      >
        {#each images as image, index}
          <SwiperSlide class={styles.slide}>
            <div class={styles.slide__inner} key={index}>
              <img src={image} alt="slide" />
            </div>
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  {/if}
</section>
