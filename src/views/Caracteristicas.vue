<template>
    <div class="caracteristicas">
      <Header/>
      <Main/>
      <Carousel/>
      <Lista/>
      <Panelrecarga/>
      <Card/>
      <Ahorrar/>
      <Footerform/>
      <Footersocial/>
      <Footer/>

    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Caracteristicas/Main.vue'
import Carousel from '@/components/Home/Carousel.vue'
import Lista from '@/components/Caracteristicas/Lista.vue'
import Panelrecarga from '@/components/Caracteristicas/Panelrecarga.vue'
import Card from '@/components/Home/Card.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'


export default {
  name: 'caracteristicas',
  components: {
    Header,
    Main,
    Carousel,
    Lista,
    Panelrecarga,
    Card,
    Ahorrar,
    Footerform,
    Footersocial,
    Footer
  

  }
}
</script>
