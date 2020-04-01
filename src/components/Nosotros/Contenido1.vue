<template>
    <div class="cn1">
        <mdb-container fluid>
            <mdb-row>
                <mdb-col  xl="6" class="mt-5 ml-n3 order-xl-0 order-12">
                    <img  class=" mt-3 img-fluid" src="images/fondoSiluetaN1.png" alt="">
                </mdb-col>
                <mdb-col class="align-self-center text-xl-left" xl="6">
                    <h1 >NUESTRA EMPRESA</h1>
                    <h3>CONOCE LA SOLIDEZ DE NUESTRA COMPAÑIA</h3>
                    <H4>Respaldo, experiencia y solidez; somos la solución 
                        eficiente para sus giros y recargas
                    </H4>

                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>
<script>
  import { mdbInput,mdbContainer, mdbRow, mdbCol,mdbBtn,mdbSelect,mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon  } from 'mdbvue';
  export default {
    name: "Contenido1",
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