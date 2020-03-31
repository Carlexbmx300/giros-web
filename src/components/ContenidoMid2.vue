<template>
    <mdb-container class="padmid3 bg_eee" fluid>
        <mdb-container>
            <mdb-row>
                <mdb-col class="d-flex align-items-center" sm="4" >
                <div>
                    <h4 class="titulo h3padding text-left">Cualquier dispositivo</h4>
                    <p class="text-left">Accede desde cualquier smartphone o table y realiza giros y recargas de maner agil</p>
                    <button class='button_yellow'>Conoce mas</button>
                   </div>
                </mdb-col>
                           <mdb-col sm="8">
                    <img src="images/fondoSilueta2fijo.png" class="img-fluid" alt="Tablet Giros Express">
                </mdb-col>
            </mdb-row>
        </mdb-container>
        
    </mdb-container>

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