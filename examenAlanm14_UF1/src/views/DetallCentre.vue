<template>
    <div>
      <h1>Detall del centre: {{ centre }} ({{ any }})</h1>
  
      <!-- Temporalment eliminem loading i error ja que no estan definits encara -->
      <p>Properament aquí mostrarem les dades del centre seleccionat.</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    any: String,
    centre: String
  })
  </script>
  