<template>
  
        <mdb-container class="servicios" fluid>
            

           <titulopanel/>

           <panelmid/>
          
            
<!-- importado solo para vista previa -->
                <mdb-row class="mt-5 mb-5">
                  <ModalF/>
                </mdb-row>
                <mdb-row class="mt-5 mb-5">
                  <ModalD/>
                </mdb-row>
<!--Eliminar hasta este punto -->
        </mdb-container>
  
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,  mdbInput, mdbBtn} from 'mdbvue';
import CountryFlag from 'vue-country-flag'
import ModalF from '@/components/Admin-Dashboard/ModalFotografia.vue'
import ModalD from '@/components/Admin-Dashboard/ModalDocumento.vue'
import titulopanel from '@/components/Admin-Panel/Titulo_panel.vue'
import panelmid from '@/components/Admin-Panel/Panel_mid.vue'
  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        CountryFlag,
          mdbInput,
           mdbBtn,
          ModalF,
          ModalD,
          titulopanel,
          panelmid
    },
     data() {
      return {
        modal: false
      };
    }
  }
</script>