<template>
  <div class="Dashboard">
      <panel/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import panel from '@/components/Admin-Panel/Panel-control.vue'
export default {
  name: 'dashboard',
  components: {
  panel

  }
}
</script>
