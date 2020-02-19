<template>
    <div class="caracteristicas">
      <Header/>
      <Contenido1/>
      <Contenido2/>
      <Contenido3/>
      <Contenido4/>
      <Contenido5/>
      <Contenido6/>
      <Contenido7/>
      <Footer/>

    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Contenido1 from '@/components/Caracteristicas/Contenido1.vue'
import Contenido2 from '@/components/Caracteristicas/Contenido2.vue'
import Contenido3 from '@/components/Caracteristicas/Contenido3.vue'
import Contenido4 from '@/components/Caracteristicas/Contenido4.vue'
import Contenido5 from '@/components/Caracteristicas/Contenido5.vue'
import Contenido6 from '@/components/Caracteristicas/Contenido6.vue'
import Contenido7 from '@/components/Caracteristicas/Contenido7.vue'
import Footer from '@/components/Caracteristicas/Footer.vue'


export default {
  name: 'caracteristicas',
  components: {
    Header,
    Contenido1,
    Contenido2,
    Contenido3,
    Contenido4,
    Contenido5,
    Contenido6,
    Contenido7,
    Footer
  

  }
}
</script>
