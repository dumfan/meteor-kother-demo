Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

  Template.hello.helpers({
    data: function() {
      return Posts.find();
    }
  });

  Template.hello.events({
    'click .add': function () {
      Posts.insert({
        text: Fake.sentence(10)
      });
    },
    'click .delete': function() {
      Posts.remove(this._id);
    },
    'click .deleteall': function() {
      Meteor.call('deleteAll');
    }
  });
}

Meteor.methods({
  deleteAll: function () {
    Posts.remove({})
  }
});