<template>
    <div class="preguntas">
        <Header/>
        <Main/>
        <Lista/>       
         <Transfiere/>
         <Ahorrar/>
         <Footerform/>
         <Footersocial/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Preguntas/Main.vue'
import Lista from '@/components/Preguntas/Lista.vue'
import Transfiere from '@/components/Preguntas/Transfiere.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'

export default {
  name: 'preguntas',
  components: {
      Header,
      Main,
      Lista,
      Transfiere,
      Ahorrar,
      Footerform,
      Footersocial,
      Footer
  }
}
</script>