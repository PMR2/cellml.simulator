/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is "Andre's Reference Description Framework".
 *
 * The Initial Developer of the Original Code is
 * David Nickerson <nickerso@users.sourceforge.net>.
 * Portions created by the Initial Developer are Copyright (C) 2007-2008
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
/* my custom inline title pane (not really inline) */
dojo.provide("andre.InlineTitlePane");
dojo.require("dijit.TitlePane");
dojo.declare("andre.InlineTitlePane", dijit.TitlePane, {
  // override the default base CSS class name
  baseClass: "andreInlineTitlePane",
  // need instaneous transitions to get the toggle publish/layout manager combination to work as expected
  //duration: 0,
  /*
  // simply overriding the default template
  templatePath: dojo.moduleUrl("andre","templates/InlineTitlePane.html"),
  templateString: ""*/
  // override the toggle function to include a call to the layout manager if required
  //toggle: function() {
    //this.inherited(arguments);
    // publish a toggle event to trigger layout redraw
    // FIXME: probably don't want this for all occurances, just those in the title pane?
    //dojo.publish("inlineTitlePaneToggle",[]);
  //},
});
