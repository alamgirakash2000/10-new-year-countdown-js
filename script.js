const days= document.getElementById('days')
const hours= document.getElementById('hours')
const minutes= document.getElementById('minutes')
const seconds= document.getElementById('seconds')
const year= document.getElementById('year')

const currentYear = new Date().getFullYear()
const setDate= new Date(`January 01 ${currentYear+1} 00:00:00`)

year.innerText= currentYear+1

function updateDate(){
    const currentDate = new Date()
    const diff= Math.floor((setDate-currentDate)/1000)

    d= Math.floor(diff/86400)
    h= Math.floor((diff % 86400)/3600)
    m=Math.floor(((diff % 86400)%3600)/60)
    s=Math.floor((((diff % 86400)%3600)%60))

    days.innerText= d<10? '0'+d:d
    hours.innerText= h<10? '0'+h:h
    minutes.innerText= m<10? '0'+m:m
    seconds.innerText= s<10? '0'+s:s

    setTimeout(() =>{
        document.getElementById('countdown').style.display='flex'
        document.getElementById('loading').style.display='none'


    },1000)
}

setInterval(updateDate,1000)