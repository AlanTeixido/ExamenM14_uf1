<template>
    <h1>Estació seleccionada</h1>
    <p>Has seleccionat: {{ stationName }}</p>
  </template>
  
  <script setup>
  defineProps(['stationName'])
  </script>
  