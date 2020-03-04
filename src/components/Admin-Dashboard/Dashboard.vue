<template>
<div class="dash">
    <mdb-container fluid>
        <mdb-row>
            <mdb-col xl="2" class="ml-xl-5 mt-xl-5">
                <Nav/>
            </mdb-col>
            <mdb-col xl="6">
                <Serv/>
             </mdb-col>
             <mdb-col xl="3" >
                 <Slider/>
             </mdb-col>
        </mdb-row>
    </mdb-container>


</div>
    
</template>
<script>
import Nav from '@/components/Admin-Dashboard/Navbar.vue'
import Serv from '@/components/Admin-Dashboard/Servicios.vue'
import Slider from '@/components/Admin-Dashboard/Slider.vue'
 import {mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';

export default {
    name: 'dash',
    components:{
        Nav,
        Serv,
        mdbContainer, 
        mdbRow, 
        mdbCol,
        Slider
     
    }
}
</script>