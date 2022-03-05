function cntText(){
  var textLength = document.getElementById("text-area").value.length;
  document.getElementById("cnt-text").innerHTML = textLength;
}

function addImg(){
  var fileName = document.getElementById("add-img").value;
  document.getElementById("img-name").innerHTML = fileName;
}

function replyToggle(){
  var reply = document.querySelector(".reply-section");
  var margin = document.querySelector(".feed-info");
  if(reply.style.display === "none" || reply.style.display === ""){
    reply.style.display = "block";
    margin.style.paddingBottom = "15px";
  } else {
    reply.style.display = "none";
    margin.style.paddingBottom = "40px";
  }
}
