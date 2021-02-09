const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
    const conn = net.createConnection({ 
      host: 'localhost',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    // conn.on('connect', () => {
    //   conn.write('you daed cuz you idled!');
    // });

    conn.on('connect', () => {
        console.log("Name: FOI");
      });


  
    return conn;
  }

  module.exports = connect();