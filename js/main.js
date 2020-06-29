if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("1").className = "pro-movil";
    document.getElementById("2").className = "pro-movil";
    document.getElementById("3").className = "pro-movil";
    
    
}
else {
    document.getElementById("1").className = "pro";
    document.getElementById("2").className = "pro";
    document.getElementById("3").className = "pro";
    document.getElementById("4").className = "a-movil";
    document.getElementById("5").className = "a-movil";
}