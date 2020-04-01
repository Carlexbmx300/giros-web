<template>
<div class="home">
  <Header />
  <Slider />
  <Carousel />
  <Contenido />
  <ContenidoMid />
  <ContenidoMid2 />
  <ContenidoMid3 />
  <ContenidoMid4 />
  <ContenidoMid5 />
  <ContenidoMid6 />
  <ContenidoMid7 />
  <ContenidoMid8 />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Slider from '@/components/Home/Main.vue'
import Carousel from '@/components/Home/Carousel.vue'
import Contenido from '@/components/Home/Contenido.vue'
import ContenidoMid from '@/components/Home/ContenidoMid.vue'
import ContenidoMid2 from '@/components/Home/ContenidoMid2.vue'
import ContenidoMid3 from '@/components/Home/ContenidoMid3.vue'
import ContenidoMid4 from '@/components/Home/ContenidoMid4.vue'
import ContenidoMid5 from '@/components/Home/ContenidoMid5.vue'
import ContenidoMid6 from '@/components/Home/ContenidoMid6.vue'
import ContenidoMid7 from '@/components/Partial/Footer_form.vue'
import ContenidoMid8 from '@/components/Partial/Footer_social.vue'
import Footer from '@/components/Partial/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    Slider,
    Carousel,
    Contenido,
    ContenidoMid,
    ContenidoMid2,
    ContenidoMid3,
    ContenidoMid4,
    ContenidoMid5,
    ContenidoMid6,
    ContenidoMid7,
    ContenidoMid8,
    Footer

  }
}
</script>
