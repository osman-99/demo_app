frappe.ready(function() {
	// bind events here

	// frappe.web_form.after_load = () => {
	// 	frappe.msgprint("This is Web Form after load");
	// };

	frappe.web_form.after_load = () => {
		frappe.web_form.on('enable', (field, value) => {
			frappe.msgprint("Enable changed");
		});
		frappe.web_form.on('date_of_birth', (field, value) => {
			if (value) {
				dob = new Date(value);
				var today = new Date();
				var age = Math.floor((today-dob)/365.25*24*60*60*1000);
				frappe.web_form.set_value('age', [age])
			}
		})
	};
})