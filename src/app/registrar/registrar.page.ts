import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  arrayElements=[
    {icon:"/assets/icon/NASA.svg.png"}]
      constructor(private alertController:AlertController) {}
    
    detalle(data){
      alert(data.nombre); 
    }

  ngOnInit() {
  }

}
