//>>built
define("dojox/data/HtmlTableStore","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/dom dojo/_base/array dojo/_base/xhr dojo/_base/sniff dojo/data/util/simpleFetch dojo/data/util/filter dojox/xml/parser".split(" "),function(k,l,p,m,n,q,v,w,r,t){l=l("dojox.data.HtmlTableStore",null,{constructor:function(a){k.deprecated("dojox.data.HtmlTableStore","Please use dojox.data.HtmlStore");if(a.url){if(!a.tableId)throw Error("dojo.data.HtmlTableStore: Cannot instantiate using url without an id!");
this.url=a.url;this.tableId=a.tableId}else for(a.tableId?(this._rootNode=m.byId(a.tableId),this.tableId=this._rootNode.id):this._rootNode=m.byId(this.tableId),this._getHeadings(),a=0;a<this._rootNode.rows.length;a++)this._rootNode.rows[a].store=this},url:"",tableId:"",_getHeadings:function(){this._headings=[];n.forEach(this._rootNode.tHead.rows[0].cells,p.hitch(this,function(a){this._headings.push(t.textContent(a))}))},_getAllItems:function(){for(var a=[],d=1;d<this._rootNode.rows.length;d++)a.push(this._rootNode.rows[d]);
return a},_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojo.data.HtmlTableStore: a function was passed an item argument that was not an item");},_assertIsAttribute:function(a){if("string"!==typeof a)throw Error("dojo.data.HtmlTableStore: a function was passed an attribute argument that was not an attribute name string");return n.indexOf(this._headings,a)},getValue:function(a,d,b){a=this.getValues(a,d);return 0<a.length?a[0]:b},getValues:function(a,d){this._assertIsItem(a);var b=this._assertIsAttribute(d);
return-1<b?[t.textContent(a.cells[b])]:[]},getAttributes:function(a){this._assertIsItem(a);for(var d=[],b=0;b<this._headings.length;b++)this.hasAttribute(a,this._headings[b])&&d.push(this._headings[b]);return d},hasAttribute:function(a,d){return 0<this.getValues(a,d).length},containsValue:function(a,d,b){var e=void 0;"string"===typeof b&&(e=r.patternToRegExp(b,!1));return this._containsValue(a,d,b,e)},_containsValue:function(a,d,b,e){a=this.getValues(a,d);for(d=0;d<a.length;++d){var c=a[d];if("string"===
typeof c&&e)return null!==c.match(e);if(b===c)return!0}return!1},isItem:function(a){return a&&a.store&&a.store===this?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){this._assertIsItem(a.item)},_fetchItems:function(a,d,b){if(this._rootNode)this._finishFetchItems(a,d,b);else if(this.url){var e=this,c=q.get({url:this.url,handleAs:"text"});c.addCallback(function(c){var f=function(a,b){if(a.id==b)return a;if(a.childNodes)for(var c=0;c<a.childNodes.length;c++){var d=f(a.childNodes[c],
b);if(d)return d}return null},g=document.createElement("div");g.innerHTML=c;e._rootNode=f(g,e.tableId);e._getHeadings.call(e);for(c=0;c<e._rootNode.rows.length;c++)e._rootNode.rows[c].store=e;e._finishFetchItems(a,d,b)});c.addErrback(function(c){b(c,a)})}else for(this._rootNode=m.byId(this.tableId),this._getHeadings(),c=0;c<this._rootNode.rows.length;c++)this._rootNode.rows[c].store=this},_finishFetchItems:function(a,d,b){b=null;var e=this._getAllItems();if(a.query){var c=a.queryOptions?a.queryOptions.ignoreCase:
!1;b=[];var h={},f,g;for(g in a.query)f=a.query[g]+"","string"===typeof f&&(h[g]=r.patternToRegExp(f,c));for(c=0;c<e.length;++c){var k=!0,u=e[c];for(g in a.query)f=a.query[g]+"",this._containsValue(u,g,f,h[g])||(k=!1);k&&b.push(u)}}else 0<e.length&&(b=e.slice(0,e.length));d(b,a)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(a){},getLabel:function(a){if(this.isItem(a))return"Table Row #"+this.getIdentity(a)},getLabelAttributes:function(a){return null},
getIdentity:function(a){this._assertIsItem(a);return v("opera")?n.indexOf(this._rootNode.rows,a)-1:a.sectionRowIndex},getIdentityAttributes:function(a){return null},fetchItemByIdentity:function(a){var d=a.identity,b=this,e=null,c=null;if(this._rootNode)this._rootNode.rows[d+1]&&(e=this._rootNode.rows[d+1],a.onItem&&(c=a.scope?a.scope:k.global,a.onItem.call(c,e)));else if(this.url){var h=q.get({url:this.url,handleAs:"text"});h.addCallback(function(f){var g=function(a,b){if(a.id==b)return a;if(a.childNodes)for(var c=
0;c<a.childNodes.length;c++){var d=g(a.childNodes[c],b);if(d)return d}return null},h=document.createElement("div");h.innerHTML=f;b._rootNode=g(h,b.tableId);b._getHeadings.call(b);for(f=0;f<b._rootNode.rows.length;f++)b._rootNode.rows[f].store=b;e=b._rootNode.rows[d+1];a.onItem&&(c=a.scope?a.scope:k.global,a.onItem.call(c,e))});h.addErrback(function(b){a.onError&&(c=a.scope?a.scope:k.global,a.onError.call(c,b))})}else{this._rootNode=m.byId(this.tableId);this._getHeadings();for(h=0;h<this._rootNode.rows.length;h++)this._rootNode.rows[h].store=
this;e=this._rootNode.rows[d+1];a.onItem&&(c=a.scope?a.scope:k.global,a.onItem.call(c,e))}}});p.extend(l,w);return l});
//# sourceMappingURL=HtmlTableStore.js.map