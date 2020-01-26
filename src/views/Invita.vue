<template>
    <div class="invita">
        <Header/>
        <Contenido1/>
        <Contenido2/>
        <Contenido3/>
        <Contenido4/>
        <Contenido5/>
        <Contenido6/>
        <Contenido7/>
        <Contenido8/>
        <Contenido9/>
        <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Invita/Header.vue'
import Contenido1 from '@/components/Invita/Contenido1.vue'
import Contenido2 from '@/components/Invita/Contenido2.vue'
import Contenido3 from '@/components/Invita/Contenido3.vue'
import Contenido4 from '@/components/Invita/Contenido4.vue'
import Contenido5 from '@/components/Invita/Contenido5.vue'
import Contenido6 from '@/components/Invita/Contenido6.vue'
import Contenido7 from '@/components/Invita/Contenido7.vue'
import Contenido8 from '@/components/Invita/Contenido8.vue'
import Contenido9 from '@/components/Invita/Contenido9.vue'
import Footer from '@/components/Invita/Footer.vue'

export default {
  name: 'Invita',
  components: {
    Header,
    Contenido1,
    Contenido2,
    Contenido3,
    Contenido4,
    Contenido5,
    Contenido6,
    Contenido7,
    Contenido8,
    Contenido9,
    Footer
   

  }
}
</script>