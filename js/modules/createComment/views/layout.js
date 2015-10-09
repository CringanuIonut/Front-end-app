define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateCommentModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'create-comment',
        template: '#createComment-layout',

        events:{
        'click #saveButton': 'saveNewComment'
    },

    initialize: function(options){
        this.model = new CreateCommentModel();
        this.model.id = options.id
    },

    saveNewComment : function() {
         var commnentId = $('#articleTitle').val();
         var commnentContent = $('#articleDescription').val();

         this.model.set('articleId', commnentId);
         this.model.set('content', commnentContent);

         this.model.save();
     }

});
});