define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateArticleModel = require('../models/model');



    module.exports = Marionette.ItemView.extend({
        id: 'create-article',
        template: '#createArticle-layout',

        events:{
            'click #saveButton':'saveNewArticle'
        },

        initialize:function(){
            this.model = new CreateArticleModel();

        },
        saveNewArticle: function(){
            var articleTitle=$('#articleTitle').val();
            var articleDescription=$('#articleDescription').val();
            var articleComments=$('#articleComments').val();

            this.model.set('title',articleTitle);
            this.model.set('description',articleDescription);
            this.model.set('comments',articleComments);

            this.model.save();
        }


    });
});