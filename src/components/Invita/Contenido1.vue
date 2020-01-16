<template>
    <div class="ci1">
        <mdb-container  >
            <mdb-row>
                <mdb-col xl="12">
                    <div class=" w-50 float-xl-right text-left mt-5" >
                    <h5 class="text-left">Somos una solucion de tiempo completo</h5>
                    </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="12"> 
                    <div class=" w-50 float-xl-right float-lg-right float-md-right float-sm-right float-col-right">
                   
                     <h1 class="text-left">INVITA Y GANA</h1>
                       
                    </div>
                </mdb-col>
            </mdb-row>
             <mdb-row>
                <mdb-col xl="12"> 
                    <div class=" w-50 float-xl-right float-lg-right float-md-right float-sm-right float-col-right">
                   
                     <h4 class="text-left">Selecciona la opcion que desees usar</h4>
                       
                    </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
            
           

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