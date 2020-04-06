<template>
    

<mdb-container class="servicios-mid mt-3  pan position-relative ">
    <mdb-row class="h-100">
       
        <mdb-col xl="7" col="12" class="align-self-center ri">
             <mdb-row class="d-xl-none d-flex mt-3 mb-5">
            <mdb-col col="2" class="align-self-center float-right">
                <img src="images/IconoD1.png" alt="" srcset="">
            </mdb-col>
            <mdb-col col="10">   
                <h4>ENVIAR GIRO</h4>
            </mdb-col>
        </mdb-row>
            <div class="triangle-right d-xl-block d-none"></div>
            aqui va el stepper
             <mdb-row class=" mt-n4 d-xl-none d-block position-absolute">
                  <mdb-col xl="6" offsetXl="3" class="align-self-end" >
                    <div class="textbox ml-4 bg-azul">
                        <mdb-row>
                        <mdb-col col="5" class="align-self-center">
                            <p class="lp ml-3 mt-2 light">Total pagado</p>
                        </mdb-col>
                        <mdb-col col="7" class="text-left align-self-center ml-n3">
                        <p class="mt-2">$00000 COP</p>
                        </mdb-col>
                        </mdb-row>
                    </div>
                </mdb-col>
              </mdb-row>
        </mdb-col>
        
     
        <mdb-col xl="5" class="rd d-xl-block d-none">
          
            <mdb-row class="mt-5">
                <mdb-col col="12" class="mt-5 pt-4">
                    <h4 class="mt-5">Realiza tu recarga con nosotros</h4>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="8" offsetXl='2' class="text-center mt-3">
                     <p class="text-white">
                         Recargar nunca a sido 
                        mas fácil, desde tu 
                        celular o computadora 
                        personal
                    </p>
                </mdb-col>
            </mdb-row>
           <mdb-row>
               <mdb-col col="12" class="mt-4 mb-5">
                    <img class="btn_giro" src="images/btngrecargaB.png" alt="">
                    <button class="button_yellow ml-4 mt-4">¡Quiero hacer una RECARGA!</button>
               </mdb-col>
           </mdb-row>
            <mdb-row class="mt-5 pt-1">
                <mdb-col col='12' class="mt-n2">
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
     
  }
</script>