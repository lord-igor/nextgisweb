define([
    'dojo/_base/declare',
    "dojo/on",
    "dojo/dom-construct",
    "dojo/string",
    'ngw-pyramid/i18n!webmap',
    'ngw-pyramid/hbs-i18n',
    "openlayers/ol"
], function (declare, on, domConstruct, string, i18n, hbsI18n, ol) {
    return declare(ol.control.Control, {
        constructor: function(options) {
            var widget = this;

            this.inherited(arguments);
            declare.safeMixin(this,options);

            this.element = domConstruct.create("div", {
                class: "ol-control ol-unselectable",
                innerHTML: string.substitute(
                    // icon source: https://materialdesignicons.com/icon/earth
                    "<button><svg class='svgIcon-earth'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='${assetUrl}/svg/svg-symbols.svg#earth'></use></svg></button>",
                    {
                        assetUrl: ngwConfig.assetUrl
                    }
                ),
                title: this.tipLabel
            });

            on(this.element, "click", function(){
                console.log(widget.display.map.olMap);
            });

            ol.control.Control.call(this, {
                 element: this.element,
                 target: this.target
            });
        }
    });
});