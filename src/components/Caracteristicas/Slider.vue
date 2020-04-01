<template>
<mdb-container class="bg_slider" fluid>
  <mdb-container class="h-100" fluid>
  <mdb-row class="container_slider h-100">
    <mdb-col sm="6">
      </mdb-col>
    <mdb-col class="d-flex align-items-center" sm="6">
      <div>
        <h6 class="font-italic">Somos una solucion de tiempo completo</h6>
        <h1>¿QUE DESEAS HACER?</h1>
        <h4>Seleciona la opcion que desea usar</h4>
  <div class="button">
          <img src="images/tituo1.png" alt="">
          <img src="images/titulo2.png" alt="">
        </div>
      </div>
    </mdb-col>
  </mdb-row>
</mdb-container>
</mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: "Input",
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
