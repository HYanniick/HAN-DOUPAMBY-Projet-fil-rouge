<template>
	<tr>
		<td>{{ line.designation }}</td>
		<td>{{ line.price }}</td>
		<td>{{ line.quantity }}</td>
		<td>{{ line.price * line.quantity }}</td>
	</tr>
</template>

<script>
	export default {
		props: ["line"],
	}
</script>
