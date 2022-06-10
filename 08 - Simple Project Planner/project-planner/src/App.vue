<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>


<style>
:root {
  --main-font: Avenir, Helvetica, Arial, sans-serif;
  --main-bg-color: #f2f2f2;
  --light-bg-color: #fefefe;
  --main-text-color: #222;
  --subtle-text-color: #aaa;
  --hover-text-color: #666;
  --shadow-color: #0000000d;
  --completed-color: #00ca87;
  --ongoing-color: #eb0075;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--main-font);
  background: var(--main-bg-color);
  height: 100vh;
}

#app {
  margin: 0 auto;
  max-width: 600px;
  padding: 0 1rem;
}
</style>
