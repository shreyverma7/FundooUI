import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservices/user.service';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';
import {
  MatSnackBar,

} from '@angular/material/snack-bar';
import {
  MatDialog,

} from '@angular/material/dialog';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  notelist: any
  notelistarray?: any = [];
  dialog: any;


  constructor(private userService: UserService, public matdialog: MatDialog, private notesservice: NotesserviceService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.userService.Getallnotes().subscribe((result) => {
      console.log(result);
      this.notelist = result;
      this.notelistarray = this.notelist.data;
      console.log(this.notelist.data)
    })
  }
  datafromChild(data: any) {

    console.log("data from the child class" + data);
    this.getAllNotes();
  }
}
