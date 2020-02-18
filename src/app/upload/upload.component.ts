import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geek } from '../_models/geek';
import { Photo } from '../_models/photo';
import  { GeekService } from '../_services/geek/geek.service';
import  { PhotoService } from '../_services/photo/photo.service';
import {LikeService} from '../_services/like/like.service';

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
  geek: Geek = new Geek();
  photos: Photo[];

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private geekService: GeekService,
    private likeService: LikeService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.afficherPhoto();
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
    this.geek = JSON.parse(window.sessionStorage.getItem('geek'));
    const geekId = this.geek.id;
    this.geekService.savePhoto(photo, geekId).subscribe();
    location.reload();
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

  afficherPhoto() {
    this.geek = JSON.parse(window.sessionStorage.getItem('geek'));
    this.likeService.getById(this.geek.id).subscribe(
      photos => this.photos = photos
    );
  }

  deletePhoto(id: number) {
    this.photoService.delOnePhoto(id).subscribe();
    location.reload();
  }
}
