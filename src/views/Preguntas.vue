<template>
    <div class="preguntas">
        <Header/>
        <Contenido1/>
    <ContenidoPreguntas/>
       
         <Contenido5/>
         <Contenido6/>
         <Contenido7/>
         <Contenido8/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Contenido1 from '@/components/Preguntas/Contenido1.vue'
import ContenidoPreguntas from '@/components/Preguntas/ContenidoPreguntas.vue'

import Contenido5 from '@/components/Nosotros/Contenido5.vue'
import Contenido6 from '@/components/Nosotros/Contenido6.vue'
import Contenido7 from '@/components/Nosotros/Contenido7.vue'
import Contenido8 from '@/components/Nosotros/Contenido8.vue'
import Footer from '@/components/Nosotros/Footer.vue'


export default {
  name: 'preguntas',
  components: {
      Header,
      Contenido1,
      ContenidoPreguntas,
  
      Contenido5,
      Contenido6,
      Contenido7,
      Contenido8,
      Footer
    
   

  }
}
</script>