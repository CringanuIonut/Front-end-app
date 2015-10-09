define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UpdateArticleModel = require('../models/model');



    module.exports = Marionette.ItemView.extend({
        id: 'update-article',
        template: '#updateArticle-layout',

        events:{
            'click #saveButton':'saveNewArticle',
            'click #deleteButton':'deleteArticle'
        },

        initialize:function(options){
            this.model = new UpdateArticleModel({id:options.id});
            this.model.fetch();
            this.listenTo(this.model,'destroy',this.goHome);



        },
        goHome:function(){
            Backbone.history.navigate('#home', true);
        },
        saveNewArticle: function(){
            var articleTitle=$('#updateTitle').val();
            var articleDescription=$('#updateDescription').val();
            var articleComments=$('#updateComments').val();

            this.model.set('title',articleTitle);
            this.model.set('description',articleDescription);
            this.model.set('comments',articleComments);

            this.model.save();
        },
        deleteArticle:function(){
            this.model.destroy().then(function(){
                this.render();
            });
        }


    });
});