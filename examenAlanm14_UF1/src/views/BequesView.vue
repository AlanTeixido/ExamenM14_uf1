<template>
  <div>
    <h1>Llistat d'anys de convocatòries</h1>

    <div v-if="loading">Carregant dades...</div>
    <div v-if="error">Error: {{ error.message }}</div>

    <ul v-if="!loading && !error">
      <li v-for="any in anys" :key="any">
        <RouterLink :to="`/beques/${any}`">{{ any }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBeques } from '@/composables/useBeques'

const { anys, loading, error, getAnys } = useBeques()

onMounted(() => {
  getAnys()
})
</script>
