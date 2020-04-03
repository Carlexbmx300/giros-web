<template>
    

<mdb-container class="servicios-mid pan ">
    <mdb-row class="h-100">
        <mdb-col xl="7" class="align-self-center ri">
            <div class="triangle-right"></div>
            aqui va el stepper
        </mdb-col>
     
        <mdb-col xl="5" class="rd">
          
            <mdb-row class="mt-5">
                <mdb-col col="12" class="mt-5 pt-4">
                    <h4 class="mt-5">Realiza tus giros internacionales</h4>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="8" offsetXl='2' class="text-center mt-3">
                     <p class="text-white">
                         Envia dinero facilmente 
                         a cualquier lugar
                    </p>
                </mdb-col>
            </mdb-row>
           <mdb-row>
               <mdb-col col="12" class="mt-4 mb-5">
                    <img class="btn_giro" src="images/btngiroB.png" alt="">
                    <button class="button_yellow ml-4 mt-4">¡Quiero hacer un Giro!</button>
               </mdb-col>
           </mdb-row>
            <mdb-row class="mt-5 pt-1">
                <mdb-col col='12' class="mt-3">
                      <img class="pareja" src="images/lineasR.png" alt="">
                </mdb-col>
            </mdb-row>
         
            
        </mdb-col>
      
    </mdb-row>
            
             

        
    </mdb-container>

</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbPagination, mdbPageItem, mdbPageNav} from 'mdbvue';
import panelmid from '@/components/Admin-Panel/Panel_mid.vue'


  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        mdbIcon,
        panelmid,
        mdbPagination, 
        mdbPageItem, 
        mdbPageNav
       
         
          
    }
     ,
     el:'#lista',
      data() {
                
      return {
        link: 'http://linkderegistroparausuarios',
        nombres:[{nombre:'Leandro Alberto Gonzales Claros',documento:71797450},
                        {nombre:'Andrea Jimenez Ortega', documento:87999999} ],

        mostrar:false,
        ocultar:false,
        
      };
    }
  }
</script>