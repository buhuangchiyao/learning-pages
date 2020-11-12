var wrap=document.getElementById('wrap');
var pics=document.getElementById('pic');
var lists=document.getElementById('list').getElementsByTagName('li');
var point_l=document.getElementById('bar_left');
var point_r=document.getElementById('bar_right');
var index=0;
var counter=null;
function change(){//计时器
  counter=setInterval(function(){
    index++;
    if(index===lists.length){
      index=0;
    }
    img(index);
  },2000)
}
change();
function img(curIndex){//切换图片
  for (var i=0;i<lists.length;i++){
    if(curIndex===i){
      lists[i].className='on';
    }
    else{
      lists[i].className='';
    }
  }
  index=curIndex;
  pics.style.marginTop=-330*curIndex+'px';//图片上移
  wrap.onmouseover=function(){//鼠标放到图片上时图片停止播放
    pics.style.cursor="pointer";
    clearInterval(counter);//清除计时器
  }
  pics.onmouseout=change;
}
//鼠标放到指定序号切换到指定图片
for (var i=0;i<lists.length;i++){
  lists[i].id=i;
  lists[i].onmouseover=function(){
    img(this.id);
    this.className='on';
  }
}
//当鼠标放在箭头上时，点击箭头切换到下一张图片
point_l.onmousedown=function(){//点击左边箭头
  if(index<=0){
      index=lists.length;
  }
  img(index-1);
}
point_r.onmousedown=function(){//点击右边箭头
  if (index>=lists.length-1){
    index=-1;
  }
  img(index+1);
}