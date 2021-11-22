import { ApiService } from './../api.service';
import { api } from './../interfaces/api';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'listar-root',
  templateUrl: 'listar.page.html',
  styleUrls: ['listar.page.scss'],
})
export class ListarPage {
  tasks: api []=[];
  constructor(private alertController:AlertController,private taskService: ApiService) {}
ngOnInit() {
  this.taskService.getAllTasks()
  .subscribe(tasks=>{
  console.log(tasks);
  this.tasks=tasks;
  });
  }
detalle(data){
  alert(data.nombre); 
}
}

export class MenuExample {

  constructor(private menu: MenuController) { }
  
    openFirst() {
      this.menu.enable(true, 'second');
      this.menu.open('second');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }