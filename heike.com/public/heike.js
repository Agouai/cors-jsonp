//const request = new XMLHttpRequest()
//request.open('GET', 'http://localhost:8888/friend.json')
//request.onreadystatechange = () => {
//    if (request.readyState === 4 && request.status === 200) {
//        console.log(request.response)
//    }
//}
//request.send()
const script = document.createElement('script')
script.src = 'http://localhost:8888/friends.js'
script.onload = () => {
    console.log(window.xxx)
}
document.body.appendChild(script)