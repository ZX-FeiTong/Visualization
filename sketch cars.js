function preload(){
  datas=loadTable('Car.csv','csv','header');
}


function setup() {
  a=0;
  v=0;
  a2=0;v2=0;
  suiji=50;
  rad=0;
  tail=200;

  t1=25;t2=4;t3=207;t4=130;t5=2504;t6=12;t7=72;t8=2;
  t44=0.01
  createCanvas(1500, 2000);
  
  let rc=datas.getRowCount();
  let cc=datas.getColumnCount();
  //print(rc);//99
  //print(cc);//8

  //随即起点
  rands=[]
  acceleration=[];
  acceleration2=[];
    for(let i=0;i<99;i++){
      //print(1);
      rand=random(0,7);
      suiji-=1;
      rands.push(rand);
      acceleration.push(0);
      acceleration2.push(0);
    }
    //print(rands);
    //print(acceleration);
    

  // for(let i=0; i<rc;i++){
  //   //print(rows[i]);
  //   //print(datas.columns[i]);
  //   //print(datas.getNum(i,'origin'));

  // }
}

function mpg(cc){
  t1=cc.value;
  print(t1);
}
function cyl(cc){
  t2=cc.value;
  print(t2);
}
function dis(cc){
  t3=cc.value;
  //print(t2);
}
function hor(cc){
  t4=cc.value;
  t44=map(t4,45,200,0.001,0.03);
  //print(t2);
}
function wei(cc){
  t5=cc.value;
  //print(t2);
}
function acc(cc){
  t6=cc.value;
  t6=map(t6,8,20,0.0001,0.005);
  //print(t2);
}
function mod(cc){
  t7=cc.value;
  //print(t2);
}
function ori(cc){
  t8=cc.value;
  //print(t2);
}

function draw() {
  background(110,110,150,tail);
  //v2=v2+0.01;


  //acceleration=[];
  
  for(let i=0; i<99;i++){



    let rows=datas.getArray();
    //print(rows[i]);

    let da_a=datas.getNum(i,'mpg');//半径
    //let d_a=map(da_a,10,30,500,50);

    let da_b=datas.getNum(i,'cylinders');//节数
    //let d_b=da_b;

    let da_c=datas.getNum(i,'displacement');//线宽
    //let d_c=map(da_c,100,500,0.05,15);

    let da_d=datas.getNum(i,'horsepower');//速度
    let d_d=map(da_d,45,200,0.001,0.01);

    let da_e=datas.getNum(i,'weight');//节半径
    //let d_e=map(da_e,2000,4000,10,20);

    let da_f=datas.getNum(i,'acceleration');//点击加速度
    let d_f=map(da_f,8,20,0.00000001,0.005);

    let da_g=datas.getNum(i,'model year');//颜色
    //let d_g=da_g;

    let da_h=datas.getNum(i,'origin');//眼睛
    //let d_h=da_h;


    rad=rands[i];
    v=acceleration[i];
    //鼠标点击----------------------------
    if(mouseIsPressed){
      tail=200;

      a=acceleration2[i];
      a=a+d_f;
      acceleration2[i]=a;
      v=v+d_d+a;

      //da_d=v+a;
      //v=da_d;
    }
    else{
      tail=60;

      v=v+d_d;
      acceleration2[i]=0;

      //da_d=v;
    }  
    acceleration[i]=v;

      
    let draw=new one(da_a,da_b,da_c,v,da_e,da_f,da_g,da_h,rad);
    draw.display();





  //鼠标点击2----------------------------
    if(mouseIsPressed){
      tail=200;
      //a=acceleration2[i];
      a2=a2+0.0001;
      //acceleration2[i]=a;
      v2=v2+t44+a2;
    }
    else{
      tail=60;

      v2=v2+t44;
      a2=0;

      //da_d=v;
    }  
    //acceleration[i]=v;
  


  }

  
  
  let draw2=new tuli(t1,t2,t3,t4,t5,t6,t7,t8,v2);
  draw2.display();


  // let draw=new one(1,10,v,5,8,50,1,1);
  // draw.display();
  
  // let draw2=new one(1,20,v*1.5,9,3,70,2,1);
  // draw2.display();
  
}


class one{
  constructor(a,b,c,d,e,f,g,h,rand){
  this.mpg=map(a,10,30,600,15);//耗油*
  this.cou=b;//气缸*
  this.w=map(c,100,500,3,15);//排量*
  this.v=d; //马力*
  this.r=map(e,2000,4000,11,22);//重量*
  this.acc=map(f,10,20,0.01,0.1);//加速度
  this.tim=g;//出场时间*
  this.oth=h;//产地*
  
  this.rando=rand;  
  //身体控制颜色
    if(this.tim===70){
      this.acolor=255;
      this.bcolor=10;
      this.ccolor=0;
    
    }
    
    if(this.tim===71){
      this.acolor=170;
      this.bcolor=0;
      this.ccolor=85;
    
    }
      
    if(this.tim===72){
      this.acolor=85;
      this.bcolor=0;
      this.ccolor=170;
    }
    if(this.tim===73){
      this.acolor=0;
      this.bcolor=10;
      this.ccolor=255;
    
    }

    
    
    
  this.x=700;this.y=650;//旋转中心
  this.xx=0;this.yy=0;
  }
  display(){
    

  push();
  
  
  //let c_c=this.v;
  translate(this.x,this.y);//旋转中心

  rotate(PI);
  //随机起点
  rotate(this.rando);

  
  
  //尾
  stroke(255,255,255,100);//描边
  strokeWeight(1*(this.r/30));
  fill(255,255,255,100);//填色
  rotate(this.v);
  circle(this.mpg,0,this.r/4);
    
  this.xx=this.mpg*cos(0.3*(40/this.mpg));
  this.yy=this.mpg*sin(0.3*(40/this.mpg));
   
    
  stroke(255,255,255,50);//描边线
  strokeWeight(this.w);
  line(this.mpg,0,this.xx,this.yy);
    
    
    //中间身体
  for(let i=0;i<this.cou-1;i++){
    stroke(255,255,255);//描边
    strokeWeight(1*(this.r/30));
    fill(50,50,50);//填色
    rotate(0.3*(50/this.mpg));
    circle(this.mpg,0,this.r);
      
      
    stroke(this.acolor,this.bcolor,this.ccolor);//描边线
    strokeWeight(this.w);
    line(this.mpg,0,this.xx,this.yy);
  
  }
    //头
  stroke(255,255,255);//描边
  strokeWeight(1*(this.r/30));
  fill(50,50,50);//填色
  rotate(0.3*(50/this.mpg));
  circle(this.mpg,0,this.r);

  //line(mouseX-this.x,mouseY-this.y,this.mpg,0);
  //line(mouseX-this.x,mouseY-this.y,this.mpg,0);
  if(dist(mouseX-this.x,mouseY-this,this.mpg,0)<this.r){
    print('1');
  }
  //眼睛
  if(this.oth===1){
  fill(255);
  circle(this.mpg,0,this.r/3);
  }
  if(this.oth===2){
    fill(255);
    circle(this.mpg-5,0,this.r/3.5);
    circle(this.mpg+5,0,this.r/3.5);
    }
  if(this.oth===3){
    fill(255);
    circle(this.mpg-4,-2,this.r/4);
    circle(this.mpg+4,-2,this.r/4);
    circle(this.mpg,4.5,this.r/4);
    }


    

  pop();

    
  strokeWeight(0);
  fill(200,200,255);
  circle(this.x,this.y,90);

  textSize(28); 
  strokeWeight(5);
  fill(255, 255 , 255)
  text("CARS", this.x-40,this.y+10);
  
  


  }

}

//图例
class tuli{
  constructor(a,b,c,d,e,f,g,h,rand){
  this.mpg=map(a,10,30,550,15);//耗油*
  this.cou=b;//气缸*
  this.w=map(c,100,500,3,15);//排量*
  this.v=map(d,45,200,0.001,0.01)*rand; //马力*
  this.r=map(e,2000,4000,22,44);//重量*
  this.acc=map(f,10,20,0.01,0.1);//加速度
  this.tim=g;//出场时间*
  this.oth=h;//产地*
  
  this.rando=rand;  
  //身体控制颜色
    if(this.tim>69 && this.tim<71){
      this.acolor=255;
      this.bcolor=10;
      this.ccolor=0;
    
    }
    
    if(this.tim>=71 && this.tim<72){
      this.acolor=170;
      this.bcolor=0;
      this.ccolor=85;
    
    }
      
    if(this.tim>=72 && this.tim<73){
      this.acolor=85;
      this.bcolor=0;
      this.ccolor=170;
    }
    if(this.tim>=73 && this.tim<74){
      this.acolor=0;
      this.bcolor=10;
      this.ccolor=255;
    
    }

    
    
    
  this.x=400;this.y=1650;//旋转中心
  this.xx=0;this.yy=0;
  }
  display(){
    

  push();
  
  
  //let c_c=this.v;
  translate(this.x,this.y);//旋转中心

  rotate(PI);
  //随机起点
  //rotate(this.rando);

  
  
  //尾
  stroke(255,255,255,100);//描边
  strokeWeight(1*(this.r/30));
  fill(255,255,255,100);//填色
  rotate(this.v);
  circle(this.mpg,0,this.r/4);
    
  this.xx=this.mpg*cos(0.7*(40/this.mpg));
  this.yy=this.mpg*sin(0.7*(40/this.mpg));
   
    
  stroke(255,255,255,50);//描边线
  strokeWeight(this.w);
  line(this.mpg,0,this.xx,this.yy);
    
    
    //中间身体
  for(let i=0;i<this.cou-1;i++){
    stroke(255,255,255);//描边
    strokeWeight(1*(this.r/30));
    fill(50,50,50);//填色
    rotate(0.7*(50/this.mpg));
    circle(this.mpg,0,this.r);
      
      
    stroke(this.acolor,this.bcolor,this.ccolor);//描边线
    strokeWeight(this.w);
    line(this.mpg,0,this.xx,this.yy);
  
  }
    //头
  stroke(255,255,255);//描边
  strokeWeight(1*(this.r/30));
  fill(50,50,50);//填色
  rotate(0.7*(50/this.mpg));
  circle(this.mpg,0,this.r);

  //line(mouseX-this.x,mouseY-this.y,this.mpg,0);
  //line(mouseX-this.x,mouseY-this.y,this.mpg,0);
  if(dist(mouseX-this.x,mouseY-this,this.mpg,0)<this.r){
    print('1');
  }
  //眼睛
  if(this.oth>=0.5 && this.oth<1.5){
  fill(255);
  circle(this.mpg,0,this.r/3);
  }
  if(this.oth>=1.5 && this.oth<2.5){
    fill(255);
    circle(this.mpg-this.r/2.5,0,this.r/3.5);
    circle(this.mpg+this.r/2.5,0,this.r/3.5);
    }
  if(this.oth>=2.5 && this.oth<3.5){
    fill(255);
    circle(this.mpg-this.r/2.5,-2,this.r/4);
    circle(this.mpg+this.r/2.5,-2,this.r/4);
    circle(this.mpg,this.r/2.2,this.r/4);
    }


    

  pop();

    
  strokeWeight(0);
  fill(200,200,255);
  circle(this.x,this.y,50);
  
  textSize(15); 
  //strokeWeight(5);
  fill(255, 255 , 255)
  text("KEYS", this.x-20,this.y+5);


  }

}


