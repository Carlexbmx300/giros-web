<template>
    <mdb-container class="servicios" fluid>

          <titulodash/>
          <serviciosmid/>
          <serviciosbottom/>
       
           
       
    </mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbPagination, mdbPageItem, mdbPageNav } from 'mdbvue';
import CountryFlag from 'vue-country-flag'
import titulodash from '@/components/Admin-Dashboard/Titulo_dashboard.vue'
import serviciosmid from '@/components/Admin-Dashboard/Servicios_mid.vue'
import serviciosbottom from '@/components/Admin-Dashboard/Servicios_bottom.vue'

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
        titulodash,
        serviciosmid,
        serviciosbottom
    }
  }
</script>