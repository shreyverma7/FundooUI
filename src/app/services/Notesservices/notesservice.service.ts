import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {
  token: any

  constructor(private httpservices: HttpService) { }
  CreateNote(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.postService('api/Notes/AddNewNote', reqData, false, httpAuthOptions);
  };
  UpdateNote(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.updateService('api/Notes/EditExistingNote', reqData, false, httpAuthOptions);
  };
  //display all deleted notes in recycle bin
  DeleteNote(noteid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.updateService('api/Notes/GetAllThrashedNotes?noteid=' + noteid, noteid, false, httpAuthOptions);
  };
  //Archieve a note
  ArchiveNote(noteid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.updateService('api/Notes/PutNoteArcheive?noteid=' + noteid + '&userId=' + localStorage.getItem('Id'), noteid, false, httpAuthOptions);
  };
  //permanent delete
  Delete(Noteid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.deleteService('api/Notes/PermanentDeleteNotes?userId=' + localStorage.getItem('Id') + '&noteid=' + Noteid, false, httpAuthOptions);
  };

  RestoreNote(noteid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpservices.updateService('api/Notes/RestoreNotes?noteid=' + noteid + '&userId =' + localStorage.getItem('Id'), noteid, false, httpAuthOptions);
  };

  //except ""delete "  every thinng is fine
}
