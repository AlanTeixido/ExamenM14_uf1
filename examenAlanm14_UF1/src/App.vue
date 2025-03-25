<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/pagina1">Pàgina 1</RouterLink> |
    <RouterLink to="/pagina2">Pàgina 2</RouterLink> |
    <RouterLink to="/pagina3">Pàgina 3</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>

// buit

</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>