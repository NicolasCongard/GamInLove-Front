import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geek } from '../_models/geek';
import { Photo } from '../_models/photo';
import { Router } from '@angular/router';
import  { GeekService } from '../_services/geek/geek.service';
import  { PhotoService } from '../_services/photo/photo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private geekService: GeekService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.uploadForm = this.formBuilder.group({
      url: [],
    });
  }

  onSavePhoto() {
    const photo = new Photo();
    if(this.fileUrl && this.fileUrl !== '') {
      photo.url = this.fileUrl;
    }
    console.log("photo" + photo.url);
    //photo.idGeek = this.uploadForm.get('idGeek').value;

    //this.router.navigate(['/profil']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.geekService.uploadPhoto(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}

