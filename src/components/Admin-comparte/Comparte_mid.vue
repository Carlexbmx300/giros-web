<template>
    <mdb-container class="servicios-mid pan pt-5 mt-xl-0 mt-5">
               <div class="btnpanel con d-xl-none d-flex mt-n5 ml-n3">
              <mdb-row class="ml-1 align-self-center">
                <mdb-col col="6">
                  <img class="btnp1" src="images/BPanel1.png" alt="">

                </mdb-col>
                <mdb-col col="6">
                   <img src="images/BPanel2.png" alt="">
                </mdb-col>
              </mdb-row>
            </div>
            <mdb-row class="mt-xl-0 mt-5 share">
                <mdb-col xl="6" offsetXl="3"> 
               <mdb-input basic class="mb-3 shareI" placeholder="Recipient's username" ariaDescribedBy="button-addon2" v-model="link">
                 <select class="browser-default custom-select" group slot="append" id="button-addon2">
                    <option selected>Compartir</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </mdb-input>
                </mdb-col> 
            </mdb-row>

            <mdb-row>


                <mdb-col xl="8" offsetXl="2">
                    <p>Actualmente has invitado</p>
                    <div class="table border text-left">
                        <mdb-tbl class="ml-2 mr-2 mb-5 pb-5">
                        <mdb-tbl-head >
                            <tr>
                        
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Id</th>
                            </tr>
                        </mdb-tbl-head>
                        <mdb-tbl-body >
                            <tr class="text-left border-bottom">
                    
                            <td>Leandro Gonzales</td>
                            <td ><p class="bgC">Sin transferir</p></td>
                            <td>71797450</td>
                            </tr>
                        
                        </mdb-tbl-body>
                        </mdb-tbl>
                    </div>
                    <div class="textbox w-25 h-auto ml-auto mr-auto mt-n5 overflow-hidden bg-white ">
                        <p>Saldo</p>
                        <h1 class="mt-n4 mb-n1">$0<span>USD</span></h1>
                    </div>
             </mdb-col>
            </mdb-row>
            <mdb-row class="bottomC h-50 mt-5 d-xl-flex d-none">
                <mdb-col xl="7">
                    <img class="pareja" src="images/pareja.png" alt="">
                </mdb-col>
                <mdb-col xl="5" class="align-self-center ml-n5">
                    <h5>COMPARTE Y GANA</h5>
                    <p>Haz que tus referidos ralicen sus recargas</p>
                </mdb-col>

            </mdb-row>

        
    </mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol,  mdbInput, mdbBtn, mdbTbl, mdbTblHead, mdbTblBody} from 'mdbvue';


  export default {
    name: 'PageLoader',
    components: {
     
      mdbContainer, 
        mdbRow, 
        mdbCol,
       
          mdbInput,
           mdbBtn, 
           mdbTbl, 
           mdbTblHead, 
           mdbTblBody
    }
     ,
      data() {
      return {
        link: 'http://linkderegistroparausuarios'
      };
    }
  }
</script>