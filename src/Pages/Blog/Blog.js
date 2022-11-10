import React from "react";

const Blog = () => {
  return (
    <section class="container mx-auto glass lg:h-screen mt-10 rounded-lg flex flex-col items-center justify-center text-neutral-content gap-y-5">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ What is the difference between SQL and NoSQL databse?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">SQL vs NoSQL:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ What is JWT, and how does it work?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">JWT web token:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JWTs can be signed using
            a secret (with the HMAC algorithm) or a public/private key pair
            using RSA or ECDSA.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ What is the difference between javascript and NodeJS??
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Javascript vs NodeJS:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Both of these are used for programming. But there is a significant
            difference between Node.JS and Javascript. JavaScript is a
            lightweight scripting language that is object-oriented. It is used
            for developing HTML pages that are dynamic and have various
            interactive effects on their web pages. The Node.JS, on the other
            hand, helps in representing a list of all the methods and objects
            that the JavaScript code can access when run via node interpreters
            or in the V8 engine.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ How does NodeJS handle multiple requests at the same time?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">NodeJS handling multiple requests:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            The short answer would be "NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded". NodeJS Web Server maintains a limited Thread Pool
            to provide services to client requests. Multiple clients make
            multiple requests to the NodeJS server. NodeJS receives these
            requests and places them into the EventQueue . NodeJS server has an
            internal component referred to as the EventLoop which is an infinite
            loop that receives requests and processes them. This EventLoop is
            single threaded. In other words, EventLoop is the listener for the
            EventQueue. The listener(the event loop) processes the request and
            if it is able to process the request without needing any blocking IO
            operations, then the event loop would itself process the request and
            sends the response back to the client by itself. If the current
            request uses blocking IO operations, the event loop sees whether
            there are threads available in the thread pool, picks up one thread
            from the thread pool and assigns the particular request to the
            picked thread. That thread does the blocking IO operations and sends
            the response back to the event loop and once the response gets to
            the event loop, the event loop sends the response back to the
            client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
