/*定义一个function名称为newGame的方法。
	这个方法的目的是猜测的数据为空，重新开始游戏*/
function begin() {
    $("#guess").click();
    guesses="";
}
var s=6;//每次游戏最大猜测次数
var ran = parseInt(Math.random() * 100);//系统随机生成的随机数
var guesses="";//定义猜测的初始记录为空
/*定义一个function名称为checknum的方法
这个方法的目的是将所猜测的数据进行提交，并且将猜测数与系统生成的随机数进行比较，
输出相应的提示，并进行猜测数据的显示*/
function checknum() {	//获取所猜测的数，与系统生成的随机数进行比较，输出比较结果
    /*在控制台输出信息*/
    console.log(document.getElementById("guessNum"));
    /*定义所猜测的值为s1*/
    var s1 = parseInt(document.getElementById("guessNum").value);
    /*定义guessArea为猜测数据记录的值*/
    var guessArea=document.getElementById("guesses");
    if(s == -1) {				//新一轮游戏重新开始的情况
    }else if(isNaN(s1) || s1 <=0 || s1 >= 100) {
        document.getElementById("Tips").innerHTML ="请输入1-99之间的数字！";
        return;
    }
    else{				//输入了可以猜测的数值
        if (s1 > ran) {		//所猜测的数值，大了
            document.getElementById("Tips").innerHTML =" 大了";
            s--;		//猜测次数每次减1
            document.getElementById("Init").innerHTML="<img src='猜大了.jpg' />";
            guesses+=s1+"\n";
            guessArea.innerHTML="猜过的数字:"+guesses;
        } else if(s1 < ran){	//所猜测的数值，小了
            document.getElementById("Tips").innerHTML = " 小了";
            s--;		//猜测次数每次减1
            document.getElementById("Init").innerHTML="<img src='猜小了.jpg' />";	//输出相应的数值小了的图片
            guesses+=s1+"\n";
            guessArea.innerHTML="猜过的数字:"+guesses;
        }
        else{			//所猜测的数值正确，游戏结束
            document.getElementById("Tips").innerHTML ="! 正确，游戏结束" ;
            s=-1;		//此时将所猜测数置为-1，游戏结束的标记
            document.getElementById("Init").innerHTML="<img src='成功了.jpg' />";	//显示数值输入正确时的图片
            guesses+=s1+"\n";
            guessArea.innerHTML="猜过的数字:"+guesses;
        }
        if(s == 0){		//本次游戏猜测次数达到6次，游戏结束
            document.getElementById("Tips").innerHTML += "<br>随机数是：" + ran +"，失败，游戏结束";
            s = -1;			//此时将所猜测数置为-1，游戏结束的标记
            document.getElementById("Init").innerHTML="<img src='失败了.jpg' />";
        }
    }
}
