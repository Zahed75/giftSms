import {Component, OnInit} from '@angular/core';
import {SmsUIService} from '../../services/smsUI/sms-ui.service';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gifts',
  imports: [],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent implements OnInit{

  giftList: any[] = []; // Array to store the gift list
  isLoading: boolean = true; // Loading state

  constructor(
    private smsUIService: SmsUIService,
    private sharedService: SharedService, // Inject the shared service
    private router: Router
  ) {
  }


  ngOnInit() {
    this.fetchGiftList();
  }


  // Fetch gift list from the API
  fetchGiftList(): void {
    this.smsUIService.getGiftList().subscribe({
      next: (response) => {
        this.giftList = response; // Assign the API response to giftList
        this.isLoading = false; // Set loading to false
      },
      error: (error) => {
        console.error('Error fetching gift list:', error);
        this.isLoading = false; // Set loading to false even if there's an error
      }
    });
  }

}
