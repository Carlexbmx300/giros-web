<template>
     <div class="titulo mt-5 mb-3 d-xl-block d-none">
                <mdb-row class="pt-5">
                  <mdb-col xl="1" col="1">
                    <img class="ml-n3" src="images/IconoMenu1.png" alt="">
                  </mdb-col>
                  <mdb-col xl="4" col="11" class="text-xl-left align-self-center ml-n1">
                    <h5 class="h5-responsive">RECARGA CELULAR</h5>
                  </mdb-col>
                   <mdb-col xl="2" class="d-xl-block d-none border-left">
                       <a href="/admin-giro"><img class="btn_giro "  src="images/btngiroB.png" alt=""></a>
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