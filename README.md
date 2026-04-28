# Bloggie: Decoupled Full-Stack CRUD Application

A full-stack blogging platform built with Node.js and Express. This project demonstrates backend API development, complete CRUD (Create, Read, Update, Delete) functionality, and a decoupled client-server architecture. 

## Application Preview

| Home Feed (READ) | Create Post (POST) | Edit Post (PATCH) |
| :---: | :---: | :---: |
| ![Feed](https://github.com/user-attachments/assets/c4d3abf5-0a71-4f33-9199-32bfb5f9cc13) | ![Create](https://github.com/user-attachments/assets/d04de0b1-866f-40f4-8a63-044757251f55) | ![Edit](https://github.com/user-attachments/assets/da239bf8-674e-43f8-bc54-7af236a697e0) |
| *Consuming the /posts API* | *Handling new entries* | *Updating existing data* |

## Tech Stack
* **Backend API:** Node.js, Express.js
* **Frontend Server:** Node.js, Express.js, Axios
* **View Engine:** EJS (Embedded JavaScript templating)
* **Styling & UI:** Vanilla CSS, Client-side JavaScript

## Core Technical Features
* **Decoupled Architecture:** Built using a microservice-style approach. A dedicated backend REST API (`index.js`) manages data state, while a separate frontend server (`server.js`) handles user routing and view rendering via API consumption.
* **RESTful API Design:** Implements clean, standard HTTP methods (GET, POST, PATCH, DELETE) for complete resource management.
* **In-Memory Data Store:** Utilizes local array manipulation to simulate database persistence, handling unique ID generation and timestamp formatting on the server side.
* **Dynamic Client UI:** Features server-side rendering with EJS for dynamic content delivery, coupled with client-side DOM manipulation (`background.js`) to randomize the aesthetic experience on page load.

## How to Run Locally

Because this project uses a decoupled architecture, you need to start **both** the API server and the Frontend server to run the application fully.

1. Clone the repository and navigate into the project directory.
2. Install the required Node dependencies:
   ```bash
   npm install
