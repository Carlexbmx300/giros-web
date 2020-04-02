<template>
    <div class="Nosotros">
        <Header/>        
         <Main/>
         <Card/> 
         <NuestraUI/>      
         <Lista/>
         <Transfiere/>
         <Ahorrar/>
         <Footerform/>
         <Footersocial/>
         <Footer/>
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Partial/Header.vue'
import Main from '@/components/Nosotros/Main.vue'
import Card from '@/components/Nosotros/Card.vue'
import NuestraUI from '@/components/Nosotros/NuestraUI.vue'
import Lista from '@/components/Home/Lista.vue'
import Transfiere from '@/components/Home/Transfiere.vue'
import Ahorrar from '@/components/Home/Ahorrar.vue'
import Footerform from '@/components/Partial/Footerform.vue'
import Footersocial from '@/components/Partial/Footersocial.vue'
import Footer from '@/components/Partial/Footer.vue'


export default {
  name: 'Nosotros',
  components: {
      Header,
      Main,
      Card,
      NuestraUI,
      Lista,
      Transfiere,
      Ahorrar,
      Footerform,
      Footersocial,
      Footer
    
   

  }
}
</script>