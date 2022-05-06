<template>
    <h2>Liste des factures</h2>   
    <div>
        <b style="font-size:22;">Lignes</b><br><br>
        <table border="5%" node style="width:45%; text-align: center;" >
            <thead>
                <tr>
                    <td>Numéro</td>
                    <td>Client</td>
                    <td>Date</td>
                    <td>Montant</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="(line) in invoiceStore.invoices.lines">
				    <Home v-bind:line="line" @click="handleInvoiceDetails" />
                </template>
            </tbody>
        </table><br>
    </div>
</template>
<script>
    import Home from "./Home.vue";
    import { useInvoiceStore } from "@/stores/InvoiceStore";

    export default {
        setup() {
            const invoiceStore = useInvoiceStore()

            return {
                invoiceStore
            }
        },
        components: {
            "Home" : Home,
        }, 
        methods: {
			handleInvoiceDetails(index) {
				this.$router.push( { name: 'invoice', params: { index } })
			},
		},
    }
</script>