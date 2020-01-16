<template>
    <div class="mid7">
        <div class="contenido7">
            <div class="titulo7 d-none d-xl-block">
                <h1>¿Necesitas <span>AYUDA?</span></h1>
            </div>
            <div class="message7  mt-xl-5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                <p class="m1">Nuestro equipo esta dispuesto a brindarte la mejor asesoria</p>
                <p class="m2 d-none d-md-block">O ingresa a nuestro chat en la parte inferior</p>
            </div>
            <div class="input7 mt-xl-5 mt-lg-n5 mt-md-n5 mt-sm-n5 mt-n5">
                <mdb-row>
                    <mdb-col>
                        <mdb-input label="Nombre" size="sm" />
                        <p>Dejanos tu nombre</p>
                    </mdb-col>
                    <mdb-col>
                        <mdb-input label="Telefono" size="sm" />
                        <p>Numero de contacto</p>
                    </mdb-col>
                    <mdb-col>
                        <mdb-input label="Correo" size="sm" />
                        <p>Un correo electronico</p>
                    </mdb-col>
                    <mdb-col>
                        <div class="boton">
                            <button>Solicitar soporte</button>
                        </div>
                    </mdb-col>
                </mdb-row>
            </div>
        </div>

    </div>
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol,mdbInput} from 'mdbvue';
  export default {
       name: "Input",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
        mdbInput
    }
  }
</script>
</script>