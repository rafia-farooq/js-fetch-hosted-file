const list = document.querySelector(".not-registered");

const getList = async function(){
    const response = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await response.json();
    console.log(data);
    displayList(data)
}

getList();

const displayList = function(data){
    for(let d of data){
        if(d.registered === "no"){
            const li = document.createElement("li");
            li.innerText = d.name;
            list.append(li);
        }
        
    }    
}