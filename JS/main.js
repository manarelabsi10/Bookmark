var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var layer = document.getElementById("layer");
var closeIcon = document.getElementById("closeIcon");

var allSites = [];

if(localStorage.getItem("All Sites") != null){
    allSites = JSON.parse(localStorage.getItem("All Sites"));
    display();

}


function validName() {
    var regex = /^[a-z]{3,9}[0-9]{0,3}$/;
    if(regex.test(siteNameInput.value) == true){
        return true;
    }
    return false;
}

function validUrl() {
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if(regex.test(siteUrlInput.value) == true){
        return true;
    }
    return false;
}

function addSite() {
    if(validName() == true && validUrl() == true){
        var site = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value 
        }
        
        allSites.push(site);
    
        localStorage.setItem("ALL Sites" , JSON.stringify(allSites));
    
        console.log(allSites);
        // clearInput();
        display()
    } 
    submitBtn.addEventListener("click" , function(){
        layer.classList.remove("d-none");
       
    })

}

function clearInput() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

} 

function display() {
    var cartona = "";
    for(var i = 0 ; i < allSites.length ; i++){
        cartona += `
           <tr>
              <td >${i+1}</td>
              <td >${allSites[i].siteName}</td>

               <td><button  class="btn-visit btn  px-3 text-center text-white" ><i class="fa-regular fa-eye"></i>Visit</button></td>
               <td><button onclick="deleteSite(${i})" class="btn-delete btn  px-3 text-center text-white" ><i class="fa-solid fa-trash-can"></i>Delete</button></td>
            </tr>
        `
    }

    document.getElementById("tbody").innerHTML = cartona;
}

function deleteSite(index) {
    allSites.splice(index , 1);
    localStorage.setItem("ALL Sites" , JSON.stringify(allSites));
    display()
}

function closeLayer() {
    layer.classList.add("d-none");
    
}
closeIcon.addEventListener("click" , closeLayer)





    


