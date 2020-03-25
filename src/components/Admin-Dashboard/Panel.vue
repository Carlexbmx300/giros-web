<template>
    <div class="servicios">
        <mdb-container fluid>
             <div class="titulo mt-5 mb-3">
                <mdb-row>
                  <mdb-col xl="1" col="1">
                    <img class="ml-n3" src="images/IconD5.png" alt="">
                  </mdb-col>
                  <mdb-col xl="5" col="11" class="text-xl-left align-self-center ml-n1">
                    <h5 class="h5-responsive">MI CUENTA</h5>
                  </mdb-col>
                
                  </mdb-row>
              </div>
          
            <div class="servicios-mid pan pt-5">
                <mdb-row>
                    <mdb-col xl="3">
                        <div class="aside ml-4">
                              <div class="profile" >
                                    <img  src="images/profile.png" alt="">
                                    <div class="btn-profile mt-3 mb-4">
                                      <button>
                                      <mdb-row>
                                        <mdb-col col="2">
                                        <img src="images/IconP1.png" alt="">
                                        </mdb-col>
                                        <mdb-col col="8">
                                        ACTUALIZAR FOTOGRAFIA 
                                        </mdb-col>
                                      </mdb-row>
                                        </button>
                                    </div>
                                    <div class="documento-profile">
                                      <mdb-row>
                                        <mdb-col col="2" class="ml-n3 align-self-center">
                                          <img  class="arrow" src="images/atras.png" alt="">
                                        </mdb-col>
                                        <mdb-col col="8" class="ml-n2">
                                          <img class="doc" src="images/documento.png" alt="">
                                        </mdb-col>
                                        <mdb-col col="2" class="ml-3 align-self-center">
                                          <img class="arrow" src="images/adelante.png" alt="">
                                        </mdb-col>
                                      </mdb-row>
                                        <div class="btn-profile mt-4 mb-2">
                                            <button>
                                            <mdb-row>
                                              <mdb-col col="2">
                                              <img src="images/IconP2.png" alt="">
                                              </mdb-col>
                                              <mdb-col col="8" class="text-left">
                                              SUBIR DOCUMENTO
                                              </mdb-col>
                                              </mdb-row>
                                              </button>
                                        </div>
                                        <mdb-row>
                                          <p class="text-left ml-4 w-75">
                                            Este usuario a leido los terminos 
                                            y condiciones del servicio y las 
                                            ha aceptado
                                          </p>

                                          <div class="custom-control custom-checkbox ml-3">
                                              <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                              <label class="custom-control-label text-left" for="defaultUnchecked">TERMINOS Y CONDICIONES DE USO DEL CANAL</label>
                                          </div>
                                        </mdb-row>
                                    </div>

                                
                                </div>
                        </div>
                    </mdb-col>
                    <mdb-col xl="9" class="mid">
                        <div class="titulo">

                          <mdb-row>
                            <mdb-col col="2">
                              <img src="images/tipoCuenta.png" alt="">
                            </mdb-col>
                            <mdb-col col="9" class="text-left ml-n5">
                              <h4>Tipo de cuenta</h4>
                              <p class="mt-n2">Seleccione si la cuenta es personal o de empresa</p>
                            </mdb-col>
                          </mdb-row>


                        </div>
                        <div class="radio ml-5">
                          <mdb-row>
                            <mdb-col col="3">
                              <div class="custom-control custom-radio">
                                  <input type="radio" class="custom-control-input float-left" name="radio" id="defaultGroupExample1">
                                  <label class="custom-control-label " for="defaultGroupExample1">Personal</label>
                              </div>
                            </mdb-col>
                            <mdb-col col="3">
                              <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" name="radio" id="defaultGroupExample2">
                                    <label class="custom-control-label" for="defaultGroupExample2">Empresarial</label>
                                </div>
                            </mdb-col>
                          </mdb-row>
                        </div>

                        <div class="titulo mt-5">

                          <mdb-row>
                            <mdb-col col="2">
                              <img src="images/tipoCuenta.png" alt="">
                            </mdb-col>
                            <mdb-col col="9" class="text-left ml-n5">
                              <h4>Datos personales</h4>
                              <p class="mt-n2">Todos sus datos estan protegidos por las politicas de seguridad de nuestra empresa</p>
                            </mdb-col>
                          </mdb-row>


                        </div>

                        <div class="datos ml-5">
                          <mdb-row class="mb-n4">
                            <mdb-col xl="6">
                              <mdb-input label="Nombres completos" v-model="value" />
                            </mdb-col>
                            <mdb-col xl="6">
                              <mdb-input label="Apellidos completos" v-model="value" />
                            </mdb-col>
                          </mdb-row>
                          <mdb-row class="mb-n4">
                            <mdb-col xl="6" >
                              <mdb-input label="Nacionalidad" v-model="value" />
                            </mdb-col>
                            <mdb-col xl="6">
                              <mdb-input label="Fecha de Nacimiento" v-model="value" />
                            </mdb-col>
                          </mdb-row>
                          <mdb-row class="mb-n4">
                            <mdb-col xl="6">
                              <mdb-input label="Tipo de documento" v-model="value" />
                            </mdb-col>
                            <mdb-col xl="6">
                                <mdb-input label="# Documento" v-model="value" />
                            </mdb-col>
                          </mdb-row>
                          <mdb-row class="mb-n4">
                            <mdb-col xl="6">
                              <mdb-input label="Pais de residencia" v-model="value" />
                            </mdb-col>
                            <mdb-col xl="6">
                                <mdb-input label="Ciudad" v-model="value" />
                            </mdb-col>
                          </mdb-row>
                          <mdb-row >
                            <mdb-col xl="6">
                              <mdb-input label="Numero de contacto" v-model="value" />
                            </mdb-col>
                            <mdb-col xl="6">
                                <mdb-input label="Correo electronico" v-model="value" />
                            </mdb-col>
                          </mdb-row>

                           <div class="custom-control custom-checkbox ml-n5 mt-5 ">
                              <input type="checkbox" class="custom-control-input" id="defaultUnchecked1">
                              <label class="custom-control-label text-left " for="defaultUnchecked1">HE LEIDO Y ACEPTO LOS TERMINOS Y CONDICIONES DE USO DEL CANAL </label>
                           </div>

                        <button class="confirmar float-left mt-3 mb-5">
                          ACTUALIZAR DATOS
                        </button>
                           
                        </div>
                    </mdb-col>
                  
                </mdb-row>
      
           
                </div>


        </mdb-container>
    </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,  mdbInput} from 'mdbvue';
import CountryFlag from 'vue-country-flag'
  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
        CountryFlag,
          mdbInput
    }
  }
</script>