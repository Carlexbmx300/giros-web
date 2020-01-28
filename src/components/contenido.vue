<template>
    <div class="contenido1">
        <mdb-container fluid>
            <mdb-row>
                <mdb-col xl="12">
                    <h4 class="titulo">¿Porque escoger giros Express?</h4>
                    <p class="text-xl-center">Transferencias internacionales, giros y remesas rápidas, transparentes y hasta 8 veces más económicas que la competencia, en un servicio <span class="font-weight-bold">24/7</span> </p>
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