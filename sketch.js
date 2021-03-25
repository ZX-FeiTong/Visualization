function preload(){
  datas=loadTable('Cars.csv','csv','header');
}

function setup() {
  createCanvas(1024, 2000);
  background(220);
  //scale(2);
  let rc=datas.getRowCount();
  let cc=datas.getColumnCount();
  //print(rc);
  //print(cc);
  let a =new All();
  a.display();
  
}

function draw() {
 
}
//头
class Head{
  constructor(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
  }
  display(){
    fill(this.r,this.g,this.b);
    stroke(0);
    strokeWeight(1);
    circle(50,60,60);
    fill(255);
  circle(50,65,48);
  }
}
//脸部
class Face{
  constructor(){
  }
  display(){
  stroke(0);
  strokeWeight(1);
  //眼睛
  fill(255);
  ellipse(44,40,12,16);
  ellipse(56,40,12,16);
  //眼球
  fill(0);
  ellipse(46,40,3,5);
  ellipse(54,40,3,5);
  fill(250);
  noStroke();
  ellipse(47,40,1,3);
  ellipse(53,40,1,3);
    //胡子
  stroke(0);
  strokeWeight(1);
  line(50,50,50,66);
  line(55,53,65,50);
  line(55,57,68,57);
  line(55,60,68,63);
  line(45,53,35,50);
  line(45,57,32,57);
  line(45,60,32,63);
  //嘴唇
  fill(255);
  arc(28,61,10,10,HALF_PI,PI+HALF_PI);
  arc(72,61,10,10,PI+HALF_PI,HALF_PI);
  curve(80,45,50,66,28,66,10,45);
  curve(20,45,50,66,72,66,100,45);
  
  }
}
//鼻子
class Nose{
  constructor(r){
    this.r=r;
    }
  display(){
    fill(230,5,20);
    stroke(0);
    strokeWeight(1);
    circle(50,50,this.r);
    fill(255);
    noStroke();
    circle(50,50,2);
  }
}
//嘴巴
class Mouth{
  constructor(r){
    this.r=r
  }
  display(){
    fill(200,65,16);
    stroke(0);
    strokeWeight(1);
    arc(50,66,this.r,this.r,0,PI);
  }
}
//铃铛
class Bell{
  constructor(r){
    this.r=r;
  }
  display(){
    fill(230,5,20);
    stroke(0);
    strokeWeight(1);
    rectMode(CENTER);
    rect(50,87,40,5,2);
    
    fill(250,240,0);
    circle(50,92,this.r);
    fill(50);
    circle(50,92+this.r/8,this.r/4);
    line(50,95,50,92+this.r/2); 
  
  }
}
//身体
class Body{
  constructor(r,g,b,w){
    this.r=r;
    this.g=g;
    this.b=b;
    this.w=w;
  }
  display(){
    stroke(0);
    strokeWeight(1);
    rectMode(CENTER);
    fill(this.r,this.g,this.b);
    rect(50,87+this.w/2,this.w,this.w,5);
  }
}
class All{
  constructor(){
    
    //头
    this.heads=[];
    for(let i=0;i<99;i++){
      let o=datas.getNum(i,'origin');
      if(o===1){
        let head=new Head(0,148,236);
        this.heads.push(head);
      }
      else if(o===2){
        let head=new Head(255,165,0);
        this.heads.push(head);
      }
      else{
        let head=new Head(255,102,153);
        this.heads.push(head);
      }
    }
    //脸
    this.faces=[];
    for(let i=0;i<99;i++){
      let face=new Face();
      this.faces.push(face);
    }
    
    //鼻子
    this.noses=[];
    for(let i=0;i<99;i++){
      let m=datas.getNum(i,'mpg');
      let n=map(m,9,35,5,20);
      let nose=new Nose(n);
      this.noses.push(nose);
    }
    
    //嘴
    this.mouths=[];
    for(let i=0;i<99;i++){
      let p=datas.getNum(i,'acceleration')*2;
      //let n=map(m,9,35,5,20);
      let mouth=new Mouth(p);
      this.mouths.push(mouth);
    }
    
    //铃铛
    this.bells=[];
    for(let i=0;i<99;i++){
      let b=datas.getNum(i,'cylinders')*2;
      let bell=new Bell(b);
      this.bells.push(bell);
    }
    
    //身体
    this.bodys=[];
    for(let i=0;i<99;i++){
      let o=datas.getNum(i,'origin');
      let w=datas.getNum(i,'weight')/100;
      if(o===1){
        let body=new Body(0,148,236,w);
        this.bodys.push(body);
      }
      else if(o===2){
        let body=new Body(255,165,0,w);
        this.bodys.push(body);
      }
      else{
        let body=new Body(255,102,153,w);
        this.bodys.push(body);
      }
    }
  }
  display(){
    //第一组
    push();
    for(let m=0;m<6;m++){
      for(let n=0;n<5;n++){
        if(m*5+n<29){
          this.heads[m*5+n].display();
          this.mouths[m*5+n].display();
          this.faces[m*5+n].display();
          this.noses[m*5+n].display();
          this.bodys[m*5+n].display();
          this.bells[m*5+n].display();
          
          
          translate(80,0);
        }
      }
      translate(-400,150);
    }
    pop();
    
    //第二组
    push();
    translate(450,0)
    for(let m=0;m<6;m++){
      for(let n=0;n<5;n++){
        if(m*5+n<27){
          this.heads[29+m*5+n].display();
          this.mouths[29+m*5+n].display();
          this.faces[29+m*5+n].display();
          this.noses[29+m*5+n].display();
          this.bells[29+m*5+n].display();
          translate(80,0);
        }
      }
      translate(-400,150);
    }
    pop();
    
  }  
    
}
