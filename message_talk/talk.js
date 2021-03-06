var BOSH_SERVICE = 'http://ccs.cs.ccu.edu.tw:5280/http-bind';
var connection = null;
var to_link = null;

function log(msg) 
{
	$('#log').append('<div></div>').append(document.createTextNode(msg));
}

function onConnect(status)
{
	if (status == Strophe.Status.CONNECTING) {
		log('Strophe is connecting.');
	}
	else if (status == Strophe.Status.CONNFAIL) {
		log('Strophe failed to connect.');
		$('#connect').get(0).value = 'connect';
	}
	else if (status == Strophe.Status.DISCONNECTING) {
		log('Strophe is disconnecting.');
	}
	else if (status == Strophe.Status.DISCONNECTED) {
		log('Strophe is disconnected.');
		$('#connect').get(0).value = 'connect';
	}
	else if (status == Strophe.Status.CONNECTED) {
		log('Strophe is connected.');
		//log('ECHOBOT: Send a message to ' + connection.jid + ' to talk to me.');
		log('Console: login successfully!');

		
		connection.addHandler(onMessage, null, 'message', null, null, null); 
		connection.send($pres().tree());
	}
}
function sendMessage(txt)
{
	var from = $('#jid').get(0).value;
	var reply = $msg({to: to_link, from: from, type: 'chat'}).cnode(Strophe.xmlElement('body', '', txt));
	connection.send(reply.tree());
	log('Console: sent message "' + txt + '" to ' + to_link + ' from ' + from);
}
function onMessage(msg) {
	var to = msg.getAttribute('to');
	var from = msg.getAttribute('from');
	var type = msg.getAttribute('type');
	var elems = msg.getElementsByTagName('body');

	if (type == "chat" && elems.length > 0) {
		var body = elems[0];

		//log('ECHOBOT: I got a message from ' + from + ': ' + Strophe.getText(body));

		log(from + ':' + Strophe.getText(body));

		//var reply = $msg({to: from, from: to, type: 'chat'}).cnode(Strophe.copyElement(body));
		//var reply = $msg({to: from, from: to, type: 'chat'}).c("body").t('Hello');
		//connection.send(reply.tree());

		//log('ECHOBOT: I sent ' + from + ': ' + Strophe.getText(body));
	}

    // we must return true to keep the handler alive.  
    // returning false would remove it after it finishes.
    return true;
}

$(document).ready(function () {
	connection = new Strophe.Connection(BOSH_SERVICE);
    // Uncomment the following lines to spy on the wire traffic.
    //connection.rawInput = function (data) { log('RECV: ' + data); };
    //connection.rawOutput = function (data) { log('SEND: ' + data); };

    // Uncomment the following line to see all the debug output.
    //Strophe.log = function (level, msg) { log('LOG: ' + msg); };

    $('#send').bind('click', function() { sendMessage($('#txt').get(0).value); });
    
    $('#lock').bind('click', function () {
	    	to_link = $('#to').get(0).value;
	    	log('Console: target: ' + to_link + ' locked.');
    	});

    
    $('#connect').bind('click', function () {

    	var button = $('#connect').get(0);
    	if (button.value == 'connect') {
    		button.value = 'disconnect';
    		connection.reset();
    		connection.connect($('#jid').get(0).value, $('#pass').get(0).value,	onConnect);
    	}
    	else {
    		button.value = 'connect';
    		connection.disconnect();
    	}
    });
});
