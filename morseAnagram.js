const morse = require('morse-decoder');
var input = process.argv.slice(2);
var anagramSource = ''
for(var args = 0; args < input.length; args ++) {
	anagramSource += input[args] + ' ';
}
var sourceTranslation = morse.encode(anagramSource);
var anagramBase = sourceTranslation.split('/').join('').split(' ').join('');
var baseLength = anagramBase.length
var perms = Math.pow(2, baseLength - 1);
console.log('///////////\n' +
						anagramSource + '\n' +
						sourceTranslation + '\n' +
						anagramBase  + '\n' +
						perms + '\n///////////\n');
console.log(perms);
var anagrams = [];
function insertSpace(startText, position) {
	return startText.substring(0, position) + ' ' + startText.substring(position);
}
for(var perm = 0; perm < perms; perm ++) {
  var pattern = perm.toString(2);
	var permOutput = anagramBase;
	for(var change = pattern.length - 1; change >= 0; change --) {
		if(pattern[change] === '1') {
			permOutput = insertSpace(permOutput, baseLength - (pattern.length - change));
		}
	}
	console.log(permOutput);
	console.log(morse.decode(permOutput));
	console.log('\n');
}
console.log('///////////\n' +
						anagramSource + '\n' +
						sourceTranslation + '\n' +
						anagramBase  + '\n' +
						perms + '\n///////////\n');
