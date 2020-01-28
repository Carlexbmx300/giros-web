<template>aca de nuevo
    <div class="mid6">
        <div class="contenido6">
        <div class="titulo6 mt-n5">
            <h1 class="h1-responsive">¡ AHORRAR ES GANAR !</h1>
        </div>
        <div class="message6 mt-n4">
            <p>
                El cobro mas economico del mercado, su giro tiene la menos
                cantidad de deducibles que otras plataformas
            </p>
        </div>
        <div class="images6 mt-n2 d-none d-sm-block">
            <mdb-container>
                <mdb-row>
                   <mdb-col xl="3" md="3" col="3">
                        <div class="logo">
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
            </mdb-container>



        </div>
        <div class="boton mt-xl-5 mt-md-5 mt-sm-1">
            <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
        </div>
        </div>
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
