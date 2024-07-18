const scroll = document.getElementById("scroll")             
let job = document.getElementById("job")    
let ad = document.getElementById("name");
let ad1 = document.querySelector(".name");

const adminName = "Prakash Shahi" 
ad.innerHTML += adminName  
ad1.innerHTML += adminName  

myFunction = function(){

    window.scrollTo({top:0,behavior: "smooth"})
    // console.log("salam");
}

console.log(scroll);
let text = "I am a Developer"
let textFunc = function () {job.innerHTML += text}
setTimeout(textFunc,1000);
// newElement = function(){
//     document.getElementById("carousel").innerHTML += `<div class="">
//                 <div
//                     class="bg-gray-800 duration-300 rounded-[7px] flex flex-col gap-y-3  hover:bg-red-600 hover:border-white">
//                     <div class="flex  place-self-center">
//                         <div class=" rounded-[50%] border-8 border-white w-[11vw] h-[23vh]  mt-[10px]"><img
//                                 class="w-[100%] h-[100%] rounded-[50%] object-cover "
//                                 src="../images/man-carousel-1.jpeg" alt=""></div>
//                     </div>
//                     <p class="text-white  text-2xl text-center">Someone name</p>
//                     <span class="text-white p-[10px] w-[30vw]  flex justify-center">
//                         <p class=" w-[15vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                     </span>
//                 </div>
//             </div>`
// }
