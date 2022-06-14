<template>
  <div class="spin"></div>
</template>

<script setup>
</script>

<style>
.spin {
  display: flex;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(350deg);
  }
}
</style>