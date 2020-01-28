<template>
    <div class="ci5 p-5">
        <mdb-container>
            <mdb-row>
                <mdb-col class="align-self-center" xl="4">
                    <h4 class="titulo text-xl-left">Cualquier dispositivo</h4>
                    <p class="text-xl-left">Accede desde cualquier smartphone o table y realiza giros y recargas de maner agil</p>
                    <div class="boton float-xl-left">
                            <button>Conoce mas</button>
                    </div>
                </mdb-col>
                <mdb-col xl=8>
                    <img src="images/fondoSilueta2fijo.png" alt="">
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