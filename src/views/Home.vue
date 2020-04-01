<template>
<div class="home">
  <Header />
  <Main />
  <Carousel />
  <Escoger />
  <Lista />
  <Dispositivo />
  <Video />
  <Transfiere />
  <Card />
  <Ahorrar />
  <Footerform />
  <Footersocial />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Home/Main.vue'
import Carousel from '@/components/Home/Carousel.vue'
import Escoger from '@/components/Home/Escoger.vue'
import Lista from '@/components/Home/Lista.vue'
import Dispositivo from '@/components/Home/Dispositivo.vue'
import Video from '@/components/Home/Video.vue'
import Transfiere from '@/components/Home/Transfiere.vue'
import Card from '@/components/Home/Card.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    Main,
    Carousel,
    Escoger,
    Lista,
    Dispositivo,
    Video,
    Transfiere,
    Card,
    Ahorrar,
    Footerform,
    Footersocial,
    Footer

  }
}
</script>
