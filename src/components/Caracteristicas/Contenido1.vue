<template>
    <div class="cc1">
        <mdb-container >
            <mdb-row>
                <mdb-col xl="12">
                    <div class="mt-xl-5  float-xl-right float-lg-right float-md-right float-sm-right float-col-right" >
                    <h1>CARACTERISTICAS A LA MEDIDA</h1>
                      </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="12"> 
                    <div class="float-xl-right float-lg-right float-md-right float-sm-right float-col-right">
                   
                     <h5>Conocemos sus necesidades y por ello hemos realizado una plataforma que le permitira tener el contro y AHORRAR TIEMPO</h5>
                       
                    </div>
                </mdb-col>
            </mdb-row>
            <mdb-row>
            
            <mdb-col xl="12">
                    <div class="boton float-xl-none mt-xl-5 mb-xl-5" >
                    <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
                    </div>
            </mdb-col>

            </mdb-row>
        </mdb-container>
        <mdb-row>
            <mdb-col xl="12">
                <div class="agente mt-xl-5">
                     <h5>Agentes Pagadores</h5>
                </div>
                    <div class="imagenes">
                    <img src="images/logo1.png" alt="">
                    <img src="images/logo2.png" alt="">
                    <img src="images/logo3.png" alt="">
                    <img src="images/logo4.png" alt="">
                    <img src="images/logo5.png" alt="">
                </div>
  
            </mdb-col>

        </mdb-row>


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