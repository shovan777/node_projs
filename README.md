### Commands in debug mode
```list(10)```
- runs ten above and below current break point

```n```
- moves to very next statement

```c```
- means continue runs the program to the end

```repl```
-read evaluate print loop
- acess application as it currently exists
- see the value of the objects
- can also change objects

```debugger;```
- write this in your code where you want the line break

### Debugging with chrome
- ya you can debug with chrome with command as
```bash
node --inspect-brk debugging.js
```
- then go into chrome and enter in the address bar
```chrome://inspect```
- open dedicated dev tools
- you can also use the above command with nodemon

### arrow functions
- arrow functions do not bind the this keyword
- this refers to the parent binding
- without any parent this refers to global
- you don't get arguments keyword
