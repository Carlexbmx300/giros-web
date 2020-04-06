<template>
         <div class="servicios-mid pt-4 pb-4 mt-5">
              <div class="recarga ">
              <mdb-row class="">
                
                <mdb-col xl="1" col="1" class="align-self-center ml-xl-2 mr-xl-n2 ml-1">
                  <img class="cel" src="images/IconD1.png" alt="">
                </mdb-col>
                <mdb-col xl="9" col="5" class="text-left mt-xl-3 mt-3">
                  <h4>RECARGA</h4>
                  <p class="mt-n3">01-05-2019</p>
                </mdb-col>
                <mdb-col xl="2" col="4">
                  <button class="btn-detalle mt-xl-3 ml-xl-n5 mt-3">detalle</button>
                </mdb-col>
               
              </mdb-row>
               </div>


               <div class="giro-enviado mt-4">
                 <mdb-row>
                    <mdb-col xl="1" col="1" class="align-self-center ml-xl-2 mr-xl-n2 ml-1">
                    <img  src="images/IconD2.png" alt="">
                    </mdb-col>
                    <mdb-col xl="9" col="5" class="text-left mt-xl-3">
                    <h4>GIRO ENVIADO</h4>
                    <p class="mt-n3">08-05-2019</p>
                    </mdb-col>
                    <mdb-col xl="2" col="4">
                    <button class="btn-detalle mt-3 ml-xl-n5">detalle</button>
                    </mdb-col>
                 </mdb-row>
                 <mdb-row class="mt-xl-3 ml-3 pb-5">
                   <mdb-col xl="4" >
                     <div class="textbox ml-xl-3 mb-xl-0 mb-3">
                       <label for="textbox">beneficiario</label>
                       <p class="mt-3">Leandro Gonzales</p>
                     </div>
                   </mdb-col>
                    <mdb-col xl="4">
                     <div class="textbox mb-xl-0 mb-3">
                       <label for="textbox">Lugar de envio</label>
                       <p class="mt-3">  COLOMBIA  <country-flag country='col' size="small" class="ml-5"/></p>
                     </div>
                   </mdb-col>
                    <mdb-col xl="4">
                     <div class="textbox ml-xl-n3 mb-xl-0 ">
                       <label for="textbox">Agente de cambio</label>
                       <p class="mt-3">BANCOLOMBIA</p>
                     </div>
                   </mdb-col>
                   <mdb-col xl="4">
                     <div class="textbox ml-xl-3 mt-3">
                       <label for="textbox">Documento CC</label>
                       <p class="mt-3">71797450</p>
                     </div>
                   </mdb-col>
                   <mdb-col xl="4">
                     <div class="textbox mt-3">
                       <label for="textbox">Lugar de envio</label>
                       <p class="mt-3">ANTIOQUIA</p>
                     </div>
                   </mdb-col>
                   <mdb-col xl="4">
                     <div class="textbox ml-xl-n3 mt-3">
                       <label for="textbox">Tipo de transeferencia</label>
                       <p class="mt-3">Deposito</p>
                     </div>
                   </mdb-col>
                   <mdb-col xl="4">
                     <div class="textbox ml-xl-3 mt-3 resumen">
                       <label for="textbox">Resumen</label>
                       <p class="mt-3">tipo de cambio: COP a CLP</p>
                       <p class="mt-n3">Monto a enviar: 1200000 COP </p>
                       <p class="mt-n3">Comision: 7.792 COP</p>
                     </div>
                   </mdb-col>
                   <mdb-col xl="4">
                     <div class="textbox mt-3 pagado">
                       <label for="textbox">Total Pagado</label>
                       <p class="mt-3">267.532 <span>COP</span></p>
                     </div>
                   </mdb-col>
                 </mdb-row>
               </div>
               <div class="giro-recibido mt-4 ">
                 <mdb-row>
                    <mdb-col xl="1" col="1" class="align-self-center ml-xl-2 mr-xl-n2 ml-1">
                   <img src="images/IconD3.png" alt="">
                    </mdb-col>
                    <mdb-col xl="9" col="5" class="text-left mt-xl-3">
                    <h4>GIRO RECIBIDO</h4>
                    <p class="mt-n3">08-03-2019</p>
                    </mdb-col>
                    <mdb-col xl="2" col="4">
                    <button class="btn-detalle mt-xl-3 ml-xl-n5 mt-3">detalle</button>
                    </mdb-col>
                 </mdb-row>
               </div>
                <div class="page mt-4">
                  <mdb-pagination circle>
                    <mdb-page-item  class="pagina">Paginas</mdb-page-item>
                    <!--<mdb-page-nav prev disabled></mdb-page-nav>-->
                    <mdb-page-item>1</mdb-page-item>
                    <mdb-page-item>2</mdb-page-item>
                    <mdb-page-item>3</mdb-page-item>
                 <!--   <mdb-page-nav next></mdb-page-nav>-->
                 <!--   <mdb-page-item>Last</mdb-page-item>-->
                  </mdb-pagination>
                </div>
            </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbPagination, mdbPageItem, mdbPageNav } from 'mdbvue';
import CountryFlag from 'vue-country-flag'

  export default {
    name: 'PageLoader',
    components: {
      mdbPagination,
      mdbPageItem,
      mdbPageNav,
      mdbContainer, 
        mdbRow, 
        mdbCol,
        CountryFlag,
      
    }
  }
</script>