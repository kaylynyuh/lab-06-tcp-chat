![cf](https://i.imgur.com/7v5ASc8.png) lab-06-tcp-chat-server
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Include
* gitignore
* eslint
* package.json
* gulpfile
* readme
 * Write a paragraph about your project
 * Write docs on how to get the project running
 * Write docs on how to connect to the server

## Directions
* Create a TCP Server use using the net module
* Create a Clinet Constructor
* When sockets connect to the server a new `Client` instance should be made
* Clients should have a unique `id` from `node-uuid`
 * **e.g.** `2309-4802-3948-...`
* Clients should have a unique 'nickname'
 * **e.g.** `guest-43`
* When sockets are connected with the ClientPool they should be given event listeners for `data`, `error`, and `close` events
 * When a socket emits the `close` event the socket should be removed from the client pool!
 * When a socket emmits the `error` event the error should be logged on the serever
 * When a socket emmits the `data` event the data should be logged on the server and the `\wack` commands below should be implemented

# Wack commands `'\'`
* `\all` should trigger a broadcast event
* `\nick` should allow a user change their nickname
* `\dm` should allow a user to send a message directly to another user by nick name
* when a user speaks their nickname should be printed
 * **i.e.** `teapot: Sup Hacker?`

## Bonus
* 2pts Write a test that
 * that tests `\nick` actually changes a clients nickname


##About this program:
This program is a chat emulator that allows the user to set up multiple clients with unique usernames that can communicate to other clients and their respective usernames via sockets. As the user you have the ability to send direct messages to other users that you create as well as broadcast messages to any given number of those users so long as the other clients are valid with valid usernames. If you create a message as one user, then the message as well as the username of that current user should be displayed to the other clients.

##User Guide:
To get started, run your server in node by using the following command:
```
node server.js
```
To access the server remotely:
```
telnet localhost 3000
```
Once you have successfully accessed the server, create your users by setting their nicknames(usernames) accordingly for each client. It is important to note that each user will belong to it's own client:
```
\nick <username>
```
In order to broadcast messages to all users:
```
\all <message>
```
*To verify, make sure that all users receive the same message.*

Direct message other users:
```
\<username> <message>
```
*To verify, make sure that the user you specified is the only recipient of the direct message.*
