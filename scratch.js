var wtf = require('./src/index')
// var wtf = require('./builds/wtf_wikipedia')
// wtf.extend(require('./plugins/image/src'))

// let txt = require('fs')
//   .readFileSync('/Users/spencer/mountain/wtf_wikipedia/tests/cache/royal_cinema.txt')
//   .toString()

// wtf.fetch('State (website)').then(doc => {
//   console.log(doc.data)
// })

/*
* interwiki links
* disambiguation templates 

*/

let str = `
{{lang|fr|Je suis française.}}

{{val|123456.78901}}
{{Authority control |VIAF=66861474 |LCCN=n/87/142671 |ISNI=0000 0001 0911 2808 |GND=117421863 |SUDOC=090162897 }}

{{rp|23}}

{{Place name disambiguation}}
{{transl|ar|al-Khwarizmi}}
{{Airport disambiguation}}
`

str = `{{flagathlete|[[Michael Phelps]]|USA}}`
let doc = wtf(str)
console.log(doc.text())
console.log(doc.templates())
console.log(doc.infobox())
