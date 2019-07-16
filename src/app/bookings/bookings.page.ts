import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingSrv: BookingService) {}

  ngOnInit() {
    this.loadedBookings = this.bookingSrv.bookings;
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    console.log(`Canceling booking under id ${offerId}`);
  }
}
