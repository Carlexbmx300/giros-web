<template>
<mdb-container class="bg_lineas" fluid>
  <mdb-container>
    <mdb-row>
      <mdb-col xl="12">
        <h3 class='c_blue h3padding'>¿Porque escoger giros Express?</h3>
        <p class="text-center">Transferencias internacionales, giros y remesas rápidas, transparentes y  hasta 8 veces más <br/> económicas que la competencia, en un servicio <span class="font-weight-bold">24/7</span> </p>
        <p></p>
      </mdb-col>
    </mdb-row>
    <mdb-row class="justify-content-center">
      <img class="img-fluid" src="images/fondoSiluetaPC.png" alt="">
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
