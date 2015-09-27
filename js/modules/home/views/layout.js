define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ItemCollection=require('../model/ItemCollection');
    var ItemCollectioView= require('./itemCollectionView');

    module.exports = Marionette.ItemView.extend({
        id: 'home',
        template: '#home-layout'

        ,initialize: function(){
            var self=this;
            Marionette.ItemView.prototype.initialize.apply(this, arguments);
            this.collection=new ItemCollection();
            var collectionView =new ItemCollectioView({collection:this.collection});
            this.collection.fetch().then( function(){
                self.$el.find('#collection-container').html(collectionView.render().$el);
            })
        }
    });
});