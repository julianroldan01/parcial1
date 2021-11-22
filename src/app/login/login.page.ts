import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  arrayElements=[
    {icon:"/assets/icon/NASA.svg.png"}]
      constructor(private alertController:AlertController) {}
    
    detalle(data){
      alert(data.nombre); 
    }

  ngOnInit() {
  }

}
