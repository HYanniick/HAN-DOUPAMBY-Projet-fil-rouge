<template>
    <header>
        <nav>
            <router-link to="/quote">Nouveau devis</router-link>
        </nav>
        <HomeForm />
    </header>
</template>
<script lang="ts">
import HomeForm from "../components/HomeForm.vue";

  export default {
    components: {
    "HomeForm": HomeForm,
}
  }
</script>