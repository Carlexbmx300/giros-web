<template>
    <mdb-container class="pt-3 bg_eee" fluid>
            <mdb-row>
                
                <mdb-col sm="6">
                    <img src="images/fondoSilueta5.png" class="img-fluid" alt="Tablet Giros Express">
                </mdb-col>
                <mdb-col class="d-flex align-items-center" sm="6" >
                  <mdb-container>
                    <h1 class="c_blue text-left font-weight-bold">Nuestra UI</h1>
                     <h3 class="black-text text-left">DESDE LA WEB, FACIL DE USAR</h3>
                    <p class="text-left w-responsive">Tenemos el compromiso de proteger tu información financiera y empleamos tecnología comprobada para proteger tu información personal. Revisa estos links si deseas obtener más información</p>
                      
                       </mdb-container>
                </mdb-col>
                
            </mdb-row>
         </mdb-container>

</template>
<script>
  import {mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: "Input",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        value: ''
        
      };
    }
  }
</script>