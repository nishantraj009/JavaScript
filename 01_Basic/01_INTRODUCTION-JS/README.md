
🍵 JavaScript Introduction

What is JavaScript:-

JavaScript (JS) is a high-level, dynamic, interpreted programming language primarily used to create interactive and dynamic features on web pages.

It follows ECMAScript standards and supports multiple programming paradigms:

Object-Oriented Programming

Functional Programming

Event-Driven Programming

JS is known for:

Asynchronous & non-blocking behavior (via event loop)

Prototype-based inheritance

First-class functions (functions can be treated like variables)

History of JavaScript
Year	Event
1995	Created by Brendan Eich at Netscape in just 10 days

1996	Initially named Mocha → LiveScript → JavaScript

1997	Standardized by ECMA International → ECMAScript

2009	Node.js launched → JS moves to server-side

2015	ES6 released, major upgrade (classes, let/const, promises, modules, etc.)

Now	Used across web, mobile, backend, AI, cloud, etc.

Note: The name "JavaScript" was a marketing strategy to ride on Java’s popularity — both languages are completely different.

Where Does JavaScript Run?

JavaScript can run in:

Web Browsers (Client-Side)

Server-Side via Node.js

Mobile Apps (React Native, Ionic)

Desktop Apps (Electron.js)

Cloud Services

IoT / Embedded Systems (Espruino, Tessel)

Reason: Browsers and Node.js provide runtime environments to execute JS code.

How Does JS Work in Browser?

Browser provides:

JS Engine (Executes code)

Web APIs (DOM, timers, network, etc.)

Event Loop (Handles async tasks)

Call Stack & Callback Queue

Flow:
JS code → Call Stack → Web APIs (if async) → Callback Queue → Event Loop → Executes when stack is free

Popular JavaScript Engines
Browser / Platform	Engine Name
Chrome	V8 Engine
Node.js	V8 Engine
Firefox	SpiderMonkey
Safari	JavaScriptCore (Nitro)
Microsoft Edge	Chakra (older), now V8

JS Engine Role:

Parses and compiles JS to machine code (JIT compiler)

Executes optimized code for better performance

ECMAScript (ES) Versions

Important releases:

ES5 (2009): Strict mode, JSON, Array methods

ES6 (2015): let/const, classes, arrow functions, promises, modules

Later versions: async/await, optional chaining, BigInt, etc.

New features release every year — keeping JS modern and powerful.

Why JavaScript is So Popular?

✔ Only language that runs natively in browsers
✔ Massive ecosystem — npm (largest package library)
✔ Full-stack development with same language (React + Node + MongoDB)
✔ Community support, frameworks, performance upgrades

Use Cases of JavaScript

Web Frontend → React, Angular, Vue

Backend → Node.js, Express

Mobile Apps → React Native

Game Development → Phaser, Babylon.js

AI & ML → TensorFlow.js

Desktop Apps → Electron.js

Automation & Testing → Cypress, Playwright

Key Technical Features (Interview Points)

Single-threaded, but async via event loop

Prototype-based object model

Garbage collected memory management

Dynamic typing

Supports Modules (ESM & CommonJS)



working of JS

JS interacts with the DOM (Document Object Model)

When a webpage loads:

Browser reads HTML → Creates DOM Tree

Browser reads CSS → Creates CSSOM

JS can change HTML & style using DOM

Example: