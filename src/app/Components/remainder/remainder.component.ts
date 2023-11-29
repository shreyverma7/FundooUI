import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservices/user.service';


@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
  notelist?: any
  notelistarray?: any = [];

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.remaindernotes();
  }
  remaindernotes() {
    this.userService.Remainder().subscribe((result) => {
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
