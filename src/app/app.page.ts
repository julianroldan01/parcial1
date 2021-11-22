import { api } from './interfaces/api';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
