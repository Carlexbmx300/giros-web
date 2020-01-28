<template>
    <div class="ci8">
 
            <mdb-container fluid>
                <mdb-row>
                    <mdb-col class="align-self-center" xl="7" >
                        <h1 class="text-xl-center">¿Necesitas <span>AYUDA?</span></h1>
                        <h4>Nuestro equipo esta dispuesto a brindarte la mejor asesoría</h4>
                        <h5>O ingresa a nuestro chat en la parte inferior</h5>
                        <div class="input7">
                <mdb-row>
                    <mdb-col xl="3" lg="4" md="4">
                        <mdb-input label="Nombre" size="sm" />
                        <p>Dejanos tu nombre</p>
                    </mdb-col>
                    <mdb-col xl="3" lg="4" md="4">
                        <mdb-input label="Telefono" size="sm" />
                        <p>Numero de contacto</p>
                    </mdb-col>
                    <mdb-col xl="3" lg="4" md="4">
                        <mdb-input label="Correo" size="sm" />
                        <p>Un correo electronico</p>
                    </mdb-col>
                    <mdb-col xl="3" lg="12" md="12">
                        <div class="boton mb-5">
                            <button>Solicitar soporte</button>
                        </div>
                    </mdb-col>
                </mdb-row>
            </div>

                    </mdb-col>
                    <mdb-col xl="5">
                        <img class="img-fluid" src="images/fondoSilueta3.png" alt="">

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