<template>
<mdb-container class="bg_slider" fluid>
  <mdb-container class="h-100" fluid>
  <mdb-row class="container_slider h-100">
    <mdb-col sm="6">
      </mdb-col>
    <mdb-col id="main_slider" class="d-flex align-items-center" sm="6">
      <div>
        <h1 class="c_yellow text-left">NUESTRA EMPRESA</h1>
        <h3 class="white-text text-left">CONOCE LA SOLIDEZ DE NUESTRA COMPAÑIA</h3>
        <h5 class="c_skyblue text-left">Respaldo, experiencia y solidez; somos la solución <br/> eficiente para sus giros y recargas</h5>
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
