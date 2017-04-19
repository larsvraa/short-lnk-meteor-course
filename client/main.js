import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';
import { Tracker } from 'meteor/tracker';
import '../imports/startup/simple-schema-configuration';
import { Session } from 'meteor/session';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange (isAuthenticated);
});


Meteor.startup(() => {
  Session.set('showVisible', true)
  ReactDOM.render(routes, document.getElementById('app'));
});
