const num=document.querySelector(".counter")

function count(event){
console.log("counting",event.target.value)
let tweet=event.target.value
updateCount(tweet)




}

function updateCount(tweet){
    console.log("counting",tweet)
    num.innerText=`${tweet.length}/20`
     window.localStorage.setItem("tweet",tweet)
}

const storedTweet=window.localStorage.getItem("tweet")
console.log(storedTweet)
document.querySelector(".tweet").innerText=storedTweet
updateCount(storedTweet)

