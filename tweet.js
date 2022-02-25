const num=document.querySelector(".counter")

function count(event){
console.log("counting",event.target.value)
let tweet=event.target.value
updateCount(tweet)




}

function updateCount(tweet){
    console.log("counting",tweet)
    num.innerText=`${tweet.length}/20`
}


