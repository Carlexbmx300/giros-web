<template>
<mdb-container class="bg_slider_login" fluid>
  <mdb-container class="h-100" fluid>
  <mdb-row class="container_slider h-100">
    <mdb-col sm="6">
      </mdb-col>
    <mdb-col id="main_slider" class="d-flex align-items-center" sm="6">
      <div>
        <h1 class="c_yellow text-left">PREGUNTAS FRECUENTES</h1>
        <h3 class="white-text text-left">¿Tienes alguna duda?</h3>
        <h5 class="c_skyblue text-left w-responsive">Muchos usuarios tienen las mismas 
preguntas, verifica nuestras preguntas
más frecuentes.</h5>
                  </div>
 
    </mdb-col>
  </mdb-row>
</mdb-container>
</mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: "Main",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      value: ''

    };
  }
}
</script>
