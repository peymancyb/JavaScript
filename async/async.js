window.onload = function(){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
      console.log(JSON.parse(http.response));
    }
  }
  http.open("GET","data.json",true);
  http.send();
  /*
  READY STATE
  0 => request not initialized
  1 => request has been set up
  2 => request has been sent
  3 => request has is in process
  4 => request has is complete
  */
  // console.log(http);
}
