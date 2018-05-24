var header_flag=0;

function test(){
    if(header_flag == 0) {
        document.getElementById("header-p").style.color = "cadetblue";
        document.getElementById("header-bar").style.width = "0px";
        header_flag = 1;
    }
    else{
        document.getElementById("header-p").style = null;
        document.getElementById("header-bar").style.height = "10px";
        document.getElementById("header-bar").style.width = "200px";
        document.getElementById("header-bar").style.backgroundColor = "cadetblue";
        header_flag = 0;
    }
}