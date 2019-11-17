from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {
            "label":_("Estate Manager"),
            "icon": "octicon octicon-briefcase",
            "items": [
                {
                    "type": "doctype",
                    "name": "Property",
                    "label": _("Property"),
                    "description": _("Properties on the Platform")
                }, 
                {
                    "type": "doctype", 
                    "name": "Agent",
                    "label": _("Agent"),
                    "description": _("Agents on the Platform")
                }
            ]
        }
    ]