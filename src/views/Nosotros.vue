<template>
    <div class="Nosotros">
        <Header/>        
         <Main/>
         <Contenido2/>         
         <Contenido3/>
         <Contenido4/>
         <Contenido5/>
         <Ahorrar/>
         <Footerform/>
         <Footersocial/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Nosotros/Main.vue'
import Contenido2 from '@/components/Nosotros/Contenido2.vue'
import Contenido3 from '@/components/Nosotros/Contenido3.vue'
import Contenido4 from '@/components/Nosotros/Contenido4.vue'
import Contenido5 from '@/components/Nosotros/Contenido5.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'


export default {
  name: 'Nosotros',
  components: {
      Header,
      Main,
      Contenido2,
      Contenido3,
      Contenido4,
      Contenido5,
      Ahorrar,
      Footerform,
      Footersocial,
      Footer
    
   

  }
}
</script>