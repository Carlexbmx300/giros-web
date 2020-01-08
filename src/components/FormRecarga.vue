

<template>

 <!-- <div class="step active" id="step-1"> mas cments
    <div class="tittle">
            <mdb-row>
            <mdb-col col="9">      
            <h4> <mdb-icon  icon="mobile-alt" /> Recarga de Celular</h4>
            </mdb-col>
            <mdb-col>
              <div class="giro">

                <a href="#" class="step__button step__button--next" data-to_step="2" data-step="1"> <mdb-icon icon="sync" class="icon"/>REALICE UN GIRO</a>
              </div>
            </mdb-col>
            </mdb-row>
    </div>
    <div class="input">
              <mdb-row>
                    <mdb-col>
                        <mdb-input label="Elige el pais" v-model="pais" outline />
                        
                        
                        <mdb-input label="Elige Operador" v-model="operador" outline/>
                        <mdb-input type="textarea" label="Resumen" :rows="5" outline/>
                    </mdb-col>
                    <mdb-col>
                            <mdb-input label="Celular" v-model="celular" outline/>
                            <mdb-input label="Elegir Plan" v-model="plan" outline/>
                            <mdb-input label="Metodo de pago" v-model="pago" outline />
                    </mdb-col>
              </mdb-row>
    </div>
            <div class="text-center">
                  <mdb-btn >Recargar Celular <mdb-icon icon="hand-holding-usd" /></mdb-btn>
            </div>
           
  </div>-->
  <!--<div class="step" id="step2">
    <div class="tittle">
            <mdb-row>
            <mdb-col col="9">      
            <h4> <mdb-icon  icon="sync" />Giros Internacionales</h4>
            </mdb-col>
            <mdb-col>
              <div class="giro">

                <a href=""> <mdb-icon icon="mobile-alt" class="icon"/>Recarga de Celular</a>
              </div>
            </mdb-col>
            </mdb-row>
    </div>
    <div class="input">
              <mdb-row class="small">
                    <mdb-col>
                        <mdb-input label="Lugar de envio" v-model="envio" size="sm" outline />
                     </mdb-col>
                    <mdb-col>
                            <mdb-input label="Agente de cambio" v-model="cambio" size="sm" outline />
                    </mdb-col>
                    <mdb-col>
                            <mdb-input label="Forma de pago" v-model="fpago"  size="sm" outline />
                    </mdb-col>
              </mdb-row>
              <mdb-row>
                 <mdb-col class="medium">
                        <mdb-input label="Dinero a enviar" v-model="dineroenvio" outline />
                     </mdb-col>
                    <mdb-col>
                            <mdb-input label="Destinatario recibe" v-model="recibe" outline />
                    </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input type="textarea" label="Resumen" :rows="5" outline/>
                </mdb-col>
                <mdb-col>
                  <h4>Total a pagar</h4>
                </mdb-col>
              </mdb-row>
    </div>
            <div class="text-center">
                  <mdb-btn >Recargar Celular <mdb-icon icon="hand-holding-usd" /></mdb-btn>
            </div>
           
  </div>-->
  
  <div id="step3" class="bg">
 <mdb-container >
    <mdb-row>
      <mdb-col>
      <div class="contenido">
          <h6 class="font-italic" >Somos una solucion de tiempo completo</h6>
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
 <div class="agente">
      <h5>Agentes Pagadores</h5>
    </div>
    <div class="imagenes">
      <img src="images/logo1.png" alt="">
      <img src="images/logo2.png" alt="">
      <img src="images/logo3.png" alt="">
      <img src="images/logo4.png" alt="">
      <img src="images/logo5.png" alt="">
    </div>
  </div>




</template>



<script>
  import { mdbInput,mdbContainer, mdbRow, mdbCol,mdbBtn,mdbSelect,mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon  } from 'mdbvue';
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