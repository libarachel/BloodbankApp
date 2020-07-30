import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RecipientModel} from '../recipient-list/recipient.model';

@Component({
  selector: 'app-edit-recipients',
  templateUrl: './edit-recipients.component.html',
  styleUrls: ['./edit-recipients.component.css']
})
export class EditRecipientsComponent implements OnInit {

  public updateRecipient: RecipientModel;
  constructor(private BloodbankService: BloodbankService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.showRecipient(id);
  }

  showRecipient(id){
    this.BloodbankService.showRecipient(id)
    .subscribe((data) => {
     this.updateRecipient = JSON.parse(JSON.stringify(data))
  })
  }
  editRecipients()
  {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log('called recipient with id :'+ id);

    if (window.confirm('Are you sure?')) {
    this.BloodbankService.editRecipient(id, this.updateRecipient)
    .subscribe((data)=>{
    this.router.navigate(['/recipients']);
    console.log('Content updated successfully!' + data);
    alert('recipient Updated successfully!!');

    }),(err)=>{console.log(err)}
  }
}
}
