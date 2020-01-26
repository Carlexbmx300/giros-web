<template>
    <div class="ci4">
        <mdb-container>
            <mdb-row class="mb-xl-5">
                <mdb-col xl="3">
                      <img class="mb-xl-5" src="images/iconoC3.png" alt="">
                </mdb-col>
                <mdb-col xl="9">
                    <h4 class="text-xl-left" >MAS BENEFICIOS PARA TI</h4>
                    <p   class="text-xl-left mb-xl-5">Elige pago en ventanilla y tu dinero llegará normalmente en minutos a un gran número de lugares en Colombia. Selecciona depósito bancario y tu dinero normalmente llegará en unas horas a todos los bancos de Colombia</p>
                </mdb-col>
            </mdb-row>
             <mdb-row>
                 <mdb-col xl="3">
                       <img class="mb-xl-5 " src="images/iconoInvita5.png" alt="">
                 </mdb-col>
                <mdb-col xl="9">
                  <h4 class="text-xl-left">ESTAMOS AQUI PARA AYUDARTE</h4>
                    <p class="text-xl-left mb-xl-5 ">Obtén apoyo humano cuando realmente lo necesites de personas a las que les importa. Contamos con centros de atención al cliente en varios continentes con soporte en varios idiomas. Simplemente contáctanos o visits nuestro Centro de ayuda para asistencia e información. Por último, pero no menos importante, te garantizamos que recibirán tu dinero o te reembolsoremos el total de tu pago.</p>
                </mdb-col>
            </mdb-row>
        </mdb-container>
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