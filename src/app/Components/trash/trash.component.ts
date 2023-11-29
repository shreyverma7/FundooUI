import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservices/user.service';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notelist?: any
  notelistarray?: any = [];


  constructor(private userService: UserService, private notesservices: NotesserviceService, private snackbar: MatSnackBar) { }
  ngOnInit(): void {
    this.TrashNotes()
  }
  TrashNotes() {
    this.userService.Trash().subscribe((result) => {
      console.log(result);
      this.notelist = result;
      this.notelistarray = this.notelist.data;
      console.log(this.notelist.data)
    })
  }
  delete(noteid: any) {
    console.log("delete note");
    this.notesservices.Delete(noteid).subscribe((result) => {
      console.log(result);
      this.snackbar.open('Note deleted Permanenetly', '', {
        duration: 2000
      });
    })
    window.location.reload();
  }
  restore(noteid: any) {
    console.log("Restore Note");
    this.notesservices.RestoreNote(noteid).subscribe((result) => {
      console.log(result);
      this.snackbar.open('Note Restored', '', {
        duration: 2000
      });
    })
    window.location.reload();
  }
}
