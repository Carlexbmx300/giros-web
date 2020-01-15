<template>
    <div class="cc1">
        <mdb-container >
            <mdb-row>
                <mdb-col xl="12">
                    <div class="mt-xl-5  float-xl-right">
                    <h1>CARACTERISTICAS A LA MEDIDA</h1>
                    </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="12"> 
                    <div class="float-xl-right float-lg-right ">
                   
                     <h5>Conocemos sus necesidades y por ello hemos realizado una plataforma que le permitira tener el contro y AHORRAR TIEMPO</h5>
                       
                    </div>
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