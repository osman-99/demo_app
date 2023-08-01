// Copyright (c) 2023, Osman and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Server Side Scripting Script Report"] = {
	"filters": [
		{
			"fieldname": "name",
			"label": __("Server Side Scripting"),
			"fieldtype": "Link",
			"options": "Server Side Scripting"
		},
		{
			"fieldname": "first_name",
			"label": __("First Name"),
			"fieldtype": "Data",
		},
		{
			"fieldname": "middle_name",
			"label": __("Middle Name"),
			"fieldtype": "Data",
		},
		{
			"fieldname": "last_name",
			"label": __("Last Name"),
			"fieldtype": "Data",
		},
		{
		"fieldname": "age",
		"label": __("Age"),
		"fieldtype": "Date",}
	]
};
