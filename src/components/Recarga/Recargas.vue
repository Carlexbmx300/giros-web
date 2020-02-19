
<template>

 
  <div class="acordeon text-xl-left">
 
   <div class="acordeon-item ">
      <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" v-model="radio"  :options="component">
      <label class=" acordeon-titulo custom-control-label" for="defaultGroupExample1"> <span >1</span> Numero de mobile</label>
     <StepOne class="acordeon-contenido"/>
      <button v-on:click="ischeked">cambiar</button>
    <div>{{radio}}</div>
    </div>



     <div class="acordeon-item ">
      <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" value="defaultGroupExample2" v-model="checked">
      <label class=" acordeon-titulo custom-control-label" for="defaultGroupExample2"> <span >2</span> {{checked}} Operador</label>
      <p class="acordeon-contenido ml-xl-5"> {{picked}}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quia molestiae praesentium facere maiores laudantium quis libero nulla corrupti aperiam quos explicabo, ipsa architecto magnam sapiente rerum quasi debitis aliquid.</p>
    </div>


 
     <div class="acordeon-item ">
      <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios">
      <label class=" acordeon-titulo custom-control-label" for="defaultGroupExample3"> <span >3</span> Planes</label>
     
      <p class="acordeon-contenido  ml-xl-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi exercitationem iure ducimus molestias aliquam id magnam quis sint fuga? Laborum, odio ducimus. Earum dicta fugiat error nesciunt commodi ad corrupti.</p>
     
    </div>


     <div class="acordeon-item ">
      <input type="radio" class="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios">
      <label class=" acordeon-titulo custom-control-label" for="defaultGroupExample4"> <span >4</span> Recargar

      </label>
      <p class="acordeon-contenido  ml-xl-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi exercitationem iure ducimus molestias aliquam id magnam quis sint fuga? Laborum, odio ducimus. Earum dicta fugiat error nesciunt commodi ad corrupti.</p>
    </div> 
 

    <!-- Group of default radios - option 2 -->
    
    <!-- Group of default radios - option 3 -->
    <input type="radio" id="uno" value="Uno" v-model="picked">
<label for="uno">Uno</label>
<br>
<input type="radio"   v-model="radio" :options="component">

<br>
<p> {{ picked }}</p>
     
     <mdb-input label="Material input" v-model="picked" />
       <mdb-input label="Material input"  v-model="picked"/>
       <p> {{ picked }}</p>
  <StepOne/>
  </div>

</template>
<script>
  import {mdbContainer, mdbRow, mdbCol,mdbInput} from 'mdbvue';
  import StepOne from '@/components/Recarga/StepOne.vue';
 
  export default {
    name:'input',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
      StepOne

    },
    data() {
      return {
        picked: '',
        radio:null
        ,
        component:[{value:'hola', text:'hola'}]
      };
    }

   
  
  }
</script>