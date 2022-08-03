// Simple RegEX patterns
//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// Example 1:
let regex = /ninja/g; // g : find all matches rather than stopping after the first match)
let text = 'The net ninja';

console.log('Simple RegEX patterns');
console.log('Example 1:')
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Character sets
// Example 1:
regex = /[ng]inja/g;
text = 'The net ninja ginja';

console.log('Character sets');
console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /[abc123]000/g;
text = 'a000 b000 c000 1000 e000';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /[^a1]000/g;
text = 'a000 b000 c000 1000 e000';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Ranges

// Example 1:
regex = /[a-z]inja/g;
text = 'ninja ginja Winja zinja';

console.log('Ranges');
console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /[A-Z]inja/g;
text = 'Ninja ginja Winja zinja';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /[a-z]inja/gi; // i : Perform case-insensitive matching
text = 'Ninja ginja Winja zinja';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 4:
regex = /[5-9]inja/g;
text = '5inja 6inja 3inja 9inja';

console.log('Example 4:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 5:
regex = /[0-9][0-9][0-9][0-9][0-9][0-9]/g; // pattern: 6 number
text = '123456781231293912';

console.log('Example 5:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Repeating Characters

// Example 1:
regex = /[0-9]+/g;  // pattern: all numbers. NOTE  another example: /[a-z]+/g
text = '123456781231293912';

console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /[0-9]{11}/g;  // pattern: specifict length with number
text = '123456781231293912';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /[a-z]{5}/g;  // pattern: specifict length with character
text = 'hello this is a match';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 4:
regex = /[a-z]{3,5}/g;  // pattern: specifict length {min,max}
text = 'hello this is a match';

console.log('Example 4:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 5:
regex = /[0-9]{5,}/g;  // pattern: specifict length {min,} => {min,infinity}
text = '123456789 12345';

console.log('Example 5:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Metacharacters

// Example 1:
regex = /\d/g;  // \d match any digit character (same as [0-9])
text = '123456789 12345';

console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /\w/g;  // \w match any word character (same as a-z,A-Z,and _'s)
text = 'this is a 2\'nd prove_ *';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /\s/g;  // \s match a whitespace character (space,tabs etc)
text = '123456789 abcdasd *]"#$%';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 4:
regex = /\d\s\w/g;
text = '1 n 123 mas';

console.log('Example 4:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 5:
regex = /\d{3}\s\w{3,}/g;
text = '123 USA 902 M 321 MAATT';

console.log('Example 5:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Special Character 

// Example 1:
regex = /hello?/g; // ? : optional
text = 'hell hello';

console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /[a-z]+?ina/g; // busca todo lo que termine en ina
text = 'chocolate guanina pera verduras citocina melanina cafeina cafe';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /car./g; // . :	Find a single character, except newline or line terminator
text = 'caramelo carcel cariño car';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);


// Example 4:
regex = /.+/g; // select any charecter.
text = 'caramelo carcel cariño car';

console.log('Example 4:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 5:
regex = /lo*/g; 
text = 'Hellooo World! Hello W3Schools!';

console.log('Example 5:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Starting & Ending Patterns

// Example 1:
regex = /^[a-z]{5}/gi; // The ^n quantifier matches any string with n at the beginning of it.
text = 'Hellooo World! Hello W3Schools!';

console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /^[a-z]{5}$/gi; // The n$ quantifier matches any string with n at the end of it.
text = 'Hello';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Alternate Characters

// Example 1:
regex = /p|tyre/gi; // || : OR
text = 'ptyre p tyre pyre';

console.log('Example 1:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 2:
regex = /(p|t)yre/gi;
text = 'ptyre p tyre pyre';

console.log('Example 2:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);

// Example 3:
regex = /(toy|pet|crazy|)? rabbit/gi;
text = 'pet rabbit crazy rabbit hello rabbit';

console.log('Example 3:');
console.log(text,regex);
console.log(text.match(regex));
console.log(text.match(regex).length);