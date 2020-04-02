<template>
<mdb-container class="servicios">
<titulocomparte/>
<compartemid/>

</mdb-container>
    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import titulocomparte from '@/components/Admin-comparte/Titulo_comparte.vue'
import compartemid from '@/components/Admin-comparte/Comparte_mid.vue'

  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        titulocomparte,
        compartemid
    }
  }
</script>