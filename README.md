# MERN_Chat_App

A full-stack real-time chat app: React (Chakra UI) on the client, Node.js, Express, Socket.io, and MongoDB on the server. Users can sign up, start direct chats, and exchange messages with live typing indicators.

## Tech stack

- **Frontend:** React 17, Chakra UI, React Router, Socket.io client, Axios  
- **Backend:** Express, Socket.io, Mongoose, JWT  
- **Database:** MongoDB (Atlas in production)

## Prerequisites

- Node.js 18+ and npm  
- A MongoDB connection string (e.g. MongoDB Atlas)  
- Optional: a [Cloudinary](https://cloudinary.com) upload preset for profile images during signup (see `Signup.js`)

## Local setup

1. Clone the repository and from the project root run:

   ```bash
   npm install
   cd frontend && npm install --legacy-peer-deps
   ```

2. Create a `.env` file in the **project root** (same folder as this README). Example:

   ```env
   MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<dbname>?options
   JWT_SECRET=your_long_random_string
   ```

   If your connection string has no database name, add `MONGO_DB_NAME=your_db_name` (see `backend/config/db.js`).

3. In **one** terminal, start the API (default: port 5000):

   ```bash
   npm start
   ```

4. In **another** terminal, start the React app (port 3000, proxies API calls to 5000):

   ```bash
   cd frontend
   npm start
   ```

5. Open `http://localhost:3000` in the browser.

## Environment variables (backend)

| Variable        | Description |
|----------------|-------------|
| `MONGO_URI`    | MongoDB connection string |
| `JWT_SECRET`   | Secret used to sign auth tokens |
| `MONGO_DB_NAME`| Optional. Forces the app database if missing or wrong in the URI |
| `CLIENT_URL`   | Optional. Frontend origin (e.g. a deployed site URL) for CORS and Socket.io when split from the API |

`PORT` is optional locally (defaults to `5000`).

## Deployment (Render)

The repo includes `render.yaml` for a **single Web Service** that runs the Express + Socket.io server and serves the production React build. Set `MONGO_URI` and `JWT_SECRET` in the Render dashboard. See the Render / Blueprint flow in the Render documentation for the exact steps.

## License

ISC (see `package.json`).
