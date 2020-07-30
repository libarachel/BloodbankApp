import { Component, OnInit } from '@angular/core';
import {RecipientModel} from './recipient.model';
import { BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {
 public recipients: RecipientModel[];
 selectedRowIndex: number = -1;
  constructor(private bloodbankService: BloodbankService , private router: Router) { }
  
  deleteRecipients(recipient,index)
  {
    if(window.confirm('Are you sure?')){
      this.bloodbankService.deleteRecipient(recipient._id)
       .subscribe((data) => {
         this.recipients.splice(index, 1);
        //  console.log(`Deleted product is ${data}`);
    })
  }
  }
  ngOnInit(): void {
    this.bloodbankService.getrecipients().subscribe((data) => {
      this.recipients = JSON.parse(JSON.stringify(data));
    });
   
  }

}
