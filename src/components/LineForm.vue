<template>
	<tr>
		<td><input type="text" v-model="line.designation" /></td>
		<td><input type="number" v-model="line.price" /></td>
		<td><input type="number" v-model="line.quantity" /></td>
		<td>{{ line.price * line.quantity }}</td>
		<td><button @click="$emit('editFinished')">OK</button></td>
	</tr>
</template>

<script>
	export default {
		props: ["line"],
		emits: ["editFinished"],
	}
</script>
