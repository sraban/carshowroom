import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController, Toast } from 'ionic-angular';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html'
})
export class ManufacturersComponent implements OnInit {

  constructor(private _fb: FormBuilder, private shared: SharedService, public toastCtrl: ToastController, public loadingCtrl: LoadingController) { }

  toast: Toast = null;
  saveForm: FormGroup;
  contentArray:any[];

  ngOnInit() {
    this.saveForm = this._fb.group({
        name: ['', [Validators.required]]
    });
    this.loadRecords();
  }

  loadRecords() {

    var loader = this.loadingCtrl.create({content: "Loading..."}); loader.present();
    let url = '/manufacturers'; 
    this.shared.getCurl(url).subscribe((output:any) => {
       if(output.status) {
        this.contentArray = output.response;
      } else {
        this.presentToast("Api Error!!!");
      }
      loader.dismiss();
    });
  }

  saveFormSubmit() {
    var loader = this.loadingCtrl.create({content: "Saving..."}); loader.present();
    if (this.saveForm.valid) {
        let url = '/manufacturers/save';
        this.shared.postCurl(url, this.saveForm.value).subscribe( (output:any) => {
          if(output.status) {
            this.presentToast("Manufacturer added successfully");
            this.loadRecords();
            this.saveForm.reset();
          } else {
            this.presentToast(output.response.length? output.response.join(" - "): output.response);
          }
          loader.dismiss();
        });
    }
  }


  deleteRecord( id: any , $event) {
    if (id) {
      let record = {"id" : id };
      let url = '/manufacturers/delete'; 
      this.shared.postCurl(url, record).subscribe((output:any) => {
         if(output.status) {
          var row = $event.target.parentNode.parentNode;
          row.parentNode.removeChild(row);
          this.contentArray = this.contentArray.filter((row) => {
            return row.id !== id;
          });
          this.presentToast("Deleted Successfully");
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
