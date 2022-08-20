function showingDate (){
    let now = new Date().toLocaleDateString('en-us', {year:"numeric", weekday:"long", month:"long", day:"numeric"});
    console.log(now)
    document.getElementById("Date").innerHTML = now
}
showingDate()
function DeleteList(){
    window.alert("hell with the world")
}

function Submit(){
    let ListOfGrocery = []
    let list = document.getElementById("item").value;
    setTimeout(()=>{
        document.getElementById("item").value = ""
    },10)

    ListOfGrocery.push(list)

    let span = document.createElement("span")
    span.innerHTML = ListOfGrocery
    span.className = "span"
    document.body.appendChild(span)

   let btn = document.createElement("button")
   btn.innerHTML = "Delete List"
   btn.className = "Btn"
   btn.onclick = DeleteList
   document.body.appendChild(btn)

  window.alert("added Successfully")

   function DeleteList(){
    db.RecordsDB.deleteOne({name:"Maki"})
    
   }

    
}
