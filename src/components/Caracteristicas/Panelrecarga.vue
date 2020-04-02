<template>
<mdb-container class="bg_bluesky bg_bluesky_image padmid5" fluid>
  <mdb-container>
      <mdb-row class="justify-content-center">
      <img class="img-fluid" src="images/capturaCC.jpg" alt="">
    </mdb-row>
      <mdb-row>
      <mdb-col xl="12">
        <h3 class='c_yellow h3padding'>¿Porque escoger giros Express?</h3>
        <p class="text-center white-text">Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
        </mdb-col>
    </mdb-row>
  </mdb-container>
</mdb-container>
</template>
<script>
import { mdbInput, mdbContainer, mdbRow, mdbCol, mdbBtn, mdbSelect, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';
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
