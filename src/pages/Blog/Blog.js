import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto my-4'>
            <h3>Difference between SQL and NoSQL</h3>
            <p>
                SQL is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
            <h3>What is JWT, and how does it work?</h3>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            <h3>What is the difference between javascript and NodeJS?</h3>
            <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
            <h3>How does NodeJS handle multiple requests at the same time?</h3>
            <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
        </div>
    );
};

export default Blog;