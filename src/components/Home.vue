<template>
	<tr>
		<td>{{ line.numero }}</td>
		<td>Nom : {{ line.client.firstname }}
		<br>Prénom : {{ line.client.lastname }}
		<br>Numéro de téléphone : {{ line.client.phoneNumber }}</td>
		<td>{{ line.date }}</td>
		<td>{{ line.montant }}</td>
	</tr>
</template>

<script>
	export default {
		props: ["line"],
		
	}
</script>