<template>
    <div class="Nosotros">
        <Header/>
        <Main/>
        <Contenido1/>
         <Contenido2/>
         <Contenido3/>
         <Contenido4/>
         <Contenido5/>
         <Contenido6/>
         <Contenido7/>
         <Contenido8/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Nosotros/Main.vue'
import Contenido1 from '@/components/Nosotros/Contenido1.vue'
import Contenido2 from '@/components/Nosotros/Contenido2.vue'
import Contenido3 from '@/components/Nosotros/Contenido3.vue'
import Contenido4 from '@/components/Nosotros/Contenido4.vue'
import Contenido5 from '@/components/Nosotros/Contenido5.vue'
import Contenido6 from '@/components/Nosotros/Contenido6.vue'
import Contenido7 from '@/components/Nosotros/Contenido7.vue'
import Contenido8 from '@/components/Nosotros/Contenido8.vue'
import Footer from '@/components/Partial/Footer.vue'


export default {
  name: 'Nosotros',
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
      Footer
    
   

  }
}
</script>