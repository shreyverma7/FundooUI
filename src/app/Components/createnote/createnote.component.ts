import { Component, EventEmitter, Output } from '@angular/core';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  @Output() refreshEvent = new EventEmitter<any>();

  title: any
  description: any
  createddate = new Date();
  modifieddate = new Date();
  id: any
  constructor(private Notesservices: NotesserviceService, private _snackBar: MatSnackBar) { }
  fullView = false

  openFullView() {
    this.fullView = true;
  }
  minimizeView(): void {
    if ((this.title != null && this.description != null)) {
      console.log(this.title, this.description)
      this.id = localStorage.getItem('Id')
      let reqData = {
        title: this.title,
        description: this.description,
        id: +this.id,                    //unary plus concept 
        createddate: this.createddate.toISOString(),
        modifieddate: this.modifieddate.toISOString()
      }
      console.log(reqData)
      this.Notesservices.CreateNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.refreshEvent.emit(response)
        this.fullView = false;
        this._snackBar.open('Note Created Successfully', '', {
          duration: 2000
        });
      });
    }
    else {
      this.fullView = false;
    }
  }
  expandTextarea(): void {
    const textarea: HTMLTextAreaElement = document.getElementById('descriptionTextArea') as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 2) + 'px';
  }
}
