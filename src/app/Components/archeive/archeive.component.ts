import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-archeive',
  templateUrl: './archeive.component.html',
  styleUrls: ['./archeive.component.scss']
})
export class ArcheiveComponent implements OnInit {
  notelist?: any
  notelistarray?: any = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.ArcheiveNotes();
  }
  ArcheiveNotes() {
    this.userService.Archeive().subscribe((result) => {
      console.log(result);
      this.notelist = result;
      this.notelistarray = this.notelist.data;
      console.log(this.notelist.data)
    })
  }
  datafromChild(data: any) {
    console.log("data from the child class" + data);
  }
}
