# One Million Checkboxes Clone

Recently came across a website called One Million Checkboxes, where every user can check or uncheck a box, and the collective goal is to have all million boxes checked.

A basic HTTP req-res cycle isn’t ideal for this kind of real-time interaction. Sure, we could use polling (asking the server every 5–10 seconds for updates), but imagine 1,000 users each sending a request every 5 seconds — that’s a huge load on the server.

This is where **WebSocket Implementation** comes into the picture. Instead of closing the connection after each request, the client sends an upgrade request, and once accepted, the server can push updates to the client anytime, and vice versa. This makes it efficient for reflecting one user’s actions instantly to all others.

For my implementation, I used Socket.IO, which makes working with WebSockets almost as simple as using Express for HTTP.

Building such projects is always fun. 🚀
