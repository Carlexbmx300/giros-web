<template>
<mdb-container id="step3" class="bg" fluid>
  <mdb-row>
    <mdb-col>
      <div class="contenido">
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
