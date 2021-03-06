import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var pingCount = 0;
function heartbeat() {
  console.log('->recordPing pingCount: ' + pingCount);
  Meteor.call('recordPing', pingCount, function(err) {
    if(typeof err !== 'undefined') alert(err);
    console.log('<-recordPing pingCount: ' + pingCount);
    pingCount = pingCount + 1;
  });
  heartbeatTimeout = setTimeout(heartbeat, 3000);
}
heartbeat();