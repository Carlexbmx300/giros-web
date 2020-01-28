<template>
    <div class="cn2">
        <mdb-container>
            <mdb-row>
                <mdb-col xl="4">
                    <img src="images/iconoN1.png" alt="">
                    <h3 class="ml-xl-5 text-xl-left">Datos en tiempo real, cuentas claras </h3>
                    <p  class=" ml-xl-5 w-responsive text-xl-left">Transferencias internacionales, giros y remesas rápidas, transparentes y hasta 8 veces más económicas que la competencia.</p>
                </mdb-col>
                <mdb-col xl="4">
                     <img src="images/iconoN2.png" alt="">
                     <h3 class="ml-xl-5 text-xl-left">
                         El cliente es lo mas importante
                     </h3>
                     <p  class=" ml-xl-5 text-xl-left w-responsive ">Estamos para ti siempre que nos necesites. Resolveremos tus dudas y problemas en el momento.</p>
                </mdb-col>
                <mdb-col xl="4">
                     <img src="images/iconoN3.png" alt="">
                     <h3 class= " ml-xl-5 text-xl-left">Costos mas bajos del mercado</h3>
                     <p  class=" ml-xl-5 w-responsive text-xl-left">Estamos para ti siempre que nos necesites. Resolveremos tus dudas y problemas en el momento.</p>
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