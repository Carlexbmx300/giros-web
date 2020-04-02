<template>
<div class="home">
  <Header />
  <Main />
  <Lista />  
  <Card />
  <Transfiere />
  <Ahorrar />
  <Footerform />
  <Footersocial />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Registro/Main.vue'
import Lista from '@/components/Login/Lista.vue'
import Card from '@/components/Home/Card.vue'
import Transfiere from '@/components/Home/Transfiere.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    Main,
    Lista,  
    Card,
    Transfiere,
    Ahorrar,
    Footerform,
    Footersocial,
    Footer

  }
}
</script>
