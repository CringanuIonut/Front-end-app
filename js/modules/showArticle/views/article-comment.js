define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');



    module.exports = Marionette.ItemView.extend({
        id: 'article-comment',
        template: '#showArticle-article-comment'


    });
});