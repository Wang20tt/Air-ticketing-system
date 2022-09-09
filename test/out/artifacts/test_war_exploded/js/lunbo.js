
var win = document.querySelector(".cantiner");
var imgs = document.querySelector(".imgs");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var point = document.getElementsByClassName("point")[0].children;
var index = 0;//图片下标
var Wnum = win.offsetWidth;//视口宽度
var times;//声明一个时间函数的变量
var time;//自动轮播时间方法
var Crun = true;//点击事件判断
//console.log(start)
function run(){//轮播
    var start = imgs.offsetLeft;//开始坐标
    var end = index*Wnum*(-1);//结束坐标，往右移动所以为负
    var runD = end - start;//移动距离
    var px = 30;//移动距离
    var t = 0;//声明一个参量
    clearInterval(times);//开始前先清除上次的定时器
    times = setInterval(function(){
        t++;
        if(t>=px){//判断一张轮播是否结束
            clearInterval(times);//一张结束清除定时器
            Crun = true;//一张结束点击时间可用
        }
        imgs.style.left = runD/px*t+start+'px';//运动left值
        if(index>=point.length&&t>=px){//判断是否到最后一张
            imgs.style.left = 0;//最后一张与第一张是一样的，立刻切换到第一张去，不会影响效果
            index = 0;//下标变为第一张
        }
        pointIn();//白点跟随图片改变
        if(index>=point.length){//到最后一张时，对应上第一个白点
            point[0].className = 'on';
        }else{
            point[index].className = 'on';
        }
    },20);
}
function pointIn(){
    for(var i = 0;i<point.length;i++){
        point[i].className = '';//清除所有点的样式
    }
}
// for(var i = 0;i<point.length;i++){//遍历所有点
// 	point[i].idx = i;//存起下标
// 	point[i].onclick = function(){
// 		index = this.idx;//点击时获取点击到的下标
// 		run();
// 	}
// }
for(var i = 0;i<point.length;i++){//遍历所有点
    (function(idx){  //将i当参数传入
        point[idx].onclick = function(){
            index = idx;//点击时获取点击到的下标
            run();
        }
    })(i);
}
time = setInterval(function(){//定时器
    index++;
    run();
},1000);
win.onmouseover = function(){//鼠标移入
    clearInterval(time)
}
win.onmouseout = function(){//鼠标离开
    time = setInterval(function(){
        index++;
        run();
    },1000);
}
left.onclick = function(){//左移动
    if(Crun){
        index++;
        run();
    }
    Crun = false;//一张未切换完，不会切换下一张
}
right.onclick = function(){//右移动
    if(Crun){
        if(index==0){//如果是第一张
            index = point.length; //下标切换为最后一张
            imgs.style.left = index*Wnum*(-1)+'px';//left值切换到最后一张
        }
        index--;
        run();
    }
    Crun = false;//一张未切换完，不会切换下一张
}
