<template>
    <div class="cn3">
        <mdb-container  fluid>
            <mdb-row>
                <mdb-col class="order-xl-0 order-12" xl="6">
                    <img  class="img-fluid " src="images/fondoSilueta5.png" alt="">
                </mdb-col>
                <mdb-col class="align-self-center text-xl-left" xl="6">
                    <h1 class="titulo">Nuestra UI</h1>
                    <h3>DESDE LA WEB, FACIL DE USAR</h3>
                    <p class="w-responsive">Tenemos el compromiso de proteger tu información financiera y empleamos tecnología comprobada para proteger tu información personal. Revisa estos links si deseas obtener más información</p>
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