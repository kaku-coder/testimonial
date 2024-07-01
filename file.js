const testimonila=[
    {
        name:"Cherise G",
        photourl:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, amet dignissimos. Tempore earum blanditiis nemo reiciendis! Debitis nam totam natus."
    },
    {
        name:"Franklin D. Roosevelt",
        photourl:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"The only limit to our realization of tomorrow is our doubts of today.."
    },
    {
        name:" Winston Churchill",
        photourl:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Success is not final, failure is not fatal: It is the courage to continue that counts"
    }
]
let imgel=document.querySelector("img")
let textel =document.querySelector(".text")
let username=document.querySelector(".username")
let idx=0

function updatetestimonial(){
    const {name, photourl, text} = testimonila[idx]
    imgel.src = photourl;
    username.innerText = name;
    textel.innerText = text; // Corrected this line
    idx = (idx + 1) % testimonila.length; // Loop back to the first testimonial
    setTimeout(()=>{
        updatetestimonial()
    }, 2000)
}
updatetestimonial()