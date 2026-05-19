$(document).ready(function(){
    $(".decorateHref").on("click",function(event){
        jumpToIndex(event.target.getAttribute("data-addr"));
    });  
    $("#input").on("keydown",function(event){
        if(event.keyCode==13){
            searchText(document.getElementById("input").value);
        }
    });
});

var last_index=0;
var last_str;
function searchText(str){
    var searchdiv=document.getElementById("search_index").getElementsByTagName("tr");
    var td;
    var url;

    if(str!==last_str){
        last_index=0;
        last_str=str;
    }

    console.log('--last_index : '+last_index);
    console.log('--last_str : '+last_str);        
    console.log("--str "+str);
    console.log("-------------------------------------");
    for(var i=last_index;i<searchdiv.length;i++){
        td=searchdiv[i].getElementsByTagName("td");
        console.log("--td[1] : "+td[1].innerText);
        if(String(td[1].innerText).search(str)>-1){
            url=td[0].innerText;
            last_index=i+1;
            break;
        }
    }
    if(url){
        console.log("--url : "+url);
        jumpToIndex(url);
    }else{
        last_index=0;
    }
}

var isfound=false;
function onInput() {
    const val = document.getElementById("input").value;
    const jumpLink = chunkAData[val]
    isfound=false;

    if(typeof jumpLink != "undefined") {
        isfound=true;
        jumpToIndex(jumpLink);
    } else {
        isfound=false;
    }
    
    
}

function jumpToIndex(addr){
    document.getElementById("iframeContainer").setAttribute("src",addr);
}