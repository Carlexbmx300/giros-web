<template>
  <div class="Dashboard">
      <panel/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import panel from '@/components/Admin-Recarga/Recarga.vue'
export default {
  name: 'dashboard',
  components: {
  panel

  }
}
</script>