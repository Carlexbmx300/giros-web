<template>
<mdb-container class="servicios" >
<titulo/>

<mid/>


</mdb-container>
    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import titulo from '@/components/Admin-Recarga/Titulo_recarga.vue'

import mid from '@/components/Admin-Recarga/Recarga_mid.vue'



  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        titulo,
       mid,
     
    }
  }
</script>