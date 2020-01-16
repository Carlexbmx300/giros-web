<template>
    <div class="mid8">
        <div class="contenido8">
            <mdb-container fluid>
            <mdb-row>
                <mdb-col xl="3" lg="6" md="12">
              
                        <div class="imagenC float-xl-right float-lg-none">
                           <p><img src="images/iconoContacto1.png" alt=""> +(56)(2) 2585 8297 (Chile)</p>
                        </div>
                        
                   
                </mdb-col>
                <mdb-col xl="3" lg="6" md="12">
                    <div class="imagenC float-xl-left float-lg-none">
                        <p><img src="images/iconoContacto2.png" alt=""> ventas@girosExpress.cl</p>
                    </div>
                </mdb-col>
                <mdb-col xl="3" lg="6" md="12">
                    <div class="imagenC float-xl-left float-lg-none">
                        <p><img src="images/iconoContacto3.png" alt=""> ventas@girosExpress.cl</p>
                    </div>
                    
                </mdb-col>
                <mdb-col  xl="3" lg="6" md="12">
                    <div class="imagenC float-xl-left float-lg-none">
                        <p>Siguenos en <img src="images/iconoContacto4.png" alt=""> <img src="images/iconoContacto5.png" alt=""></p>
                    </div>
                </mdb-col>
            </mdb-row>
            </mdb-container>
        </div>

    </div>
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