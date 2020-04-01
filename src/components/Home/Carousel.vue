
<template>
</carousel>
<mdb-container class="container-logos-main" fluid>
  <mdb-container class="container-logos">
    <h3 class='titulo h3padding'>Agentes Pagadores</h3>
<carousel 
  :items = 5
  :autoplay = true 
  :nav = false
  :dots = true
  :loop = true
  :margin = "30"
  :autoplaySpeed = true
  :autoplayTimeout = "5000"
  :responsive = "{
     0:{
       items:1
       },
     600:{
         items:4
         },
     1000:{
           items:5
           }
  }"
    :autoWidth= false
>
<img src="images/logo1.png" alt="">
<img src="images/logo2.png" alt="">
<img src="images/logo3.png" alt="">
<img src="images/logo4.png" alt="">
<img src="images/logo5.png" width="70px" alt="">
</carousel>

  </mdb-container>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbSelect } from 'mdbvue';
import carousel from 'vue-owl-carousel';
export default {
  name: "Input",
  components: {
    mdbContainer,
    carousel,
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
