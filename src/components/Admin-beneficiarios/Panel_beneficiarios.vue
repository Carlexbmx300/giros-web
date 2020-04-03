<template>
<mdb-container class="servicios" >
<titulobeneficiario/>
<buscador/>
<mid/>


</mdb-container>
    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import titulobeneficiario from '@/components/Admin-beneficiarios/Titulo_beneficiarios.vue'

import mid from '@/components/Admin-beneficiarios/Beneficiarios_mid.vue'

import buscador from '@/components/Admin-beneficiarios/Buscador.vue'

  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        titulobeneficiario,
       mid,
       buscador
    }
  }
</script>