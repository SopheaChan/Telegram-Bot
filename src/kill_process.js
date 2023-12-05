const childProcess = require('child_process');

const child = childProcess.exec('node myScript.js');

// Send a SIGKILL signal to the child process
child.kill('SIGKILL');