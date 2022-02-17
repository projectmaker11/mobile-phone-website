function showside(){
   var sidebar=document.getElementById("sidebar");
   var opacity=document.getElementById("opacity");
  if( sidebar.offsetWidth==0)
  {
   sidebar.style.width="250px";
   opacity.style.display="block";
  }
  else{
    sidebar.style.width="0"; 
  }
}

function hideside(){
    var sidebar=document.getElementById("sidebar");
    if(sidebar.offsetWidth==250)
    {
     sidebar.style.width="0px";
     opacity.style.display="none";
    }
    else{
      sidebar.style.width="250px"; 
    }
  
}