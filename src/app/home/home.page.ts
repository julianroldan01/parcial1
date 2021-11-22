import { api } from './../interfaces/api';
import { ApiService } from '../api.service'
import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
arrayElements=[
{nombre:"Julian Andres",documento:"1003802254",edad:"20",icon:"/assets/icon/julian.jpg", correo:"jullian2000lol@gmail.com"},
{nombre:"andres Raul", documento:"984882440",edad:"30",icon:"/assets/icon/andres.jpg", correo:"andru199@gmail.com"},
{nombre:"Jhon Felipe", documento:"1004972701",edad:"18",icon:"/assets/icon/jhon.jpg", correo:"jhon777@gmail.com"},
{nombre:"catalina Mejia",documento:"1902421101",edad:"19",icon:"/assets/icon/cata.jpg", correo:"catame@gmail.com"}]
tasks: api []=[];
constructor(private alertController:AlertController, public actionSheetController:ActionSheetController , private taskService: ApiService) {}
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Opciones',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play',
      icon: 'caret-forward-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

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
async alert(item) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'mas de mi',
    message: 'mi nombre es: '+item.nombre+ ' identificado con C.C: '+item.documento + ' tengo: '+item.edad+' años y mi correo es: '+item.correo,
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
async alertpelicula(item) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'mas de mi',
    message: 'pelicula: '+item.pelicula+ ' descripcion: '+item.descripcion + ' restriccion de edad: '+item.edadmax+' años',
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}
export class MenuExample {

  constructor(private menu: MenuController) { }
  
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }

