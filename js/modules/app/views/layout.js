define(function(require, exports, module) {
    var $ = require('jquery');
    var Marionette = require('marionette');
    var app = require('app');

    module.exports = Marionette.Layout.extend({
        el: $('body'),
        template: '#app-layout',
        regions: {
            sidebar: '#sidebar',
            container: '#container',
            footer:'#footer',
            newsbar:'#newsbar'
        },
        initialize: function() {
            this.render();
        }
    });
});