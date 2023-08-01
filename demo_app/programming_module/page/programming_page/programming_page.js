frappe.pages['programming-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page',
		single_column: true
	});

	page.set_title("Hello World!");
	page.set_title_sub('Subtitle');
	page.set_indicator('Pending', 'orange');
	let $btn = page.set_primary_action('New', () => frappe.msgprint("OHHHH"), 'octicon octicon-plus');
	let $sec_btn = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync');
	page.add_menu_item("Send Email", () => open_email_dialog(), true);
	page.add_action_item('Delete', () => delete_items());
	let field = page.add_field({
		label: 'Status',
		fieldtype: 'Select',
		fieldname: 'status',
		options: [
			'Open',
			'Closed',
			'Cancelled'
		],
		change() {
			console.log(field.get_value());
		}
	});
	// $(frappe.render_template("programming_page", {})).appendTo(page.body);
	$(frappe.render_template("programming_page", {
		data: "Hello"
	})).appendTo(page.body);
}