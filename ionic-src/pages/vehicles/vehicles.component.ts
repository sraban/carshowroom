import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController, Toast } from 'ionic-angular';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {

  
  constructor(private _fb: FormBuilder, private shared: SharedService, public toastCtrl: ToastController, public loadingCtrl: LoadingController) { }

  toast: Toast = null;
  saveForm: FormGroup;
  contentArray:any[];
  manufacturers:any[];
  showList: boolean = true;

  ngOnInit() {
    this.saveForm = this._fb.group({
        manufacture_id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        reg_no: ['', [Validators.required]],
        color: [''],
        date_manufactured: [''],
        filename: [''],
        oldFilePath: [''],
        note: ['', [Validators.maxLength(100),Validators.pattern(/[^<>?%&\"]*/)]]
    });
    this.loadRecords();
    this.loadManufacture();
  }

  loadManufacture() {
    let url = '/manufacturers'; 
    this.shared.getCurl(url).subscribe((output:any) => {
       if(output.status) {
        this.manufacturers = output.response;
      } else {
        this.presentToast(output.response.length? output.response.join(" - "): output.response);
      }
    });
  }

  loadRecords() {
    var loader = this.loadingCtrl.create({content: "Loading..."}); loader.present();
    let url = '/vehicles'; 
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
        let url = '/vehicles/save';
        this.shared.postCurl(url, this.saveForm.value).subscribe( (output:any) => {
          if(output.status) {
            this.presentToast("Saved!!!");
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
      let url = '/vehicles/delete'; 
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


setFiles( event, field, oldFiles = '') {
    var loader = this.loadingCtrl.create({content: "Uploading..."}); loader.present();
    const files = event.target.files || event.srcElement.files;
    let url = '/vehicles/upload'; 
    if( field.value == oldFiles ) {
      var oldFilesBackUp = oldFiles;
      field.setValue("");
    }else{
      oldFiles = field.value;
    }

    if (!files) {
      loader.dismiss();
      return
    }

    var totalFileSize = 0;
    for (let i = 0; i < files.length; i++) {
      var fileSize = files[i].size;
      fileSize = fileSize / 1048576; //size in mb
      totalFileSize += fileSize;
    }
    if(totalFileSize > 10) {
      this.presentToast("File size exceeding 10Mb");
      event.target.value = "";
      return false;
    }

    /*formData.append('file', files[0], files[0].name);*/ /*  +i.toString()  */
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }
    if(oldFilesBackUp){
      formData.append("oldFiles", oldFilesBackUp); // before exists in selection
    }

    this.shared.uploadPic(url, formData).subscribe((output:any) => {
        if(output.status) {
          oldFiles = oldFiles ? oldFiles+':'+output.response : output.response;
          field.setValue(oldFiles);
        }else{
          event.target.value = "";
          field.setValue("");
          this.presentToast("File uploading Error!!!");
        }
        loader.dismiss();
      }
    );
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