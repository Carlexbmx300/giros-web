<template>
     <div class="titulo mt-5 mb-3 d-xl-block d-none">
                <mdb-row>
                  <mdb-col xl="1" col="1">
                    <img class="ml-n3" src="images/IconoPersona.png" alt="">
                  </mdb-col>
                  <mdb-col xl="5" col="11" class="text-xl-left align-self-center ml-n1">
                    <h5 class="h5-responsive">Beneficiarios</h5>
                  </mdb-col>
                
                  </mdb-row>
              </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';


  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
       
    },
     
  }
</script>