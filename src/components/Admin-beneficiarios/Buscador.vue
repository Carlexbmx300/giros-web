<template>
<mdb-container fluid >
    <mdb-row class="buscador mt-5 mb-2 d-xl-flex d-none">
        <mdb-col xl="3" >
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text bg-white" id="basic-addon">
                    <mdb-icon icon="search" />
                </span>
                </div>
                <input type="text" class="form-control form-control-sm" placeholder="CEDULA" aria-label="Username" aria-describedby="basic-addon">
            </div>
        </mdb-col>  
         <mdb-col xl="3" class="ml-n4">
             <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text bg-white" id="basic-addon">
                    <img  src="images/semaforo.png" alt="">
                               </span>
                </div>
                <input type="text" class="form-control form-control-sm" placeholder="RECIBIDO" aria-label="Username" aria-describedby="basic-addon">
            </div>
        </mdb-col> 
         <mdb-col xl="2" class="ml-n4 mr-4">
             <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text bg-white" id="basic-addon">
                 <mdb-icon far icon="calendar-check" />
                </span>
                </div>
                <input type="text" class="form-control form-control-sm" placeholder="FECHA DESDE" aria-label="Username" aria-describedby="basic-addon">
            </div>
        </mdb-col> 
         <mdb-col xl="3" class="ml-4">
             <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text bg-white" id="basic-addon">
                      <mdb-icon far icon="calendar-check" />
                </span>
                </div>
                <input type="text" class="form-control form-control-sm" placeholder="FECHA HASTA" aria-label="Username" aria-describedby="basic-addon">
            </div>
        </mdb-col> 
        <mdb-col xl="1" class="mr-n2 ml-2" >
            <button class="float-right">filtrar</button>
        </mdb-col>
         
    </mdb-row>
</mdb-container>
    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,mdbIcon} from 'mdbvue';




  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        mdbIcon
       
    }
  }
</script>