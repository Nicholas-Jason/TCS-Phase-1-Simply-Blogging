document.getElementById("btn-add").addEventListener("click",addArticle);
var title = document.createElement("h2");
var content = document.createElement("p");
var s = document.createElement("section");
var atitle = document.createTextNode(document.getElementByName("Article_title").value);
var aarticle = document.createTextNode(document.getElementByName("Article").value);
function addArticle()
{
    title.appendChild(atitle);
    alert(atitle);
    content.appendChild(aarticle);
    s.appendChild(title);
    s.appendChild(content);
    document.getElementById("blogs").appendChild(s);
    
    if(document.getElementById("blogs").contains(atitle))
    {
        alert("It is there!");
    }

    else
    {
        alert("Not there");
    }
    
}
