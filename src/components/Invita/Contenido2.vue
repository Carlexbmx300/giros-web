<template>
    <div class="ci2">
        <h4 class="titulo mt-xl-5 mb-xl-5 mb-5">Gana con Giros Express</h4>
        <mdb-container fluid>
            <mdb-row>
                <mdb-col xl="2" md="12">
                    <img  class="float-xl-right float-none mb-0 mt-0" src="images/iconoInvita1.png" alt="">
                </mdb-col>
                <mdb-col xl="4" md="12">
                    <h4 class="ml-xl-3 text-xl-left float-none">Recarga y gana</h4>
                    <p class=" w-responsive text-xl-left ml-xl-3 float-none  mb-5" >Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                </mdb-col>
                <mdb-col xl="2" md="12">
                    <img class="float-xl-right mb-0 mt-0" src="images/iconoInvita2.png" alt="">
                </mdb-col>
                <mdb-col xl="4" md="12">
                     <h4 class="ml-xl-3 text-xl-left float-none">Ahorrar es Ganar</h4>
                     <p class=" w-responsive text-xl-left ml-xl-3 mb-5">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
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