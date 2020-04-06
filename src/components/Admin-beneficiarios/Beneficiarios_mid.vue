<template>
   
 
    
    <mdb-container class="servicios-mid pan pt-5 mt-xl-0 mt-5">
             <div class="btnpanel con d-xl-none d-flex mt-n5 ml-n3">
              <mdb-row class="ml-1 align-self-center">
                <mdb-col col="6">
                  <a href="admin-giro"><img class="btnp1" src="images/BPanel1.png" alt=""></a>

                </mdb-col>
                <mdb-col col="6">
                  <a href="admin-recarga"><img src="images/BPanel2.png" alt=""></a>
                </mdb-col>
              </mdb-row>
            </div>

            <mdb-row class="border-bottom border-primary mb-3">
               
                <mdb-col col="12">
                    <button class="confirmar btnplus float-right mt-xl-n4 mb-xl-3 mt-2 mb-2" @click="mostrar= !mostrar">
                        <mdb-row>
                            <mdb-col col="2" class="ml-2 align-self-center">
                                <mdb-icon icon="plus" />
                            </mdb-col>
                            <mdb-col col="10" class="ml-n2 mt-2">
                                <p>AGREGAR BENEFICIARIO</p>
                            </mdb-col>
                        </mdb-row>
                    </button>
                </mdb-col>
                
            </mdb-row>

            <div  v-for="lista in nombres" :key="lista">
            <mdb-row class="lista_ben ml-2 mr-2 mb-4" >
                <mdb-col xl="6" col="6" class="align-self-center">
                
                        <mdb-row>
                            <mdb-col col="2" class="align-self-center">
                                <img class="p_azul" src="images/PersonaAzul.png" alt="">
                            </mdb-col>
                            <mdb-col col="10" class="">
                                <p class="azul mt-3">{{lista.nombre}}</p>
                            </mdb-col>
                        </mdb-row>
                 
                </mdb-col>
                <mdb-col xl="3" class="border-left border-primary d-xl-block d-none" >
                        <p class="azul nro mt-3">Documento de identidad</p>
                        <p class="mt-n3">{{lista.documento}}</p>
                </mdb-col>
                <mdb-col xl="3" col="6" class="operaciones text-center">
                    <mdb-row>
                        <mdb-col col="3" class="mt-3">
                            <img class="ojo" src="images/IconoOP1.png" alt="">
                            <p class="ml-2">Ver info</p>
                        </mdb-col>
                        <mdb-col col="3" class="mt-3">
                            <img src="images/IconoOP2.png" alt="">
                            <p>Enviar giro</p>
                        </mdb-col>
                        <mdb-col col="3" class="mt-3">
                            <img src="images/IconoOP3.png" alt="">
                            <p class="text-center">Editar informacion</p>
                        </mdb-col>
                        <mdb-col col="3" class="mt-3">
                            <img src="images/IconoOP4.png" alt="">
                            <p>Eliminar</p>
                        </mdb-col>
                    </mdb-row>
                </mdb-col>
            </mdb-row>
  </div>
  <mdb-row class="align-items-end">
    <div class="page mt-4">
                  <mdb-pagination circle>
                    <mdb-page-item  class="pagina">Paginas</mdb-page-item>
                    <!--<mdb-page-nav prev disabled></mdb-page-nav>-->
                    <mdb-page-item>1</mdb-page-item>
                    
                 <!--   <mdb-page-nav next></mdb-page-nav>-->
                 <!--   <mdb-page-item>Last</mdb-page-item>-->
                  </mdb-pagination>
                </div>
           
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