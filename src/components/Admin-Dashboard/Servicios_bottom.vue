<template>
     <div class="servicios-bottom mt-4 mb-4 d-none d-xl-block">
              <mdb-row>
                <mdb-col xl="4">
                  <div class="serv-card">
                    <mdb-row>
                      <mdb-col col="2" class="ml-2 align-self-center">
                        <img src="images/IconD4.png " alt="">
                      </mdb-col>
                      <mdb-col col="10" class="ml-n2">
                        <p class="mt-3 text-left ml-3">Realizar Transeferencia</p>
                        <p class="contenido mt-n3 text-left ml-3">Aprende como realizar una transferencia con nuestra plataforma </p>
                      </mdb-col>
                    </mdb-row>
                  </div>
                </mdb-col>
                <mdb-col xl="4">
                    <div class="serv-card">
                      <mdb-row>
                      <mdb-col col="2" class="ml-2 align-self-center">
                        <img src="images/IconD4.png " alt="">
                      </mdb-col>
                      <mdb-col col="10" class="ml-n2">
                        <p class="mt-3 text-left ml-3">Realizar Recarga</p>
                        <p class="contenido mt-n3 text-left ml-3">Aprende como realizar una transferencia con nuestra plataforma </p>
                      </mdb-col>
                    </mdb-row>
                  </div>
                </mdb-col>
                <mdb-col xl="4">
                    <div class="serv-card">
                      <mdb-row>
                      <mdb-col col="2" class="ml-2 align-self-center">
                        <img src="images/IconD4.png " alt="">
                      </mdb-col>
                      <mdb-col col="10" class="ml-n2">
                        <p class="mt-3 text-left ml-3">Recibir Envio</p>
                        <p class="contenido mt-n3 text-left ml-3">Aprende como realizar una transferencia con nuestra plataforma </p>
                      </mdb-col>
                    </mdb-row>
                  </div>
                </mdb-col>
              </mdb-row>
            </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import CountryFlag from 'vue-country-flag'

  export default {
    name: 'PageLoader',
    components: {
    
      mdbContainer, 
        mdbRow, 
        mdbCol,
        CountryFlag,
      
    }
  }
</script>