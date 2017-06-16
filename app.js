var restify = require('restify');
var builder = require('botbuilder');
//=========================================================
// Bot Setup test
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "25016aed-f99a-40a3-a8d7-936969fd7720",
    appPassword: "nrzuU9PchFjxkZ2Wk2E8cgb"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
            .address(message.address)
            .text("Hello %s... Thanks for adding me. Say 'hello' to see some great demos. test", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('typing', function (message) {
    // User is typing
});
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});
//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function (content) {
    return this.indexOf(content) !== -1;
}
bot.dialog('/', function (session) {
    if (session.message.text.toLowerCase().contains('hello')) {
        session.send(`Hey, How are you?`);
    }
    else if (session.message.text.toLowerCase().contains('help')) {
        session.send(`How can I help you?`);
    }
    else if (session.message.text.toLowerCase().contains('ping')) {
        var arrayMsg = [
            'Pinging skype [Silvadata] with 32 bytes of data:',
            'Request timed out.',
            'Request timed out.',
            'Reply from Silvadata: bytes=32 time=37ms TTL=54',
            'Request timed out.',
            '',
            'Ping statistics for Silvadata:',
            '     Packets: Sent = 4, Received = 1, Lost = 3 (75% loss),',
            'Approximate round trip times in milli-seconds:',
            '     Minimum = 33ms, Maximum = 37ms, Average = 35ms`;'
        ];
        arrayMsg.forEach(row => {
            session.send(row);
        })
    }
    else if (session.message.text.toLowerCase().contains('bere')) {
        session.send('da ar fi buna o bere acuma');
    }
    else {
        session.send(`Sorry I don't understand you...`);
    }
});


