<template>
    <div class="titulo mt-5 mb-3" fluid>
            <mdb-row>
              <mdb-col xl="1" col="1">
                <img class="ml-n4" src="images/IconD5.png" alt="">
              </mdb-col>
              <mdb-col xl="5" col="11" class="text-xl-left text-left align-self-center ml-n2">
                <h5 class="h5-responsive">HISTORIAL DE SERVICIOS</h5>
              </mdb-col>
            
            </mdb-row>
            <mdb-row class="d-xl-none d-block">
              <mdb-col col="6">
                <div class="btn-rec">
                  <mdb-row>
                      <mdb-col col="2" class="align-self-center ml-3">
                        <img src="images/IconoD1.png" alt="">
                      </mdb-col>
                      <mdb-col col="8" class="text-left ml-3 align-self-center">
                        <h4>Realizar Recargas</h4>
                      </mdb-col>
                  </mdb-row>
                </div>
              </mdb-col>
              <mdb-col col="6">
                  <div class="btn-rec gir mt-4">
                  <mdb-row>
                      <mdb-col col="2" class="align-self-center ml-3">
                        <img src="images/IconoD2.png" alt="">
                      </mdb-col>
                      <mdb-col col="8" class="text-left ml-3 align-self-center">
                        <h4>Giros Internacionales</h4>
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