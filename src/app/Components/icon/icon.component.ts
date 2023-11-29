import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesserviceService } from 'src/app/services/Notesservices/notesservice.service';
import { UserService } from 'src/app/services/userservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() noteid: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private userService: UserService, private router: Router, private notesservice: NotesserviceService, private _snackBar: MatSnackBar) { }
  Archive() {
    this.notesservice.ArchiveNote(this.noteid).subscribe((result) => {
      console.log(result);
      this._snackBar.open('Note Archived Successfully', '', {
        duration: 2000
      });
    })
    window.location.reload();
  }
  showPalette: boolean = false;
  selectedColor: string = ''; 

  colors: string[] = ['#faafa8', '#f39f76', '#fff8b8', '#e2f6d3', '#b4ddd3', '#d4e4ed', '#aeccdc', '#d3bfdb', '#f6e2dd', '#e9e3d4', '#efeff1']; // Your color options

  togglePalette(): void {
    this.showPalette = !this.showPalette;
  }

  selectColor(color: any): void {
    this.selectedColor = color;
    this.showPalette = false;
    console.log(color)

    this.messageEvent.emit(color)
  }
}
