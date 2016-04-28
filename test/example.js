var assert = require('assert');
var utils = require('../routes/utils.js')

describe('utils', function(){
 describe('getEventId', function(){ 
 	it('should return the event ID', function(){ 
 	assert.strictEqual(false, utils.getEventId()); 
 	assert.strictEqual(false, utils.getEventId('')); 
 	assert.strictEqual('736749926396099', utils.getEventId('736749926396099')); 
 	assert.strictEqual('736749926396099', utils.getEventId('736749926396099/')); 
 	assert.strictEqual('736749926396099', utils.getEventId('/736749926396099/')); 
 	assert.strictEqual('736749926396099', utils.getEventId('/736749926396099')); 
 	assert.strictEqual('736749926396099', utils.getEventId('/events/736749926396099')); 
 	assert.strictEqual('736749926396099', utils.getEventId('/events/736749926396099/')); 
 	assert.strictEqual('736749926396099', utils.getEventId('events/736749926396099/')); 
 	assert.strictEqual('736749926396099', utils.getEventId('736749926396099/?sid_reminder=7661468456239235072')); 
 	assert.strictEqual('736749926396099', utils.getEventId('https://www.facebook.com/events/736749926396099/?sid_reminder=7661468456239235072'));
 	 });
 	});
 }); 