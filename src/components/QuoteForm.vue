<template>
    <header>        
        <div id="just-line-break">
            <p>
                <label>Client: {{ invoiceStore.clientFullName }} </label><br>
                <label>TVA: {{ invoiceStore.invoice.vat }}</label><br><br>
                <label>Échéance: {{ invoiceStore.invoice.dueDate }}</label><br><br>
                <label>Prix total: {{ invoiceStore.totalPrice }}</label><br>
            </p>
        </div>
    </header>

    <div>
        <b style="font-size:22;">Client</b>
        <template v-if="!displayClientForm">
		    <Client v-bind:client="invoiceStore.invoice.client" />
		    <button v-on:click="showClientForm">Éditer</button>
        </template>
        <ClientForm v-else v-bind:client="invoiceStore.invoice.client" v-on:form-submit="hideClientForm" />
    </div>
    <br>
    <div>
        <b style="font-size:22;">Lignes</b><br><br>
        <table border="5%" node style="width:45%">
            <thead>
                <tr>
                    <td style="width:30%">Description</td>
                    <td>Prix</td>
                    <td>Quantité</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="(line, index) in invoiceStore.invoice.lines">
				    <Line v-if="!displayLineForm[index]" v-bind:line="line" @click="handleEditLine(index)" />
                    <LineForm v-else v-bind:line="line" @edit-finished="handleEditLineFinished(index)" />
                </template>
            </tbody>
        </table><br>
        <button @click="addLine">Ajouter une ligne</button> 
    </div>
</template>

<script>
    import Client from "./Client.vue";
	import ClientForm from "./ClientForm.vue";
	import Line from "./Line.vue";
	import LineForm from "./LineForm.vue";
    import { useInvoiceStore } from "@/stores/InvoiceStore";

    export default {
        setup() {
            const invoiceStore = useInvoiceStore()

            return {
                invoiceStore
            }
        },
        components: {
            "Client" : Client,
            "ClientForm" : ClientForm,
            "Line" : Line,
            "LineForm" : LineForm,
        }, 
        data() {
            return {
                displayClientForm: false,
				displayLineForm: [
					false
				]
            }
        },
		methods: {
			addLine() {
				this.invoice.lines.push({
					designation: "",
					price: null,
					quantity: null,
				});
			},
			showClientForm() {
				this.displayClientForm = true;
			},
			hideClientForm(newClient) {
				this.displayClientForm = false;
				this.invoice.client.firstname = newClient.firstname;
				this.invoice.client.lastname = newClient.lastname;
				this.invoice.client.phoneNumber = newClient.phoneNumber;
			},
			handleEditLine(index) {
				this.displayLineForm.splice(index, 1, true);
			},
			handleEditLineFinished(index) {
				this.displayLineForm.splice(index, 1, false);
			}
		},
        
	}
</script>