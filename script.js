let accounts = [];

// Add Account
document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const balance = parseFloat(document.getElementById('balance').value);

    // Check if the account number already exists
    const existingAccount = accounts.find(acc => acc.accountNumber === accountNumber);
    if (existingAccount) {
        alert('Account with this number already exists!');
        return;
    }

    const newAccount = { name, accountNumber, balance };
    accounts.push(newAccount);

    displayAccounts();
    document.getElementById('accountForm').reset();
    alert('Account successfully added!');
});

// Deposit/Withdraw Funds
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = parseInt(document.getElementById('transactionAccountNumber').value);
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const transactionType = document.getElementById('transactionType').value;

    const account = accounts.find(acc => acc.accountNumber === accountNumber);
    const messageElement = document.getElementById('transactionMessage');

    if (account) {
        if (transactionType === 'deposit') {
            account.balance += amount;
            messageElement.textContent = `Successfully deposited ${amount.toFixed(2)}.`;
            messageElement.style.color = '#2ecc71'; // Green for success
        } else if (transactionType === 'withdraw') {
            if (account.balance >= amount) {
                account.balance -= amount;
                messageElement.textContent = `Successfully withdrew ${amount.toFixed(2)}.`;
                messageElement.style.color = '#2ecc71'; // Green for success
            } else {
                messageElement.textContent = 'Insufficient balance!';
                messageElement.style.color = '#e74c3c'; // Red for error
            }
        }
        displayAccounts();
    } else {
        messageElement.textContent = 'Account not found!';
        messageElement.style.color = '#e74c3c'; // Red for error
    }

    document.getElementById('transactionForm').reset();
});

// View Balance
document.getElementById('viewBalanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountNumber = parseInt(document.getElementById('viewBalanceAccountNumber').value);
    const account = accounts.find(acc => acc.accountNumber === accountNumber);

    const balanceMessageElement = document.getElementById('balanceMessage');

    if (account) {
        balanceMessageElement.textContent = `The current balance for account ${accountNumber} is ${account.balance.toFixed(2)}.`;
        balanceMessageElement.style.color = '#3498db'; // Blue for info
    } else {
        balanceMessageElement.textContent = 'Account not found!';
        balanceMessageElement.style.color = '#e74c3c'; // Red for error
    }

    document.getElementById('viewBalanceForm').reset();
});

// Display all accounts in the table
function displayAccounts() {
    const accountsTableBody = document.querySelector('#accountsTable tbody');
    accountsTableBody.innerHTML = '';

    accounts.forEach(account => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.name}</td>
            <td>${account.accountNumber}</td>
            <td>${account.balance.toFixed(2)}</td>
        `;
        accountsTableBody.appendChild(row);
    });
}
