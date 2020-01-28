<template>
    <div class="cc3">
        <mdb-container>
            <mdb-row>
                <mdb-col xl="12">
                    <div class="imagencc3 ">
                    <img class="mb-xl-5 mt-xl-5 mt-md-0 mt-sm-n5"  src="images/capturaCC.jpg" alt="">
                    </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col>
                    <h5 class="mt-xl-5 mt-lg-5">Panel de registro en linea</h5>
                    <p class="mb-xl-5">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>

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