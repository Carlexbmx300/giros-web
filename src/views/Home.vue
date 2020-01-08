<template>
  <div class="home">
    <Header/>
    <FormRecarga/>
    <Contenido/>
    <ContenidoMid/>
    <ContenidoMid2/>
    <ContenidoMid3/>
     <ContenidoMid4/>
     <ContenidoMid5/>
     <ContenidoMid6/>
     <ContenidoMid7/>
     <ContenidoMid8/>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import FormRecarga from '@/components/FormRecarga.vue'
import Contenido from '@/components/contenido.vue'
import ContenidoMid from '@/components/ContenidoMid.vue'
import ContenidoMid2 from '@/components/ContenidoMid2.vue'
import ContenidoMid3 from '@/components/ContenidoMid3.vue'
import ContenidoMid4 from '@/components/ContenidoMid4.vue'
import ContenidoMid5 from '@/components/ContenidoMid5.vue'
import ContenidoMid6 from '@/components/ContenidoMid6.vue'
import ContenidoMid7 from '@/components/ContenidoMid7.vue'
import ContenidoMid8 from '@/components/ContenidoMid8.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    FormRecarga,
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
