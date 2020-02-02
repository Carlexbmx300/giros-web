<template>
    <mdb-stepper simpleV :steps="verticalStepper" v-model="currentStep" >
    
   
    </mdb-stepper>
</template>
<script>
  import { mdbStepper,mdbBtn  } from 'mdbvue';
  export default {
    components: {
      mdbStepper,
      mdbBtn
    },
    data() {
      return {
        currentStep: 2,
        verticalStepper: [
          {
            content: 
              "   <mdb-btn color='primary'>Primary</mdb-btn> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente."
          }
        ],
      };
    }
  };
</script>