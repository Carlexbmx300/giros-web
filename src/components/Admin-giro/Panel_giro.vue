<template>
<mdb-container class="servicios" >
<titulo/>

<mid/>


</mdb-container>
    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import titulo from '@/components/Admin-giro/Titulo_giro.vue'

import mid from '@/components/Admin-giro/Giro_exitoso.vue'



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