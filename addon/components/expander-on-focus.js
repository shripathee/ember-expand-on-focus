import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['expanded'],

  focusOutTriggerClass: null,

  expanded: true,

  click: function(event) {
    var target = event.target;
    if($(target).closest($('.force-shrink')).length) {
      this.set('expanded', false);
    } else {
      this.set('expanded', true);
    }
  },

  didInsertElement: function() {
    $(window.document).on('click', {view: this}, this.closeOnOutsideClick);
  },

  closeOnOutsideClick: function(event) {
    var view = event.data.view;
    if(view && view.get('expanded')) {
      var focusOutTriggerClass = view.get('focusOutTriggerClass');
      if(focusOutTriggerClass) {
        if ($(event.target).closest($('.' + focusOutTriggerClass)).length) {
          view.set('expanded', false);
        }
      } else {
        if (!$(event.target).closest(view.$()).length) {
          view.set('expanded', false);
        }
      }
    }
  }
});
