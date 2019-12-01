
$(function(){
    let count = 0;
    $(".game").one("click",function(box){
        count ++
        if(count %2 ==0){
           let x=  $(box.target).html("X")

        }
        else{
           let o= $(box.target).html("O")
        }
    })
    
})

//o//
if($("#d1")=="O" && $("#d2")=="O" && $("#d3")=="O"){//123
    alert("win")
}
else if($("#d4")=="O" && $("#d5")=="O" && $("#d6")=="O"){//456
    alert("win")
}
else if($("#d9")=="O" && $("#d8")=="O" && $("#d9")=="O"){//789
    alert("win")
}
else if($("#d1")=="O" && $("#d5")=="O" && $("#d9")=="O"){//159
    alert("win")
}
else if($("#d3")=="O" && $("#d5")=="O" && $("#d7")=="O"){//357
    alert("win")
}
else if($("#d1")=="O" && $("#d4")=="O" && $("#d7")=="O"){//147
    alert("win")
}
else if($("#d2")=="O" && $("#d5")=="O" && $("#d8")=="O"){//258
    alert("win")
}
else if($("#d3")=="O" && $("#d6")=="O" && $("#d9")=="O"){//369
    alert("win")
}
//X// 

else if($("#d1")=="X" && $("#d2")=="X" && $("#d3")=="X"){//123
    alert("win")
}
else if($("#d4")=="X" && $("#d5")=="X" && $("#d6")=="X"){//456
    alert("win")
}
else if($("#d9")=="X" && $("#d8")=="X" && $("#d9")=="X"){//789
    alert("win")
}
else if($("#d1")=="X" && $("#d5")=="X" && $("#d9")=="X"){//159
    alert("win")
}
else if($("#d3")=="X" && $("#d5")=="X" && $("#d7")=="X"){//357
    alert("win")
}
else if($("#d1")=="X" && $("#d4")=="X" && $("#d7")=="X"){//147
    alert("win")
}
else if($("#d2")=="X" && $("#d5")=="X" && $("#d8")=="X"){//258
    alert("win")
}
else if($("#d3")=="X" && $("#d6")=="X" && $("#d9")=="X"){//369
    alert("win")
}
