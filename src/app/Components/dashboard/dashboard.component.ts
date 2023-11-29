import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/DataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnDestroy {
  menuClicked: boolean = false;

  toggleMenu(): void {
    this.menuClicked = !this.menuClicked;
  }
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataservice: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  SearchNotes(event: any) {
    console.log(event.target.value);
    this.dataservice.SendData(event.target.value)
  }
}
