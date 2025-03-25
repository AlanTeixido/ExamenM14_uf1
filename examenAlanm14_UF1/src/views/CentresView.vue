<template>
    <div>
      <h1>Llistat de centres per a l'any {{ any }}</h1>
  
      <div v-if="loading">Carregant dades...</div>
      <div v-if="error">Error: {{ error.message }}</div>
  
      <ul v-if="!loading && !error">
        <li v-for="centre in centres" :key="centre">
          <RouterLink :to="`/beques/${any}/${encodeURIComponent(centre)}`">{{ centre }}</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps, onMounted } from 'vue'
  import { useBeques } from '@/composables/useBeques'
  
  const props = defineProps({ any: String })
  
  const { centres, loading, error, getCentresPerAny } = useBeques()
  
  onMounted(() => {
    getCentresPerAny(props.any)
  })
  </script>
  