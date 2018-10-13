define(function (require) {

    var declare = require('dojo/_base/declare');
    var on = require("dojo/on");
    var domConstruct = require("dojo/dom-construct");
    var string = require("dojo/string");
    var i18n = require('ngw-pyramid/i18n!webmap');
    var hbsI18n = require('ngw-pyramid/hbs-i18n');
    var ol = require("openlayers/ol");

    return declare(ol.control.Control, {
        constructor: function(options) {
            var widget = this;

            this.enabled = false;

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
                if (!window.Cesium) {
                    require(['openlayers/Cesium/Cesium'], function (dep) {
                        widget.ol3d = new olcs.OLCesium({ map: widget.display.map.olMap }); // map is the ol.Map instance
                        widget.toggleCesium();
                    });
                } else {
                    widget.toggleCesium();
                }
                // console.log(widget.display.map.olMap);
            });

            ol.control.Control.call(this, {
                 element: this.element,
                 target: this.target
            });
        },

        toggleCesium: function () {
            this.enabled = !this.enabled;
            this.ol3d.setEnabled(this.enabled);
        }
    });
});