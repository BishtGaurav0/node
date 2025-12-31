1. What is CORS? Why does it exist?

CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by browsers that allows a server to specify which domains are permitted to access its resources via cross-origin HTTP requests.

Why it exists:
Browsers enforce a same-origin policy by default to prevent malicious websites from making unauthorized requests to another site. CORS provides a controlled way to relax this restriction for trusted domains.

2. Explain the Same-Origin Policy

Same-Origin Policy (SOP) is a security concept in browsers that restricts scripts on one origin (protocol + domain + port) from interacting with resources from a different origin.

Example:

https://example.com can access https://example.com/api

https://evil.com cannot access https://example.com/api unless allowed via CORS

Purpose: Prevents malicious scripts from reading sensitive data from other sites.

3. What are preflight requests? When do they occur?

Preflight requests are OPTIONS requests sent by the browser before the actual request to check if the server allows the cross-origin request.

When they occur:

HTTP methods other than GET, POST, HEAD

Custom headers (like Authorization)

Content types other than simple types (application/x-www-form-urlencoded, multipart/form-data, text/plain)

Purpose: Ensure that the actual request is safe to send.

4. How do you configure CORS in Express?

You can configure CORS in Express using the cors
 package:

const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins
app.use(cors());

// Or allow specific origins
app.use(cors({
  origin: 'https://example.com'
}));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS enabled!' });
});

app.listen(3000);

5. What is CSRF (Cross-Site Request Forgery)? How do you prevent it?

CSRF is an attack where a malicious site tricks a logged-in user into performing actions on another site without their consent.

Example: A user logged into a banking site clicks a hidden link on another site that transfers money.

Prevention:

Use CSRF tokens in forms (verify on server)

Use SameSite cookies (SameSite=Lax or Strict)

Avoid relying only on cookies for authentication

6. What is XSS (Cross-Site Scripting)? How do you prevent it?

XSS is a vulnerability where an attacker injects malicious scripts into web pages viewed by other users.

Types:

Stored XSS (data saved in database)

Reflected XSS (data reflected in URL)

DOM-based XSS (manipulated in client-side JS)

Prevention:

Escape user input before rendering (<, >, &, ")

Use frameworks with automatic escaping (React, Angular)

Use Content Security Policy (CSP) headers

7. What is SQL Injection? How do you prevent it?

SQL Injection is an attack where an attacker injects malicious SQL queries via user input to manipulate the database.

Example:

SELECT * FROM users WHERE username = 'admin' OR '1'='1';


Prevention:

Use prepared statements / parameterized queries

Validate and sanitize user input

Avoid dynamic SQL concatenation

8. What are rate limiting and throttling? Why are they important?

Rate limiting: Restricts the number of requests a client can make in a given time window.

Throttling: Delays requests when clients exceed limits instead of blocking immediately.

Importance:

Protects against DDoS attacks

Prevents abuse of APIs

Reduces server overload

Encourages fair usage

9. What is the principle of least privilege?

Principle of Least Privilege (PoLP) means giving users, processes, or systems only the minimum access necessary to perform their tasks.

Benefits:

Reduces risk of accidental or malicious damage

Limits exposure in case of compromised accounts

Simplifies auditing and complianc
