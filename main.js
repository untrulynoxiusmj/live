var active = !(document.querySelector(".options").style.display == "");
        document.querySelector(".menu").addEventListener("click", () => {
            if (active) {
                console.log(document.querySelector(".options").style.display);
                document.querySelector(".options").style.display = "none";
                active = false;
            } 
            else {
                document.querySelector(".options").style.display = "flex";
                document.querySelector(".secondary").style.display = "none";
                active = true;
            }
        });

        var classesButton = ["OB","SB","PB","TB","DB",]
        var classesSection = new Array(".over",".symp",".prev",".trea",".data");

        var makeBlack = () => {
            for (var button in classesButton){
                document.querySelector("." + classesButton[button]).style.backgroundColor = "black";
            }
        };
        
        listen = (who,pre,flag) => {
            document.querySelector(who).addEventListener('click',()=>{
                    
                    if (!flag){
                        window.scrollTo(0, 0);
                    }
                    else{
                        window.scrollTo(0, document.querySelector(pre).offsetHeight + document.querySelector(pre).offsetTop - document.querySelector(".navbar").offsetHeight + document.querySelector(".options").offsetHeight);
                    }
                })
        }
    

      listen(".OB","",0);
      listen(".SB",".over",1);
      listen(".PB",".symp",1);
      listen(".TB",".prev",1);
      listen(".DB",".trea",1);

 
check = (btn,sec,pre,flag,name) => {
    var start;
    if (!flag){
        start = 0;
    }
    else{
        start = document.querySelector(pre).offsetHeight + document.querySelector(pre).offsetTop - document.querySelector(".navbar").offsetHeight
    }
    if (start <= window.pageYOffset && window.pageYOffset <= document.querySelector(sec).offsetHeight + document.querySelector(sec).offsetTop - document.querySelector(".navbar").offsetHeight) {
        makeBlack();
        document.querySelector(btn).style.backgroundColor = "grey";
        if (!active) {
            document.querySelector(".secondary").style.display = "block";
            document.querySelector(".secondary").innerHTML = name;
        }
    }  
}


window.onscroll = () => {
    makeBlack();
    check(".OB",".over","",0,"Overview");
    check(".SB",".symp",".over",1,"Symptoms");
    check(".PB",".prev",".symp",1,"Prevention");
    check(".TB",".trea",".prev",1,"Treatment");
    check(".DB",".all",".trea",1,"Data");
};

        

        var xmlhttp = new XMLHttpRequest();
        url = "https://api.covid19india.org/data.json";
        xmlhttp.open("GET", url, true);

        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var stateAll = JSON.parse(this.responseText);

            var stateData = stateAll.statewise;
            for (var i = 0; i < stateData.length; i++) {
            var inst = document.createElement("div");
            inst.className = "box w";
            inst.innerHTML = stateData[i].state;
            document.querySelector(".all").appendChild(inst);
            var cont = document.createElement("div");
            cont.className = ["flex space-between"];
            var total = document.createElement("div");
            total.innerHTML = stateData[i].confirmed;
            total.className = ["total pad"];
            cont.appendChild(total);
            var active = document.createElement("div");
            active.innerHTML = stateData[i].active;
            active.className = "active pad";
            cont.appendChild(active);
            var recovered = document.createElement("div");
            recovered.innerHTML = stateData[i].recovered;
            recovered.className = "recovered pad";
            cont.appendChild(recovered);
            var deaths = document.createElement("div");
            deaths.innerHTML = stateData[i].deaths;
            deaths.className = "deaths pad";
            cont.appendChild(deaths);
            inst.appendChild(cont);
            }
        }
        };
  