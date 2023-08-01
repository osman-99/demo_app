# Copyright (c) 2023, Osman and contributors
# For license information, please see license.txt

import time
import frappe
from frappe.model.document import Document

class ServerSideScripting(Document):
	pass
	# @frappe.whitelist()
	# def frm_call(self, msg):
	# 	time.sleep(5)
	# 	frappe.msgprint(msg)
	# 	self.mobile_number = 123456789 