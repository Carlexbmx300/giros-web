<template>
    <div class="modalf">
        <mdb-container fluid>
            <div class="titulomodal">
                 <div class="triangle-bottom">

                    </div>
            <mdb-row>
                
                   
                    <mdb-col col="1" class=" ml-2 align-self-center">
                        <img src="images/IconoF1.png" alt="">
                    </mdb-col>
                    <mdb-col col="10">
                        <h4 class="mt-1 ml-xl-n3 text-left h4-responsive">ACTUALIZAR FOTOGRAFIA</h4>
                    </mdb-col>
                    <mdb-col col="1" class="ml-n3">
                        <div class="cross">
                              <a>X</a>
                        </div>
                      
                    </mdb-col>
               
            </mdb-row>
             </div>
             <div class="contenidomodal mt-5 pb-3">
                 <mdb-row>
                     <mdb-col xl="6" col="12" class="align-self-center ">
                         <h4 class="t-subido d-xl-none d-block text-left">AGREGA UNA FOTO</h4>
                         <p class="small text-left">
                             Le recomendamos usar una fotografia de maximo 1 mb de 500 x 500px. La foto debe ser frontal y nitida.
                         </p>
                     </mdb-col>
                     <mdb-col xl="6" col="12" class="borde-col">
                         <mdb-row>
                             <mdb-col col="12">
                                 <img src="images/foto.png" alt="">
                             </mdb-col>
                             
                         </mdb-row>
                         <mdb-row  class="w-75 ">
                             <mdb-col col="12" class="borde-file pb-2 ml-5">
                             <div class="input-file float-left ml-n3">
                                <input type="file" name="" id="foto">
                                <p class="pt-2" id="texto" for="foto">Subir archivo </p>
                            </div>
                                
                             </mdb-col>
                         </mdb-row>
                          <mdb-row class="w-75">
                              <p class=" t-subido text-left ml-5 mt-4 small">Archivo subido</p>
                                <button class="confirmar float-left ml-5  mb-5 w-75">
                                ACTUALIZAR FOTOGRAFIA
                                </button>
                          </mdb-row>

                      
                          
                       
                         

                     </mdb-col>
                 </mdb-row>
             </div>
        </mdb-container>
    </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,  mdbInput, mdbBtn} from 'mdbvue';
export default {
  
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
    
          mdbInput,
           mdbBtn,
        
    },
    data() {
      return {
        input:''
      };
    }
    
    
}
</script>