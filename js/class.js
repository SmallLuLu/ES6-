/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Luyh
 * @Date: 2020-08-05 15:52:36
 * @LastEditors: Luyh
 * @LastEditTime: 2020-08-05 15:55:19
 */

 class Tab{
     constructor(id){
        this.main=document.querySelector(id);
        this.addli=document.querySelector('.tabadd');
        this.liFather=document.querySelector('.firstnav ul');
        this.content=document.querySelector('.content');
        this.li=this.liFather.querySelectorAll('li');
     }
     addTab(){
        
     }
     removeTab(){

     }
     changeTab(){

     }
     toggleTab(){

     }
 }
 Tab('#tab');
