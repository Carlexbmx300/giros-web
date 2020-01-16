<template>
    <div class="invita">
        <Header/>
        <Contenido1/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Invita/Header.vue'
import Contenido1 from '@/components/Invita/Contenido1.vue'

export default {
  name: 'Invita',
  components: {
    Header,
    Contenido1
   

  }
}
</script>