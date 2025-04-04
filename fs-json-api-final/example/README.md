# FS JSON API Example

A simple project to demonstrate listing, posting, and saving JSON data using the fs module in Node.js.

## 📦 How to Use

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `data` folder if not present:
   ```
   mkdir data
   ```

3. Start the server:
   ```
   npm run dev
   ```

4. Open `api.http` and use the REST Client extension in VSCode to test the endpoints.

## 📁 Project Structure

```
fs-json-api/
└── example/
    ├── public/
    │   └── index.html         ← Frontend page
    ├── data/                  ← Stores JSON files
    ├── .gitignore             ← Ignores node_modules and data
    ├── api.http               ← REST Client test routes
    ├── index.js               ← Express + fs backend
    ├── package.json           ← Project metadata and scripts
    └── README.md              ← Project instructions
```

## 🚀 Endpoints

- `GET /ping` – test if server is alive
- `POST /api/data` – sends JSON data to server and saves it to a file

Happy learning!