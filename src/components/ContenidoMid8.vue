<template>
            <mdb-container class="padmid footer-social">
            <mdb-row>
                <mdb-col sm="3" class="d-flex align-items-center justify-content-center c_blue">
                <img class="img-fluid" src="images/iconoContacto1.png" alt=""><span> +(56)(2) 2585 8297 (Chile)</span>
                </mdb-col>
                 <mdb-col sm="3" class="d-flex align-items-center justify-content-center c_blue">
                <img src="images/iconoContacto2.png" alt=""> <span>ventas@girosExpress.cl</span>
               </mdb-col>
                 <mdb-col sm="3" class="d-flex align-items-center justify-content-center c_blue">
                <img src="images/iconoContacto3.png" alt=""> <span>ventas@girosExpress.cl</span>
                </mdb-col>
                 <mdb-col sm="3" class="d-flex align-items-center justify-content-center c_blue">
                Siguenos en <span><img src="images/iconoContacto4.png" alt=""></span><span><img src="images/iconoContacto5.png" alt="">  </span>            
                </mdb-col>
            </mdb-row>
            </mdb-container>
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>