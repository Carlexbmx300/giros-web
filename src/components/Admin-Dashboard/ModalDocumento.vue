<template>
    <div class="modalf modald">
        <mdb-container fluid>
            <div class="titulomodal">
                 <div class="triangle-bottom">

                    </div>
            <mdb-row>
                
                   
                    <mdb-col col="1" class=" ml-2 align-self-center">
                        <img src="images/IconoF2.png" alt="">
                    </mdb-col>
                    <mdb-col col="10">
                        <h4 class="mt-1 ml-xl-n3 text-left h4-responsive">SUBIR DOCUMENTO</h4>
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
                     <mdb-col xl="4" col="12" class="align-self-center ">
                         
                         <p class="small text-left">
                            Debe subir su documento de identidad tanto la parte frontal como la reversa; la informacion debe ser totalmente legible
                         </p>
                     </mdb-col>
                     <mdb-col xl="8" col="12" class="borde-col d-xl-block d-none">
                         <mdb-row>
                             <mdb-col xl="6">
                                    <mdb-row>
                                        <mdb-col col="12" class="mb-3">
                                            <img src="images/documento.png" alt="">
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
                                           
                                    </mdb-row>
                             </mdb-col>
                             <mdb-col xl="6">
                                 <mdb-row>
                                    <mdb-col col="12">
                                        <img  class="mb-3" src="images/documento.png" alt="">
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
                                        
                                </mdb-row>
                                
                             </mdb-col>
                             <button class="confirmar float-left ml-5  mb-5 w-xl-25 w-75">
                                        ACTUALIZAR FOTOGRAFIA
                             </button>
                         </mdb-row>
                         

                      
                          
                       
                         

                     </mdb-col>
                 </mdb-row>
                 <!-- Responsive del modal de documentos-->
                 <mdb-row class="d-xl-none">
                     <mdb-col col="4">
                         <mdb-row>
                             <mdb-col col="4">
                                 <div class="docs">
                                    <p>1</p>
                                 </div>
                             </mdb-col>
                             <mdb-col col="6">
                                 <p class="small">Agregar frente</p>
                             </mdb-col>
                         </mdb-row>
                         
                     </mdb-col>
                     <mdb-col col="3">
                         <mdb-row>
                             <mdb-col col="4">
                                 <div class="docs">
                                    <p>2</p>
                                 </div>
                             </mdb-col>
                             <mdb-col col="6">
                                 <p class="small">Agregar reverso</p>
                             </mdb-col>
                         </mdb-row>
                     </mdb-col>
                 </mdb-row>
                 <mdb-row class="d-xl-none">
                     <mdb-col col="2" class="mt-5">
                         <img  class="arrow" src="images/atras.png" alt="">
                     </mdb-col>
                     <mdb-col col="8">
                          <mdb-row>
                                    <mdb-col col="12">
                                        <img  class="mb-3 ml-n3" src="images/documento.png" alt="">
                                    </mdb-col>
                             
                                </mdb-row>
                                <mdb-row  class="w-75 ">
                                    <mdb-col col="12" class="borde-file pb-2 ">
                                    <div class="input-file float-left ml-n3">
                                        <input type="file" name="" id="foto">
                                        <p class="pt-2" id="texto" for="foto">Subir archivo </p>
                                    </div>
                                        
                                    </mdb-col>
                                </mdb-row>
                                <mdb-row class="w-75">
                                    <p class=" t-subido text-left mt-4 small">Archivo subido</p>
                                        
                                </mdb-row>
                     </mdb-col>
                     <mdb-col col="2" class="mt-5">
                         <img  class="arrow" src="images/adelante.png" alt="">
                     </mdb-col>
                 </mdb-row>
                  <button class="confirmar  d-xl-none  mb-5 w-xl-25 w-75">
                                        ACTUALIZAR FOTOGRAFIA
                  </button>
                  <!--Hasta este punto-->
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