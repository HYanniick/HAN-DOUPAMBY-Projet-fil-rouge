import { defineStore } from "pinia";

export const useInvoiceStore = defineStore('InvoiceStore', {
    state() {
        return {
            invoices: {
                lines: [
                    {
                        numero: "1",
                        client: {
                            firstname: "Han",
                            lastname: "Yannick",
                             phoneNumber: "0102030405",
                        },
                        date: new Date(),
                        montant: 20,
                    },
                    {
                        numero: "2",
                        client: {
                            firstname: "Doupamby",
                            lastname: "Darel",
                            phoneNumber: "0123456789",
                        },
                        date: new Date(),
                        montant: 30,
                    }
                ],
            },
            
            invoice: {
                    client: {
                        firstname: "",
                        lastname: "",
                        phoneNumber: "",
                    },
                    lines: [
                        {
                            designation: "Ligne 1",
                            price: 30,
                            quantity: 5,
                        }
                    ],
                    vat : 0,
                    dueDate: new Date(),
                },
        }
    },
    getters: {
        numberOfInvoices: state => state.invoices.lines.length,
        clientFullName(state) {
			return `${state.invoice.client.firstname} ${state.invoice.client.lastname} (${state.invoice.client.phoneNumber})`;
        },
        totalPrice(state) {
			let total = 0;
			for (let line of state.invoice.lines) {
				total += Number(line.quantity) * Number(line.price);
			}
			return total;
		},
    }
})
