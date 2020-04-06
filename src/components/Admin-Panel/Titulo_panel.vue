<template>
     <div class="titulo mt-5 mb-3 d-xl-block d-none">
                <mdb-row>
                  <mdb-col xl="1" col="1">
                    <img class="ml-n3" src="images/IconD5.png" alt="">
                  </mdb-col>
                  <mdb-col xl="3" col="11" class="text-xl-left align-self-center ml-n1">
                    <h5 class="h5-responsive">MI CUENTA</h5>
                  </mdb-col>
                  <mdb-col xl="2" class="d-xl-block d-none">
                       <a href="/admin-giro"><img class="btn_giro ml-n5"  src="images/btngiroB.png" alt=""></a>
                  </mdb-col>
                  <mdb-col xl="2" class="border-left ml-2 d-xl-block d-none">
                    <a href="/admin-recarga"><img class="btn_rec ml-n1"  src="images/btngrecargaB.png" alt=""></a>
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