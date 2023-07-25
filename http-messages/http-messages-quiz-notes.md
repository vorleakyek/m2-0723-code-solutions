# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A: A client is a computer or a program that, as part of its operation, relies on sending a request to another program or a computer hardware or software that accesses a service made available by a server (which may or may not be located on another computer).

For example, web browsers are clients that connect to web servers and retrieve web pages for display.

- What is a server?
  A: A server refers to a computer program or a hardware system that provides services, resources, or functionalities to other computer programs, devices, or users over a network.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  The browswer sends an HTTP GET request to the server hosting the secified resource.

- What three things are on the start-line of an HTTP **request** message?
  A: An HTTP method, a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed.

The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context.

The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What three things are on the start-line of an HTTP **response** message?
  A: The start line of an HTTP response, called the status line, contains the following information:

The protocol version, usually HTTP/1.1.

A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302

A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

Example: A typical status line looks like: HTTP/1.1 404 Not Found.

- What are HTTP headers?
  A: Additional information sent by a client (web browser) or a server along with an HTTP request or response.

HTTP headers consist of key-value pairs, where the key represents the header name, and the value contains the information or data associated with that header.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  A: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

- Is a body required for a valid HTTP request or response message?
  A: The final part of the request is its body. Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one. Some requests send data to the server in order to update it: as often the case with POST requests (containing HTML form data).

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
