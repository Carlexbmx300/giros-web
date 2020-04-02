<template>
<mdb-container class="bg_slider" fluid>
  <mdb-container class="h-100" fluid>
  <mdb-row class="container_slider h-100">
    <mdb-col sm="6">
      </mdb-col>
    <mdb-col id="main_slider" class="d-flex align-items-center" sm="6">
      <div>
        <h1 class="c_yellow text-left">CARACTERISTICAS A LA MEDIDA</h1>
        <h5 class="c_skyblue text-left w-responsive">Conocemos sus necesidades y por ello hemos realizado una plataforma que le permitira tener el contro y AHORRAR TIEMPO</h5>
           <div class="button_yellow_container padmid text-left">
                <mdb-btn class="black-text">¡Quiero hacer un <span class="font-weight-bold">GIRO HOY!</span></mdb-btn>
                 </div>
                 </div>
 
    </mdb-col>
  </mdb-row>
</mdb-container>
</mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
export default {
  name: "Main",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data() {
    return {
      value: ''

    };
  }
}
</script>
