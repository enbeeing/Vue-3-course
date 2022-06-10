<template>
  <nav class="main-nav">
    <router-link to="/">Projects</router-link>
    <router-link to="/add">Add a New Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}

nav a {
  text-decoration: none;
  color: var(--subtle-text-color);
  font-size: 1.2rem;
  padding: 0.5rem 0;
  margin: 0 0.5rem;
}

.main-nav a.router-link-exact-active {
  border-bottom: 2px solid var(--completed-color);
}
</style>