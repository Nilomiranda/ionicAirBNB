import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  NavController,
  ModalController,
  ActionSheetController,
} from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private placesSrv: PlacesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesSrv.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.actionSheetCtrl
      .create({
        header: 'Choose an option for the place selected',
        buttons: [
          {
            text: 'Select a date',
            handler: () => {
              this.openBookingModal('select');
            },
          },
          {
            text: 'Random date',
            handler: () => {
              this.openBookingModal('random');
            },
          },
          {
            text: 'Cancel',
            role: 'destructive',
          },
        ],
      })
      .then(actionSheetEl => {
        actionSheetEl.present();
      });
  }

  openBookingModal(option: 'select' | 'random') {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.role, resultData.data);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!!!!');
        }
      });
  }
}
