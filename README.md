# 🛍️ Ecommerce Signup & Login App

A simple React + Vite project demonstrating user **Signup**, **Login**, and **Navigation** using **React Router** and **MockAPI** for backend simulation.

---

## 🚀 Features
- 🧾 User Signup form (stores data on [MockAPI](https://mockapi.io))
- 🔑 User Login with email & password validation
- 🌐 Navigation using `react-router-dom`
- 🎨 Beautiful and responsive UI using CSS
- ⚡ Built with **Vite** for fast development

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite  
- **Routing:** React Router DOM  
- **Backend (Mock API):** [mockapi.io](https://mockapi.io)  
- **Language:** JavaScript (ES6+)

---

## 📂 Folder Structure
ecommerce/
├── src/
│ ├── App.jsx
│ ├── Signup.jsx
│ ├── Login.jsx
│ ├── Home.jsx
│ ├── signup.css
│ ├── login.css
│ └── home.css
├── package.json
├── vite.config.js
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
2️⃣ Navigate into the project folder
bash
Copy code
cd ecommerce
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Run the development server
bash
Copy code
npm run dev
Then open the provided URL, usually:

arduino
Copy code
http://localhost:5173/
🧠 How It Works
Signup Page:

User enters name, email, and password.

Details are sent via fetch() to a MockAPI endpoint.

On success, user is redirected to the Login page.

Login Page:

Fetches all registered users from MockAPI.

Validates email and password.

On success, redirects to the Home page.

Home Page:

Simple welcome screen after login.

🧰 Dependencies
bash
Copy code
npm install react-router-dom
npm install vite
💅 CSS Styling
Separate CSS files (signup.css, login.css, home.css)

Responsive layouts using Flexbox

Gradient backgrounds and hover effects

🧑‍💻 Author
Nagulapalli Dasarad
📧 ndasarad@gmail.com
🌐 https://github.com/Dasarad007

🪪 License
This project is open-source and available under the MIT License.