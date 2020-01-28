<template>
    <div class="Nosotros">
        <Header/>
        <Contenido1/>
         <Contenido2/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Nosotros/Header.vue'
import Contenido1 from '@/components/Nosotros/Contenido1.vue'
import Contenido2 from '@/components/Nosotros/Contenido2.vue'

export default {
  name: 'Nosotros',
  components: {
      Header,
      Contenido1,
      Contenido2
    
   

  }
}
</script>