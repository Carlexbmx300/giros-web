<template>
<div class="slider">
    <mdb-container fluid>
        <mdb-row>
            <mdb-col xl="8" class="text-left">
                <h5 class="mt-5">Bienvenido a su</h5>
                <h3 class="mt-n2">DASHBOARD</h3>
            </mdb-col>
            <mdb-col xl="4" class="align-self-end">
                 <img class="logo" src="images/LogoW.png" alt="">
            </mdb-col>
        </mdb-row>
        <mdb-row class="ml-5 mr-3 mt-5 mb-5" >
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="BUSCAR TRANSFERENCIA" aria-label="Username" aria-describedby="basic-addon">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon">
                     <mdb-icon icon="search" />
                    </span>
                    </div>
                    
                </div>
        </mdb-row>


    <mdb-row class="mt-5">
        
          <mdb-carousel :items="3" controlls   slide  class="mt-5" >
                <template #1>
                    <div class="item1">
                        <h6 class="text-left w-50 float-right mt-xl-5 mr-xl-0 mr-2 mt-2">SOMOS LA EMPRESA DE GIROS CON MAYOR VISION</h6>
                        <div class="boton mb-5 float-right mr-5">
                <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
                 </div>
                    </div>
                
                    </template>
                <template #2> 
                    <div class="item1">
                        <h6 class="text-left w-50 float-right mt-xl-5 mr-xl-0 mr-2 mt-2">SOMOS LA EMPRESA DE GIROS CON MAYOR VISION</h6>
                        <div class="boton mb-5 float-right mr-5">
                <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
                 </div>
                    </div>
                    </template>
                <template #3> 
                    <div class="item1">
                        <h6 class="text-left w-50 float-right mt-xl-5 mr-xl-0 mr-2 mt-2">SOMOS LA EMPRESA DE GIROS CON MAYOR VISION</h6>
                        <div class="boton mb-5 float-right mr-5">
                <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
                 </div>
                    </div>
                </template>
            </mdb-carousel>
     
    </mdb-row>
    <mdb-row class="mt-n5">
            <mdb-carousel :items="3" controlls   slide  class="mt-5 sombra" >
                <template #1>
                    <div class="item2">
                        <mdb-row class="ml-3 pt-2">
                            <mdb-col col="2" class="align-self-center">
                                <img src="images/IconD6.png" alt="">
                            </mdb-col>
                            <mdb-col col="10" class="text-left">
                                <h5 class="h5-responsive">AGENTES PAGADORES PARA COLOMBIA</h5>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row>
                            <mdb-col col="12">
                            <img class="logo mt-3" src="images/logo1.png" alt="">
                            <p>Cambio para el dia 25/10/2019</p>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="ml-5">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">Moneda</label>
                                     <country-flag country='col' size="small" class="ml-5"/>
                                 <select class="browser-default custom-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1"></option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </mdb-col>
                        </mdb-row>
                         <mdb-row class="ml-5 mt-4">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">DConvertir a</label>
                                
                                </div>
                            </mdb-col>
                        </mdb-row>
                    </div>
                
                    </template>
                <template #2> 
                    <div class="item2">
                        <mdb-row class="ml-3 pt-2">
                            <mdb-col col="2" class="align-self-center">
                                <img src="images/IconD6.png" alt="">
                            </mdb-col>
                            <mdb-col col="10" class="text-left">
                                <h5 class="h5-responsive">AGENTES PAGADORES PARA COLOMBIA</h5>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row>
                            <mdb-col col="12">
                            <img class="logo mt-3" src="images/logo1.png" alt="">
                            <p>Cambio para el dia 25/10/2019</p>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="ml-5">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">Moneda</label>
                                     <country-flag country='col' size="small" class="ml-5"/>
                                 <select class="browser-default custom-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1"></option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </mdb-col>
                        </mdb-row>
                         <mdb-row class="ml-5 mt-4">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">DConvertir a</label>
                                
                                </div>
                            </mdb-col>
                        </mdb-row>
                    </div>
                    </template>
                <template #3> 
                    <div class="item2">
                        <mdb-row class="ml-3 pt-2">
                            <mdb-col col="2" class="align-self-center">
                                <img src="images/IconD6.png" alt="">
                            </mdb-col>
                            <mdb-col col="10" class="text-left">
                                <h5 class="h5-responsive">AGENTES PAGADORES PARA COLOMBIA</h5>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row>
                            <mdb-col col="12">
                            <img class="logo mt-3" src="images/logo1.png" alt="">
                            <p>Cambio para el dia 25/10/2019</p>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="ml-5">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">Moneda</label>
                                     <country-flag country='col' size="small" class="ml-5"/>
                                 <select class="browser-default custom-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1"></option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </mdb-col>
                        </mdb-row>
                         <mdb-row class="ml-5 mt-4">
                            <mdb-col xl="12" class="justify-content-center ml-4">
                                <div class="textbox">
                                    <label for="textbox">DConvertir a</label>
                                
                                </div>
                            </mdb-col>
                        </mdb-row>
                    </div>
                </template>
            </mdb-carousel>
    </mdb-row>






      
    </mdb-container>




   
</div>
</template>

<script>
 import { mdbCarousel, mdbContainer, mdbRow, mdbCol,mdbIcon } from 'mdbvue';
 import CountryFlag from 'vue-country-flag'
export default {
    

    name: 'CarouselPage',
    components: {
      mdbCarousel,
       mdbContainer, 
       mdbRow, 
       mdbCol,
       mdbIcon,
       CountryFlag
    }
}
</script>