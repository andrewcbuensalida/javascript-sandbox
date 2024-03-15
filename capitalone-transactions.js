microservices;
ui;
aws;
streaming;
payment;

// console.log('Hello world');

const accounts = [];

function createAccount(accountId) {
	if (accounts.find((account) => account.accountId === accountId)) {
		return false;
	}
	const newAccount = {
		accountId,
		balance: 0,
	};
	accounts.push(newAccount);
	return true;
}

function deposit(accountId, amount) {
	const foundAccount = accounts.find(
		(account) => account.accountId === accountId
	);
	if (foundAccount) {
		foundAccount.balance += Number(amount);
		return foundAccount.balance;
	} else {
		return -1;
	}
}

function transfer(fromId, toId, amount) {
	amount = parseFloat(amount);
	console.log("amount", amount);
	const foundFromAccount = accounts.find(
		(account) => account.accountId === fromId
	);
	const foundToAccount = accounts.find(
		(account) => account.accountId === toId
	);
	if (amount < 0) {
		return -1;
	}
	if (!foundFromAccount || !foundToAccount) {
		return -1;
	}
	if (fromId === toId) {
		return -1;
	}
	if (foundFromAccount.balance < amount) {
		return -1;
	}
	foundFromAccount.balance -= amount;
	foundToAccount.balance += amount;
	return foundFromAccount.balance;
}

const operations = [
	["CREATE_ACCOUNT", "account1"],
	["CREATE_ACCOUNT", "account1"],
	["CREATE_ACCOUNT", "account2"],
	["DEPOSIT", "non-existing", "2700"],
	["DEPOSIT", "account1", "2700"],
	["TRANSFER", "account1", "account2", "2701"],
	["TRANSFER", "account1", "account2", "200"],
	["TRANSFER", "account1", "account2", "-100"],
];

function run(operations) {
	const results = [];
	for (let i = 0; i < operations.length; i++) {
		switch (operations[i][0]) {
			case "CREATE_ACCOUNT":
				// console.log(createAccount(operations[i][1]))
				results.push(createAccount(operations[i][1]));
				break;
			case "DEPOSIT":
				// console.log(deposit(operations[i][1],operations[i][2]))
				results.push(deposit(operations[i][1], operations[i][2]));
				break;
			case "TRANSFER":
				results.push(
					transfer(
						operations[i][1],
						operations[i][2],
						operations[i][3]
					)
				);
				break;
			default:
				return -1;
		}
	}
	return results;
}

// run(operations)
console.log(run(operations));
