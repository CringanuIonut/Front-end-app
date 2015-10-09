define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ArticleComment=require('./article-comment');


    module.exports = Marionette.CollectionView.extend({
        itemView:ArticleComment


    });
});