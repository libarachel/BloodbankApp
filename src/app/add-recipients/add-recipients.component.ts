import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
import {RecipientModel} from '../recipient-list/recipient.model';
@Component({
  selector: 'app-add-recipients',
  templateUrl: './add-recipients.component.html',
  styleUrls: ['./add-recipients.component.css']
})
export class AddRecipientsComponent implements OnInit {

  constructor(private bloodbankService: BloodbankService, private router: Router) { }
  recipientItem = new RecipientModel( null, null, null, null, null, null );
  ngOnInit(): void {
  }
  AddRecipient(){
    this.bloodbankService.newRecipient(this.recipientItem);
    console.log('Called');
    alert('Success');
    this.router.navigate(['/recipients']);
  }
}
