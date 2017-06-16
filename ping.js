module.exports = {
    ping: ping
};

function ping() {
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
      return arrayMsg;
}