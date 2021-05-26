// import from other javasctipt file and function
/*
const r = require('./reset')

var i = r.get()
console.log(i)
r.res()
console.log(r.get())

const r2 = require('./reset')// epistefei anafora sto idio obj
*/

// basic console messages

/*
let msg = 'test'
console.log(msg)

console.log('cmd args')

process.argv.forEach((arg)=>{console.log(arg)})

console.log('First param is',process.argv[2])
*/

// trying fetch and something like promises


/*
const fetch = require('node-fetch');

var response = 'ok'
var error = 'error'

fetch('https://reqres.in/api/users')
    .then(rs => 
            {
            //rs.json()
            var myJson = rs.json()//{'id':'id','email':'email','first':'first_name','last':'last_name','avatar':'avatar'};
            
            .then(data => {
                console.log(data.data[1])
                for(var i in data.data[1]) {
                    console.log(i+' '+data.data[1][i])
                }
            })
            }
        )
    .catch(error => {console.log(error)})

*/

// trying his urlencoded



function run(){
    /*
    const fetch = require('node-fetch');
    var DOMParser = require('dom-parser');
    */

    //const xml2js = require('xml2js');

    var request_ = "firstName=john"

    fetch('https://reststop.randomhouse.com/resources/authors?'+request_)
    .then(rs => 
        {
        rs.text()    
        .then(data => {
            var parser = new DOMParser();
            
            let xmlDoc = parser.parseFromString(data,'application/xml');
            //console.log(xmlDoc.querySelectorAll('author'))

            let authors = xmlDoc.querySelectorAll('author')

            authors.forEach( auth_xml => {
                let first_display_name = auth_xml.querySelector('authordisplay')
                console.log(first_display_name)
            });
            
            /*
            xml2js.parseString(xmlDoc.rawHTML, (err, result) => {
            
                var text_json = JSON.stringify(result);
                
                const obj = JSON.parse(text_json);
                var size = obj.authors.author.length;
                console.log(size)
                var buf1 = Buffer.from('authordisplay');
                
                for(var j = 0; j < size; j++){
                    console.log("epanalipsi : "+j)
                    for( i in obj.authors.author[j]){
                        var buf2 = Buffer.from(i);
                        if(buf2.equals(buf1)){
                            console.log(obj.authors.author[j][i])
                        }
                    }
                }
            });
            */

        })
        }
    )
    .catch(error => {console.log(error)})
}

// on click events

var o = document.getElementById("click");

o.addEventListener("click", click_event);

function click_event(){
    run();
}
