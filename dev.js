import {spawn} from 'node:child_process';
const api=spawn(process.platform==='win32'?'node':'node',['server.js'],{stdio:'inherit',env:{...process.env,PORT:'5174'}});
const vite=spawn(process.platform==='win32'?'npm':'npm',['run','dev:client'],{stdio:'inherit',env:process.env,shell:process.platform==='win32'});
const stop=()=>{api.kill();vite.kill();};process.on('SIGINT',stop);process.on('SIGTERM',stop);process.on('exit',stop);
