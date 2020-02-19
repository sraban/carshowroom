import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { LoadingController, ToastController, Toast } from 'ionic-angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  toast: Toast = null;
  contentArray:any[];
  constructor(private shared: SharedService, public toastCtrl: ToastController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    var loader = this.loadingCtrl.create({content: "Loading..."}); loader.present();
    let url = '/reports'; 
    this.shared.getCurl(url).subscribe((output:any) => {
       if(output.status) {
        this.contentArray = output.response;
      } else {
        this.presentToast("Api Error!!!");
      }
      loader.dismiss();
    });
  }

  sell( manufacture_id: any, model: any , $event) {
    if (manufacture_id) {
      let record = {"id" : manufacture_id, "name": model };
      let url = '/manufacturers/vehicles/sold'; 
      this.shared.postCurl(url, record).subscribe((output:any) => {
         if(output.status) {
          var row = $event.target.parentNode.parentNode;
          row.parentNode.removeChild(row);
          this.contentArray = this.contentArray.filter((row) => {
            return !(row.manufacture_id == manufacture_id && row.model == model);
          });
          this.presentToast("Sold Successfully");
        } else {
          this.presentToast("Api Error");
        }
      });
    }
  }

  presentToast(msg) {
      this.toast ? this.toast.dismiss() : false;
      this.toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      this.toast.present();
  }

}
