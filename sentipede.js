function setup() {
  createCanvas(500, 600);
  x=0;
  y=0;
  px=0;
  py=0;
  v=0.1;//跟随速度
  t=0;
  t2=0;
  
  
  p=30;
  pp=5;
  r=10;
  f=(255,255,255);
  
}

function draw() {
  background(220,40);
  //时间零
  if(mouseIsPressed){
    t=40;//零时长
    
    colo=100;
    colorr=0;
  
  }
  if(t>0){
  stroke(0,100,125);//时零颜色
    circle(x-15,y-10,30);//耳朵1
    circle(x+15,y-10,30);//耳朵2
    p=35;
    pp=15;
    r=20;
    f='red';
    
    v=0.02;
    t-=1;//计时
    t2=30;//恢复时长
  }
  else{
  
    if(t2>0){
      
      stroke(colorr,colo,125);//恢复颜色
      colorr+=(100/30);
      colo+=(155/30);
      
      v=0.02+0.2*((30-t2)/30);
      t2-=1    
    }
    else{
      stroke(0,255,125);//平时的颜色
      p=30;
      pp=5;
      r=10;
      f=255;
      
      t2=0}
    
    
    t=0;
  }
  
  x=x+(mouseX-x)*v;//跟随
  y=y+(mouseY-y)*v;
  
  //大
  strokeWeight(40);
  line(px,py,x,y);//身体线
  
  strokeWeight(2);
  //rect(x-50,y-50,100,100);
  circle(x,y,50);
  circle(x-11,y-6,r);
  circle(x+11,y-6,r);
  rectMode(CENTER)
  fill(f);
  rect(x,y+10,p,pp);
  fill(255);
    
  px=x;
  py=y;
  
  
 
  //小
  
  if(dist(mouseX,mouseY,x,y)<50){
    stroke(255,0,0);
  }
  else{
    stroke(0,255,125);
  }
  strokeWeight(3);
  line(pmouseX,pmouseY,mouseX,mouseY);
  
  strokeWeight(2);
  circle(mouseX,mouseY,5);
  
  
  
  
  
}
