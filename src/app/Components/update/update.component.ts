import { Component,Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import {
  MatSnackBar,

} from '@angular/material/snack-bar';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  receivedColor: any
title: any
description: any
id: any
noteid: any
modifieddate= new Date();
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any, private notesservices:NotesserviceService,private _snackBar: MatSnackBar
  ) {
    if(data.note){
      this.title=data.note?.title,
      this.description=data.note.description
      this.noteid = data.idofnote
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
 }
 receiveColor(color: any): void {
  this.receivedColor = color;
  // Handle the received color in this component
}  
  expandTextarea(): void {
    const textarea: HTMLTextAreaElement = document.getElementById('descriptionTextArea') as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 2) + 'px';
  } 
  minimizeView(){
  this.id=localStorage.getItem('Id')
  let reqData = {
  noteid: this.noteid,
  title: this.title,
  description: this.description,
  id: +this.id,                    //unary plus concept 
  modifieddate: this.modifieddate.toISOString(),
  color: this.receivedColor
  }
  console.log(reqData)
  this.notesservices.UpdateNote(reqData).subscribe((response:any) => { 
    console.log(response);
    this.dialogRef.close()
    this._snackBar.open('Note Updated Successfully', '', {
      duration: 2000
     });
     window.location.reload();
   })
  }
}
