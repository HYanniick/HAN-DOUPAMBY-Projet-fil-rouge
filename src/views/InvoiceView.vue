<template>
    <header>
        <nav>
            <router-link to="/">Retour</router-link>
        </nav>
        <h2>Facture</h2>       
    </header>
    <InvoiceForm />
</template>
<script lang="ts">
  import InvoiceForm from "../components/InvoiceForm.vue";

  export default {
    components: {
      "InvoiceForm": InvoiceForm,
    }
  }
</script>