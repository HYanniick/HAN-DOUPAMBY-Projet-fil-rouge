<template>
    <header>
        <nav>
            <router-link to="/">Retour</router-link>
        </nav>
        <h2>Devis</h2>       
    </header>
    <QuoteForm />
</template>
<script lang="ts">
  import QuoteForm from "../components/QuoteForm.vue";

  export default {
    components: {
      "QuoteForm": QuoteForm,
    }
  }
</script>