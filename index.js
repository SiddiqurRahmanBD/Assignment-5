

// Call Button And New div Create
const btncalls = document.getElementsByClassName("btn-call");


for(let btnCall of btncalls){
    btnCall.addEventListener("click", function(){

    const serviceTittle = btnCall.parentNode.parentNode.children[1].children[0].innerText;
    
    const serviceNum = btnCall.parentNode.parentNode.children[2].children[0].innerText;
      let now = new Date();
      let time = now.toLocaleTimeString();
      console.log(time);

       const totalCoin = document.getElementById("total-coin").innerText;
         if( totalCoin <= 0 ){
         alert("❌ You don't have sufficient coin! You need more coin for the Call");
         return;
       }
       const currentCoin = Number(totalCoin) - 20;
       document.getElementById("total-coin").innerText = currentCoin;
       alert( "📞 " +serviceTittle + '  '  +  serviceNum)
     
       
    const historyCard = document.getElementById("history-card")
        const newCard = document.createElement("div");
        newCard.innerHTML = `
             <div class="shadow-sm p-3 rounded-sm flex justify-between items-center">
                  <div class="p-4">
                     <h2 class="font-bold text-sm"> ${serviceTittle}</h2>
                     <p class=" text-gray-400 text-sm">${serviceNum}</p>
                  </div>
                  <p class=" text-sm p-4">${time}</p>
               </div>
        
        `;
       historyCard.appendChild(newCard);
    
    });
}
// Copy Button
const btncopies = document.getElementsByClassName("btn-copy");
console.log(btncopies);
for( let btnCopy of btncopies){
   btnCopy.addEventListener("click", ()=>{
      const copyNumber = btnCopy.parentNode.parentNode.children[2].children[0].innerText;
      navigator.clipboard.writeText(copyNumber);
      const totalCopy = document.getElementById("total-copy").innerText;
      const currentCopy = Number(totalCopy) + 1;
      document.getElementById("total-copy").innerText = currentCopy;
      alert("Copied: "+ copyNumber);
      });
}
// heart icon

const fahearts = document.getElementsByClassName("fa-heart");
for( let heart of fahearts){
   heart.addEventListener("click", ()=>{
      const heartIcon = heart.parentNode.children[1]
      const totalHeart = document.getElementById("total-heart").innerText
     const currentHeart = Number(totalHeart) + 1;
      document.getElementById("total-heart").innerText = currentHeart;
      
      });
}
//Clear Button
 document.getElementById("btn-clear").addEventListener("click", function(){

   const historyCard = document.getElementById("history-card")
   historyCard.innerHTML = "";
   
 })

