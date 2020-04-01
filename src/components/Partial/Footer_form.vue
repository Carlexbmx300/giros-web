<template>
  <mdb-container class="bg_blue pt-5" fluid>
                <mdb-row>
                    <mdb-col class="d-flex align-items-center" sm="7" >
                    <div class="d-flex justify-content-start form_container_footer text-left">
                    <div>
                        <h1 class="c_skyblue d-flex align-items-center fomr_h1">¿Necesitas <span>AYUDA?</span></h1>
                        <h5 class="c_yellow">Nuestro equipo esta dispuesto a brindarte la mejor asesoría</h5>
                        <h5 class="c_skyblue">O ingresa a nuestro chat en la parte inferior</h5>
                        
                   <mdb-row>
                    <mdb-col sm="3">
                        <mdb-input label="Nombre" class="c_skyblue"/>
                        <p class="c_yellow">Dejanos tu nombre</p>
                    </mdb-col>
                    <mdb-col sm="3">
                        <mdb-input label="Telefono" class="c_skyblue"/>
                        <p class="c_yellow">Numero de contacto</p>
                    </mdb-col>
                    <mdb-col sm="3" >
                        <mdb-input label="Correo" />
                        <p class="c_yellow">Un correo electronico</p>
                    </mdb-col>
                    <mdb-col sm="3" class="d-flex align-items-center">
                      <button class='button_yellow'>Solicitar </button>
                    </mdb-col>
                </mdb-row>
                </div>
                </div>
                    </mdb-col>
                    <mdb-col sm="5" >
                        <img class="img-fluid" src="images/fondoSilueta3.png" alt="">

                    </mdb-col>
                </mdb-row>

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