

let btnClicked = 0;

 document.getElementById('idol').addEventListener('click', clicke)
    function clicke(event){
    if(btnClicked < 4){
        event.srcElement.classList.add('bg-green-500');
        btnClicked++;
      
        const totalAmmountElement = document.getElementById('ammount-of-ticket');
        const totalAmmount = totalAmmountElement.innerText;
        const updatAmmount = 550 * btnClicked;
        totalAmmountElement.innerText = updatAmmount;
         //console.log(btnClicked);
         if(btnClicked === 4){
         document.getElementById('cupon-btn').removeAttribute('disabled');
         }
         
        //  if( document.getElementById('bt-Number').value === 'Number'){
        //     //document.getElementById('btnt').removeAttribute('disabled');
        //     console.log('vvv')
        // }
        
    }  
    
       
}


function cuponClicke(){
    const bar = document.getElementById('cupon-bar');
    const inbar = bar.value;
    const dis = 2200;
   if(inbar === 'NEW15'){
    
    const Discount = 2200 * (15 / 100);
    document.getElementById('discount').innerText = Discount;
    const TotalAmmount = 2200 - Discount;
    document.getElementById('total').innerText = TotalAmmount;
    document.getElementById('bdt-totalDiscount').innerText = TotalAmmount;
    bar.value = '';
   }
   
  
  
  
   else{
  
    const Discount = dis * (20 / 100);
    document.getElementById('discount').innerText = Discount;
    const TotalAmmount = dis - Discount;
    document.getElementById('total').innerText = TotalAmmount;
    document.getElementById('bdt-totalDiscount').innerText = TotalAmmount;
    
   }
   console.log(inbar)
}

document.getElementById('btnt').addEventListener('click', function(){
  const num = document.getElementById('bt-Number');
  const numberElement = num.value;
  //console.log(numberElement);
  num.value = '';
  const i = document.getElementById('idol').onclick;
  console.log(i)
  if(numberElement === 'number'){
    console.log('iam imm')
  }
})