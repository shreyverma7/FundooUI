import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservices/user.service';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  MatDialog,
} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/DataServices/data.service';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  constructor(private userService: UserService, public matdialog: MatDialog, private notesservice: NotesserviceService, private _snackBar: MatSnackBar, private dataservices: DataService) { }
  @Input() notelistarray: any
  searchText: any
  ngOnInit(): void {
    this.dataservices.receiveData.subscribe((res: any) => {
      console.log(res)
      this.searchText = res
    })
  }
  datafromChild(data: any) {
    console.log("data from the child class" + data);
  }
  openDialog(note: any, noteid: any) {
    const dialogRef = this.matdialog.open(UpdateComponent, {
      width: '450px',
      height: '250px',
      data: {
        note: note,
        idofnote: noteid
      },
    }
    );
  }
  delete(noteid: any) {
    console.log("Delete Note")
    this.notesservice.DeleteNote(noteid).subscribe((result) => {
      console.log(result);
      this._snackBar.open('Note Binned Successfully', '', {
        duration: 2000
      });
    });
    window.location.reload();
  }
}
