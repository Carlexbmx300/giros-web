<template>
    <div class="recarga">
        <Header/>

    
       
         <Contenido5/>
                 <Recargas/>
         <Contenido6/>
         <Contenido7/>
         <Contenido8/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Recargas from '@/components/Recarga/Recargas.vue'


import Contenido5 from '@/components/Nosotros/Contenido5.vue'
import Contenido6 from '@/components/Nosotros/Contenido6.vue'
import Contenido7 from '@/components/Nosotros/Contenido7.vue'
import Contenido8 from '@/components/Nosotros/Contenido8.vue'
import Footer from '@/components/Partial/Footer.vue'


export default {
  name: 'Recarga',
  components: {
      Header,
      Recargas,
     
  
      Contenido5,
      Contenido6,
      Contenido7,
      Contenido8,
      Footer
    
   

  }
}
</script>