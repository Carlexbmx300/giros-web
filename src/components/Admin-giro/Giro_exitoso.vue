<template>
    

<mdb-container class="servicios-mid pan mt-3  ">
   <mdb-row class="pt-3">
       <mdb-col col="4">
           <img class="w-75 h-100 check " src="images/check.png" alt="">
       </mdb-col>
       <mdb-col col="8" class="align-self-center ">
         <h4 class="float-left text-left ml-n4">GIRO ENVIADO CORRECTAMENTE</h4>
       </mdb-col>
   </mdb-row>

    <mdb-row class="mt-5 border-bottom border-top pt-3 pb-2" >
    
     <mdb-col xl="6">
       <p class="azul text-left">
         Dinero a enviar
       </p>
         <div class="cex mt-n3">
           <p class="pt-3 text-left ml-2">
             Tipo de cambio: COP a CLP
           </p>
           <p class="mt-n2 text-left ml-2">
             Monto a enviar: 1200000 COP
           </p>
           <p class="pb-3 mt-n2 text-left ml-2">
             Comision: 7.792 COP
           </p>
         </div>
         
      
     </mdb-col>

     <mdb-col xl="6">
        <p class="azul text-left">
         Sera enviado a
       </p>
         <div class="cex mt-n3">
           <p class="pt-3 text-left ml-2">
             Pais: COLOMBIA
           </p>
          
           <p class="pb-3 mt-n2 text-left ml-2">
             Ciudad: MEDELLIN
           </p>
         </div>
     </mdb-col>
    
          <mdb-col xl="6">
            <p class="azul text-left">
              Agente pagador y transferencia
            </p>
              <div class="cex mt-n3">
                <p class="pt-3 text-left ml-2">
                 Agente pagador: BANCOLOMBIA
                </p>
                
                <p class="pb-3 mt-n2 text-left ml-2">
                  Metodo: DEPOSITO
                </p>
              </div>
          </mdb-col>
          <mdb-col xl="6">
              <p class="azul text-left">
                Datos enviante
              </p>
                <div class="cex mt-n3">
                  <p class="pt-3 text-left ml-2">
                    Nombres: LEANDRO GONZALES
                  </p>
                  <p class="mt-n2 text-left ml-2">
                    CC.71797450
                  </p>
                  <p class="pb-3 mt-n2 text-left ml-2">
                    Mobile: 3226601205
                  </p>
                </div>
          </mdb-col>

     <mdb-col xl="6">
       <p class="azul text-left">
                Datos beneficiario
              </p>
                <div class="cex mt-n3">
                  <p class="pt-3 text-left ml-2">
                    Nombres: LEANDRO GONZALES
                  </p>
                  <p class="mt-n2 text-left ml-2">
                    CC.71797450
                  </p>
                  <p class="pb-3 mt-n2 text-left ml-2">
                    Mobile: 3226601205
                  </p>
                </div>
     </mdb-col>
     <mdb-col xl="6">
        <div class="textbox ml-4 bg-azul mt-5">
                        <mdb-row>
                        <mdb-col col="5" class="align-self-center">
                            <p class="lp ml-3 mt-2 light">Total pagado</p>
                        </mdb-col>
                        <mdb-col col="7" class="text-left align-self-center ml-n3">
                        <p class="mt-2"> $267.532 COP</p>
                        </mdb-col>
                        </mdb-row>
        </div>
     </mdb-col>
   </mdb-row>
  <p class="mt-3 text-left ml-xl-5">Gracias por usar <span class="font-weight-bold">Giros Express </span> para enviar su dinero,  deseo:</p>

  <mdb-row class="ml-xl-5 mr-xl-5">
    <mdb-col xl="3" col="6">
      <mdb-row>
        <mdb-col xl="1">
          <img class="ico_ex" src="images/enviar.png" alt="">
        </mdb-col>
        <mdb-col xl="8">
            <a href="" class="pex">ENVIAR GIRO</a>
        </mdb-col>
      </mdb-row>
    </mdb-col>
    <mdb-col xl="3" col="6">
      <mdb-row>
        <mdb-col xl="1">
          <img class="ico_ex" src="images/IconD1.png" alt="">
        </mdb-col>
        <mdb-col xl="8">
            <a href="" class="pex">ENVIAR GIRO</a>
        </mdb-col>
      </mdb-row>
    </mdb-col>
    <mdb-col xl="3" col="6">
      <mdb-row>
        <mdb-col xl="1">
          <img class="ico_ex" src="images/imprimir.png" alt="">
        </mdb-col>
        <mdb-col xl="8">
            <a href="" class="pex">ENVIAR GIRO</a>
        </mdb-col>
      </mdb-row>
    </mdb-col>
    <mdb-col xl="3" col="6">
      <mdb-row>
        <mdb-col xl="1">
          <img  class="ico_ex" src="images/carta.png" alt="">
        </mdb-col>
        <mdb-col xl="8">
            <a href="" class="pex">ENVIAR GIRO</a>
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