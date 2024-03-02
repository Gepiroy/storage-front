<script setup>
  import { QrcodeStream } from 'vue-qrcode-reader'
</script>

<template>
  <div class="QR-div">
    <qrcode-stream @error="onError" @detect="onDetect"></qrcode-stream>
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
  methods: {
  onError (error) {
    window.alert(error)
  },
  onDetect(detectedCodes){
    window.alert(detectedCodes) // gonna do this later, when I'll make it to work on phone.
  }
}
}
</script>
