<template>
    <div class="titulo mt-xl-5  mb-3" fluid>
            <mdb-row class="mt-xl-0 mt-n3">
              <mdb-col xl="1" col="1">
                <img class="ml-n4 tds" src="images/IconD5.png" alt="">
              </mdb-col>
              <mdb-col xl="5" col="11" class="text-xl-left text-left align-self-center ml-n2">
                <h5 class="h5-responsive tdsh">HISTORIAL DE SERVICIOS</h5>
              </mdb-col>
            
            </mdb-row>
            <mdb-row class="d-xl-none d-flex mr-4 mt-4 mb-4">
              <mdb-col col="6" class="ml-n2">
                <div class="btn-rec">
                  <mdb-row>
                      <mdb-col col="2" class="align-self-center ml-3 ">
                        <img src="images/IconoD1.png" alt="">
                      </mdb-col>
                      <mdb-col col="6" class="text-left align-self-center">
                        <a href="/admin-recarga">Realizar recargas</a>
                      </mdb-col>
                  </mdb-row>
                </div>
              </mdb-col>
              <mdb-col col="6">
                  <div class="btn-rec gir ">
                  <mdb-row>
                      <mdb-col col="2" class="align-self-center ml-3">
                        <img src="images/IconoD2.png" alt="">
                      </mdb-col>
                      <mdb-col col="6" class="text-left  align-self-center">
                      <a href="/admin-giro">Giros internacionales</a>
                      </mdb-col>
                  </mdb-row>
                </div>
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
      
    }
}
</script>