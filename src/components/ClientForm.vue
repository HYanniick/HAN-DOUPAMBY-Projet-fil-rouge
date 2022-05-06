<template>
	<p>
		Prénom : <input type="text" v-model="firstname" />
		<br>
		Nom : <input type="text" v-model="lastname" />
		<br>
		Numéro : <input type="phone" v-model="phoneNumber" />
	</p>
	<button @click="$emit('formSubmit', this)">Valider</button>
</template>

<script>
	export default {
		data() {
			return {
				firstname: this.client.firstname,
				lastname: this.client.lastname,
				phoneNumber: this.client.phoneNumber,
			}
		},
		props: [
			"client",
		],
		emits: [
			"form-submit",
		],
	};
</script>
