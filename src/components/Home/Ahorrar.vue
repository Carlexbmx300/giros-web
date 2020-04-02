<template>
      <mdb-container class="bg_yellow" fluid>
      <mdb-container>
        <mdb-row >
            <mdb-col class="d-flex align-items-bottom" sm="6">
              <img  class="img-fluid" src="images/pichure.png" alt="">
            </mdb-col>
            <mdb-col class="d-flex align-items-center" sm="6">            
             <mdb-col >
                    <h1 class="text-left font-weight-bold black-text">¡AHORRAR ES GANAR! </h1>
                    <p class="text-left black-text">El cobro mas economico del mercado, su giro tiene la menos cantidad de deducibles que otras plataformas</p>
                     <mdb-row class="d-flex justify-content-center">
                     <mdb-col col="6" lg="3">
                        <div class="logo_container rounded-circle bg_eee d-flex align-items-center justify-content-center">
                        <img class="img_circle" src="images/MONEY.png" alt="">
                        </div>
                     </mdb-col>
                     <mdb-col col="6" lg="3">
                        <div class="logo_container rounded-circle bg_eee d-flex align-items-center justify-content-center">
                        <img  class="img_circle" src="images/MONEYGRAM.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col col="6" lg="3">
                        <div class="logo_container rounded-circle bg_eee d-flex align-items-center justify-content-center">
                        <img class="img_circle" src="images/MORE.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col col="6" lg="3">
                        <div class="logo_container rounded-circle bg_eee d-flex align-items-center justify-content-center"  data-holder-rendered="true">
                        <img class="img_circle" src="images/VIGO.png" alt="vigo">
                        </div>
                   </mdb-col>
                </mdb-row>
                <mdb-row class="button_yellow_container padmid">
                <mdb-btn class="black-text">¡Quiero hacer un <span class="font-weight-bold">GIRO HOY!</span></mdb-btn>
                 </mdb-row>
                
                            </mdb-col>
            </mdb-col>
        </mdb-row>
</mdb-container>
</mdb-container>
</template>
<script>
  import { mdbInput,mdbContainer, mdbRow, mdbCol,mdbBtn,mdbSelect,mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon  } from 'mdbvue';
  export default {
    name: "Container6",
    components: {
      mdbInput,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbSelect,
      mdbDropdown, 
      mdbDropdownToggle, 
      mdbDropdownMenu, 
      mdbDropdownItem,
        mdbIcon 
    },
    data() {
      return {
        value: ''
        
      };
    }
  }
</script>