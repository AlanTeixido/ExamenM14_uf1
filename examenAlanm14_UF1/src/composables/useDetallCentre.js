import { ref, watchEffect } from 'vue'
import axios from 'axios'

export function useDetallCentre(any, tipus_de_centre) {
  const dades = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getDadesDetall = async () => {
    loading.value = true
    dades.value = null
    error.value = null
    try {
      const query = `$where=any='${encodeURIComponent(any.value)}' AND tipus_de_centres='${encodeURIComponent(tipus_de_centre.value)}'`
      
      const response = await axios.get(`https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json?${query}`)
      
      if (response.data.length > 0) {
        dades.value = response.data[0]
      } else {
        error.value = 'No hi ha dades disponibles per aquest centre i any.'
      }

    } catch (err) {
      if (err.response && err.response.data) {
        error.value = err.response.data.message || 'Error desconegut de l\'API.'
      } else {
        error.value = err.message || 'Error desconegut en la petició.'
      }
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (any.value && tipus_de_centre.value) {
      getDadesDetall()
    }
  })

  return { dades, loading, error }
}
