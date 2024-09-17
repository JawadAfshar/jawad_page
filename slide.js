$(document).ready(function(){

    function slide(img1, img2, img3){
        $("img.i"+img2).animate({left: "24%", top: '20%', width: '50%', opacity: "100%"});
        $("img.i"+img3).animate({opacity: "30%", left: '-2%', top: '30%', width: '30%'});
        $("img.i"+img1).animate({left: '70%', top: '30%', width: '30%', opacity: "30%"});
    }
    $("img.i1").animate({opacity: "30%"});
    $("img.i2").animate({opacity: "30%"});
    sessionStorage.setItem("x1", "1");
    sessionStorage.setItem("x2", "2");
    sessionStorage.setItem("x3", "3");
    $("img.left").click(function(e){
        p1 = Math.floor(Math.random() * 6+1);
        e.preventDefault();
        var x1 = sessionStorage.getItem("x1");
        var x2 = sessionStorage.getItem("x2");
        var x3 = sessionStorage.getItem("x3");
        slide(x1, x2, x3);
        x1++;
        x2++;
        x3++;
        if(x1 > 3){
            sessionStorage.setItem("x1", "1");
        }else{
            sessionStorage.setItem("x1", x1);
        }
        if(x2 > 3){
            sessionStorage.setItem("x2", "1");
            $("img.i1").attr("src", "img"+p1+".jpg");
        }else{
            sessionStorage.setItem("x2", x2);
        }
        if(x3 > 3){
            sessionStorage.setItem("x3", "1");
        }else{
            sessionStorage.setItem("x3", x3);
        }
    });

    $("img.right").click(function(e){
        e.preventDefault();
        p1 = Math.floor(Math.random() * 6+1);
        var x1 = sessionStorage.getItem("x1");
        var x2 = sessionStorage.getItem("x2");
        var x3 = sessionStorage.getItem("x3");
        slide(x3, x2, x1);
        x1++;
        x2++;
        x3++;
        if(x1 > 3){
            sessionStorage.setItem("x1", "1");
        }else{
            sessionStorage.setItem("x1", x1);
        }
        if(x2 > 3){
            sessionStorage.setItem("x2", "1");
            $("img.i3").attr("src", "img"+p1+".jpg");
        }else{
            sessionStorage.setItem("x2", x2);
        }
        if(x3 > 3){
            sessionStorage.setItem("x3", "1");
        }else{
            sessionStorage.setItem("x3", x3);
        }
    });
});