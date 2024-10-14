// https://leetcode.com/problems/unique-email-addresses/description/

var numUniqueEmails = function (emails) {
	const cleanSet = new Set();
	// clean emails
	// loop through emails
	for (let i = 0; i < emails.length; i++) {
		const email = emails[i];
		let indexOfAt = email.indexOf("@");
		const indexOfPlus = email.indexOf("+");
		// split local and domain
		const local = email.slice(0, indexOfAt);
		const domain = email.slice(indexOfAt, email.length);
    let localNoFilter = local
		// if there's a + in local
		if (indexOfPlus !== -1) {
			// in local, remove chars after +
			localNoFilter = local.slice(0, indexOfPlus);
		}
		// in local, remove dots
		const localNoDots = localNoFilter
			.split("")
			.filter((char) => char !== ".")
			.join("");
		// join clean local and domain
		const cleanEmail = localNoDots + domain;
		// add to set
		cleanSet.add(cleanEmail);
	}

	// return size of set
	return cleanSet.size;
};

// console.log(
// 	numUniqueEmails([
// 		"test.email+alex@leetcode.com",
// 		"test.e.mail+bob.cathy@leetcode.com",
// 		"testemail+david@lee.tcode.com",
// 	])
// );
