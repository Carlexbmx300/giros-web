<template>
    <div class="ci7">
        <mdb-container>
            <mdb-row>
                <mdb-col class="align-self-end order-xl-0 order-12" xl="6">
                    <img class="img-fluid" src="images/fondoSilueta4.png" alt="">

                </mdb-col>
                <mdb-col class="align-self-center mt-5" xl="6">
                    <h1 class="text-xl-left font-weight-bold mt-5 mb-5">¡AHORRAR ES GANAR!</h1>
                    <p class="text-xl-left">El cobro mas economico del mercado, su giro tiene la menos cantidad de deducibles que otras plataformas</p>
                     <mdb-row class="mt-5 mb-5">
                   <mdb-col xl="3" lg="6" col="6">
                        <div class="logo mb-5 float-right float-xl-none">
                        <img class="logo1" src="images/MONEY.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" lg="6" col="6">
                        <div class="logo">
                        <img  class="logo2" src="images/MONEYGRAM.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" lg="6" col="6">

                        <div class="logo float-right float-xl-none">
                        <img class="logo3" src="images/MORE.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" lg="6" col="6">
                        <div class="logo">
                        <img class="logo4" src="images/VIGO.png" alt="">
                        </div>
                   </mdb-col>
                </mdb-row>
                 <div class="boton mb-5 float-xl-left">
                <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
                 </div>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>
<script>
  import { mdbInput,mdbContainer, mdbRow, mdbCol,mdbBtn,mdbSelect,mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon  } from 'mdbvue';
  export default {
    name: "Input",
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