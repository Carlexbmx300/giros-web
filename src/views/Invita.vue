<template>
    <div class="invita">
        <Header/>
        <Main/>
        <Gana/>
        <Planes/>
        <Lista/>
        <Dispositivo/>
        <Card/>
        <Ahorrar/>
        <Footerform/>
        <Footersocial/>
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Invita/Main.vue'
import Gana from '@/components/Invita/Gana.vue'
import Planes from '@/components/Invita/Planes.vue'
import Lista from '@/components/Invita/Lista.vue'
import Dispositivo from '@/components/Home/Dispositivo.vue'
import Card from '@/components/Invita/Card.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'

export default {
  name: 'Invita',
  components: {
    Header,
    Main,
    Gana,
    Planes,
    Lista,
    Dispositivo,
    Card,
    Ahorrar,
    Footerform,
    Footersocial,
    Footer
   

  }
}
</script>