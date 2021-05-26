var result = 5

function reset(){result=0}// result*=5

function getTotal(){return result}

module.exports = {
    "res" : reset, // get from somewhere else : meaning here
    "get" : getTotal
}
