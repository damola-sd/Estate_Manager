// Copyright (c) 2019, Damola Adewunmi	 and contributors
// For license information, please see license.txt

frappe.ui.form.on("Property", "Agent",
    function(frm) {
        frappe.call({
            "method": "frappe.client.get",
            args: {
                doctype: "Agent",
                name: frm.doc.agent
            },
            callback: function (data) {
                frappe.model.set_value(frm.doctype,
                    frm.docname, "agent_name",
                    data.message.first_name
                    + (data.message.last_name ?
                        (" " + data.message.last_name) : ""))
            }
        })
    });
