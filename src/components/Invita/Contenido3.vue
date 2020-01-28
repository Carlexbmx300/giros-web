<template>
    <div class="ci3">
     <mdb-container fluid>
         <mdb-row>
             <mdb-col class=" align-self-end  order-xl-0 order-12" xl="6">
                 <img  class="  silueta img-fluid" src="images/fondoSilueta1.png" alt="">
             </mdb-col>
             <mdb-col xl="6">
                 <mdb-row>
                     <mdb-col>
                         <h1 class=" titulo text-xl-left mt-xl-5">CONOCE NUESTROS PLANES</h1>
                         <h3 class="text-xl-left mt-xl-n3 mb-xl-5">Tenemos para ti los mejores incentivos</h3>
                     </mdb-col>
                 </mdb-row>
                 <mdb-row>
                     <mdb-col xl="4">
                         <img  class="ico float-xl-right mr-xl-5" src="images/iconoInvita3.png" alt="">
                     </mdb-col>
                     <mdb-col xl="8">
                            <h4 class="text-xl-left ml-xl-n5">PROYECCION</h4>
                            <p  class="w-responsive text-xl-left ml-xl-n5 mb-xl-5">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>

                     </mdb-col>
                 </mdb-row>
                  <mdb-row>
                     <mdb-col xl="4">
                          <img class="ico float-xl-right mr-xl-5" src="images/iconoInvita4.png" alt="">
                     </mdb-col>
                     <mdb-col xl="8">
                            <h4 class="text-xl-left ml-xl-n5">FIDELIZACION</h4>
                            <p class="w-responsive text-xl-left ml-xl-n5 mb-xl-5">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                     </mdb-col>
                 </mdb-row>
                 <mdb-row>
                     <mdb-col xl="12">
                            <div class="boton float-xl-left ml-xl-5 mb-xl-5">
                            <button>Conoce mas</button>
                        </div>
                     </mdb-col>
                 </mdb-row>
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