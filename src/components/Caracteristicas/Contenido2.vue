<template>
    <div class="cc2">
        <h5 class="titulocc2">CARACTERISTICAS DE LA PLATAFOMRA</h5>
        <mdb-container>
            <mdb-row>
                <mdb-col xl="3" lg="12">
                    <img class="mb-xl-5" src="images/moneda1.png" alt="">
                </mdb-col>
                <mdb-col xl="9" lg="12">
                    <h5 class="text-xl-left text-lg-center text-md-center text-sm-center mt-xl-5">Transferencias en el menor tiempo</h5>
                    <p class=" text-xl-left text-lg-center text-md-center text-sm-center">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="3">
                        <img  class="mb-xl-5" src="images/moneda2.png" alt="">
                </mdb-col>
                <mdb-col xl="9">  
                    <h5 class="text-xl-left text-lg-center text-md-center text-sm-center mt-xl-5">Nuestro servicio de giros los fines de semana</h5> 
                      <p class=" text-xl-left text-lg-center text-md-center text-sm-center">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="3">
                    <img class="mb-xl-5" src="images/moneda3.png" alt="">
                </mdb-col>
                <mdb-col xl="9">
                    <h5 class="text-xl-left text-lg-center text-md-center text-sm-center mt-xl-5">Desde cualquier dispositivo</h5>
                      <p class="text-xl-left text-lg-center text-md-center text-sm-center">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="3">
                    <img class="mb-xl-5" src="images/moneda4.png" alt="">
                </mdb-col>
                <mdb-col xl="9">
                    <h5 class="text-xl-left text-lg-center text-md-center text-sm-center mt-xl-5">Seguridad y transparencia</h5>
                      <p class="text-xl-left text-lg-center text-md-center text-sm-center">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="3">
                    <img class="mb-xl-5" src="images/moneda5.png" alt="">
                </mdb-col>
                <mdb-col xl ="9">
                    <h5 class="text-xl-left text-lg-center text-md-center text-sm-center mt-xl-5">Notificaciones en tiempo real</h5>
                      <p class="text-xl-left text-lg-center text-md-center text-sm-center">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
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