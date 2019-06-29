define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/Evented",
    "dijit/Dialog",
    "dijit/form/Button",
    "dojox/layout/TableContainer",
    "dijit/form/Select",
    "dijit/form/SimpleTextarea",
    "ngw-pyramid/i18n!webmap"
], function (
    declare, 
    lang, 
    domConstruct,
    on, 
    Evented, 
    Dialog, 
    Button, 
    TableContainer,
    Select,
    SimpleTextarea, 
    i18n
) {
    return declare([Dialog, Evented], {

        constructor: function (options) {
            declare.safeMixin(this, options);

            this.title = i18n.gettext("Insert projection string");
            this.style = "width: 400px";
        },

        postCreate: function () {
            this.inherited(arguments);

            this.container = new TableContainer({
                cols: 1,
                labelWidth: "150",
                customClass: "dijitDialogPaneContentArea",
            }).placeAt(this.containerNode);

            this.format = new Select({
                label: i18n.gettext("Format"),
                style: "width: 100%",
                options: [
                    { value: "proj4", label: i18n.gettext("Proj4") },
                    { value: "mapinfo", label: i18n.gettext("Mapinfo") },
                    { value: "epsg", label: i18n.gettext("EPSG") }
                ]
            }).placeAt(this.container);

            this.textArea = new SimpleTextarea({
                label: i18n.gettext("Definition"),
            }).placeAt(this.container);

            this.actionBar = domConstruct.create("div", {
                class: "dijitDialogPaneActionBar"
            }, this.containerNode);

            this.btnOk = new Button({
                label: i18n.gettext("Insert"),
                onClick: lang.hitch(this, this.onSave)
            }).placeAt(this.actionBar);

            this.btnContinue = new Button({
                label: i18n.gettext("Cancel"),
                onClick: lang.hitch(this, this.onContinue)
            }).placeAt(this.actionBar);
        },

        onSave: function () {
            this.emit("save", { 
                projStr: this.textArea.get("value"), 
                format: this.format.get("value")
            });
            this.hide();
        },

        onContinue: function () {
            this.emit("continue");
            this.hide();
        }
    });
});