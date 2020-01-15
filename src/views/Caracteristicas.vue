<template>
    <div class="caracteristicas">
      <Header/>
      <Contenido1/>

    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Caracteristicas/Header.vue'
import Contenido1 from '@/components/Caracteristicas/Contenido1.vue'

export default {
  name: 'caracteristicas',
  components: {
    Header,
    Contenido1
  

  }
}
</script>
