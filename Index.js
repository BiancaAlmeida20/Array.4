var rockets = [
    {  country :  "Russia", lauches : 23}, 
    {  country : "Italia", lauches: 32 },
    {  country : "Brasil", lauches: 53 }
]
var totalLaunches = rockets.reduce (( prevVal, elem ) => prevVal + elem.launches, 0)
console.log (totalLaunches)

var rockets = [
    {  aliment :  "Maça", lauches : 63}, 
    {  aliment : "Pera", lauches: 82 },
    {  aliment : "Caju", lauches: 59 }
]
var totalLaunches = rockets.reduce (( prevVal, elem ) => prevVal + elem.launches, 0)
console.log (totalLaunches)

var rockets = [
    {  Time : "Corinthians", lauches : 63}, 
    {  Time : "Santos", lauches: 82 },
    {  Time : "Goiania", lauches: 59 }
]
var totalLaunches = rockets.reduce (( prevVal, elem ) => prevVal + elem.launches, 0)
console.log (totalLaunches)
