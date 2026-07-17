# 🏦Bank Management System

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Project Title
Bank Account Management System

## 📝 Project Description
This project is a simple, interactive banking web application built with plain HTML, CSS, and JavaScript. It allows users to add bank accounts, perform deposits and withdrawals, view balances, and see the full list of accounts in a dynamic table. The application is implemented as a front-end-only system and uses in-memory JavaScript data rather than a backend database.

## ✨ Features
- Add a new bank account with account holder name, account number, and initial balance
- Deposit funds into an existing account
- Withdraw funds from an existing account with balance validation
- View the current balance of a specific account
- Display all accounts in a table format
- Show success and error messages for transactions
- Prevent duplicate account numbers

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Runtime | Any modern browser |

## 🧭 Project Architecture / Folder Structure

```text
Bank Management System/
├── index.html          # Main UI structure
├── style.css           # Styling for the dashboard and forms
├── script.js           # Application logic for account management
├── fahadrehman07hr-comma-sep-csv.csv  # CSV file present in the repository
└── README.md           # Project documentation
```

## 🔄 Workflow
1. Open the application in a browser.
2. Use the “Add Account” form to create a new account.
3. Use the “Deposit/Withdraw Funds” form to update an account balance.
4. Use the “View Balance” form to retrieve the current balance.
5. Review the live account list in the table as data changes.

## 📊 Dataset Information
A CSV file named `fahadrehman07hr-comma-sep-csv.csv` is present in the repository. Its contents include employee-related fields such as satisfaction level, evaluation score, department, and salary. However, the current banking interface does not load or use this file; account data is managed directly in JavaScript during runtime.

## ⚙️ Installation & Setup
This project is a static web application and does not require a package manager or build step.

### Steps
1. Clone or download the repository.
2. Open the project folder.
3. Launch `index.html` in a browser.

### Optional
You can also use a local development server such as Live Server in VS Code for a smoother preview experience.

## ▶️ Usage
- Enter the required account details in the form and click “Add Account”.
- Select a transaction type and enter an amount to deposit or withdraw.
- Enter an account number to view its balance.
- The application updates the table and shows feedback messages instantly.

## 📸 Screenshots
> Placeholder for screenshots

![App Screenshot Placeholder](https://via.placeholder.com/1200x600?text=TRR+Bank+App+Screenshot)

## 📈 Results / Output
The application provides real-time feedback and updates the account list as follows:
- New accounts appear in the table after creation.
- Deposit and withdrawal actions update balances immediately.
- Balance lookup displays the current balance for the requested account.
- Error messages appear for invalid or insufficient transaction scenarios.

## 🚀 Future Enhancements
Possible improvements for future versions include:
- Persistent storage using `localStorage` or a database
- User authentication and account security
- Transaction history per account
- Search and filter options for accounts
- Responsive design improvements for mobile devices
- Backend integration for real-world banking workflows

## ⚠️ Challenges Faced
- Ensuring that duplicate account numbers are rejected
- Preventing withdrawals that exceed the available balance
- Keeping the account table and feedback messages synchronized with user actions
- Building the interface as a lightweight single-page experience with no backend

## 🎓 Learning Outcomes
This project helped reinforce core frontend development concepts such as:
- DOM manipulation with JavaScript
- Event handling for forms and buttons
- Client-side validation and conditional logic
- Dynamic UI updates using generated table rows
- Structured styling with CSS for a clean user interface

## 📄 License
No explicit license has been specified for this repository yet.

## 👤 Author
Navya
