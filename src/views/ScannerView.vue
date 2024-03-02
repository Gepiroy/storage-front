<script setup>
  //import { ref } from 'vue'
  import { QrcodeStream } from 'vue-qrcode-reader'
  //const message = ref("NOTHING NAHUY!")
</script>

<template>
  <div class="QR-div">
    <qrcode-stream @error="onError" @detect="onDetect"></qrcode-stream>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
  .QR-div{
    border: 1px solid black;
    padding: 5px;
    border-radius: 4px;
  }
</style>

<script>
export default {
  data() {
    return {
      message: "QR will be there."
    }
    
  },
  methods: {
    onError (error) {
      window.alert(error)
    },
    onDetect(detectedCodes){
      this.message = "Link: "+JSON.stringify(detectedCodes) //temporary just output it.
    }
  }
}
</script>
