
<template>
<mdb-container class="container-logos-main" fluid>
  <mdb-container class="container-logos">
    <h3 class='titulo h3padding'>Agentes Pagadores</h3>
    <mdb-row>
      <mdb-col sm="2dot4"> <img src="images/logo1.png" class="img-fluid" alt=""></mdb-col>
      <mdb-col sm="2dot4"><img src="images/logo2.png" class="img-fluid" alt=""></mdb-col>
      <mdb-col sm="2dot4"><img src="images/logo3.png" class="img-fluid" alt=""></mdb-col>
      <mdb-col sm="2dot4"><img src="images/logo4.png" class="img-fluid" alt=""></mdb-col>
      <mdb-col sm="2dot4"> <img src="images/logo5.png" class="img-fluid" alt=""></mdb-col>

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
