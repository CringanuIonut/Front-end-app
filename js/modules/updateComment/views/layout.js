define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateCommentModel = require('../models/updateModel');

    module.exports = Marionette.ItemView.extend({

        id: 'update-comment',
        template: '#updateComment-layout',

        events:{
            'click #saveButton':'saveNewComment',
            'click .ButtonDel' :'deleteComment'
        },
        initialize:function(options){
            this.model = new updateCommentModel({
                commentId:options.commentId,
                articleId:options.articleId
            });
            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
        },
        goHome:function(){
            Backbone.history.navigate('#show-article/'+this.options.articleId, true);
        },
        saveNewComment : function() {

            var updateContent = $('#updateContent').val();

            this.model.set('content', updateContent);

            this.model.save();
            Backbone.history.navigate('#show-article/'+this.options.articleId, true);
        },
        deleteComment : function(){

            this.model.destroy();
        }
    });
});
