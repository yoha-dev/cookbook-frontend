<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import MultiSelect from 'primevue/multiselect';
import { ref } from 'vue';


const title = ref('')
const description = ref('')

const genres = ref(['curry', 'salad', 'Suppe'])

const selectedGenres = ref([])

function send(){
  console.log('title+description', JSON.stringify( {
      title, 
      description,
      genres
    }))
  fetch('http://localhost:3000/recipes', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      "title": title.value, 
      "description": description.value,
      "genres": selectedGenres.value,
    }),
  })
}

</script>

<template>
  <main>
    <h1>Rezept erstellen</h1>
    <h3>Titel</h3>
    <InputText type="text" v-model="title" placeholder="Spaghetti Bolognese" />
    <h3>Beschreibung</h3>
    <Textarea v-model="description" rows="5" cols="30" placeholder="Beschreibung"/>
    <br/>
    <MultiSelect v-model="selectedGenres" :options="genres" placeholder="Genres wählen"
    :maxSelectedLabels="3" display="chip"/>
    <br/>
    <Button @click="send" icon="pi pi-check" iconPos="right" raised label="Submit" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
