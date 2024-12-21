# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js server development: unhandled exceptions within asynchronous callbacks.  The `bug.js` file shows a server that may throw an error within a `setTimeout` callback.  This error is not properly handled, leading to a server crash.

The `bugSolution.js` file presents a solution using `try...catch` blocks within the asynchronous callback to gracefully handle exceptions and prevent server crashes.