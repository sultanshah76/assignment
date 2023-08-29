let personsname =('HAMMAD');
let lowercasename=personsname.toLowerCase();
console.log(lowercasename)
let uppercasename=personsname.toUpperCase();
console.log(uppercasename)
function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  }
let titleCaseName= toTitleCase(personsname);
console.log(titleCaseName)