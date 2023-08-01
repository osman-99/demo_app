// Copyright (c) 2023, Osman and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {
	// 	// frappe.msgprint("Hello World")
	// 	// frappe.throw("This is an ERORR")
	// },

	// onload: function(frm) {
	// 	frappe.msgprint("Hello from ONLOAD event")
	// },

	// validate: function(frm) {
	// 	frappe.throw("This is from VALIDATE event")
	// },

	// before_save: function(frm) {
	// 	frappe.throw("This is BEFORE_SAVE event")
	// },

	// after_save: function(frm) {
	// 	frappe.throw("This is from AFTER_SAVE event")
	// },

	// enable: function(frm) {
	// 	frappe.msgprint("This is for ENABLE")
	// },

	// age: function(frm) {
	// 	frappe.msgprint("This is for AGE")
	// },

	// family_members_on_form_renderd: function(frm) {
	// 	frappe.msgprint("This for add new row in Family Members")
	// },

	// before_submit: function(frm) {
	// 	frappe.msgprint("This is BEFORE_SUBMIT")
	// },

	// on_submit: function(frm) {
	// 	frappe.msgprint("This is ON_SUBMIT")
	// },

	// before_cancel: function(frm) {
	// 	frappe.throw("This is BEFORE_CANCEL")
	// },

	// after_cancel: function(frm) {
	// 	frappe.throw("This is AFTER_CANCEL")
	// },

	// on_submit(frm) {
	// 	frappe.throw("This is on_submit")
	// },

	// before_submit(frm) {
	// 	frappe.throw(`The Full Name is -->> ${frm.doc.first_name} ${frm.doc.middle_name} ${frm.doc.last_name}`)
	// },

	refresh(frm) {
		if (frm.is_new()) {
			frm.set_intro("You can add New record")
		}
	},
	enable(frm) {
		// frm.set_df_property("first_name", "reqd", 1)
		// frm.toggle_reqd("first_name", true)
		frm.add_custom_button("CLICK ME", () => {frm.set_value({first_name: "X", middle_name: "Y", last_name: "Z"});} )
	},
	validate(frm) {
		frm.set_value("full_name", frm.doc.first_name + " " + frm.doc.middle_name + " " + frm.doc.last_name);
		let row = frm.add_child("family_members", {name1: "C", age: "10", relationship: "SON"});
		frm.refresh_field('family_members');
	}
});

// frappe.ui.form.on('Family Members Doctype', {
// 	name1(frm) {
// 		frappe.throw("TEST")
// 	}
// })
