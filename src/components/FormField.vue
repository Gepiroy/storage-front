<script setup></script>

<template>
  <div class="field-block">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<style scoped>
.field-block{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>

<script>
export default {
  props: ['label']
};
</script>
