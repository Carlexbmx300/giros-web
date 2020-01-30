<template>
    <div class="cn1">
        <mdb-container fluid>
            <mdb-row>
                <mdb-col  xl="6" class="mt-5 ml-n3 order-xl-0 order-12">
                    <img  class=" mt-3 img-fluid" src="images/fondoSiluetaN1.png" alt="">
                </mdb-col>
                <mdb-col class="align-self-center text-xl-left" xl="6">
                    <h1 class="w-50">PREGUNTAS FRECUENTES</h1>
                    <h3>¿Tienes alguna duda?</h3>
                    <H4>Muchos usuarios tienen las mismas preguntas, verifica nuestras preguntas más frecuentes.
                    </H4>

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