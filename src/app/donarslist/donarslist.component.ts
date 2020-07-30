import { Component, OnInit } from '@angular/core';
import { DonarModel } from './donar.model';
import { BloodbankService } from '../bloodbank.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-donarslist',
  templateUrl: './donarslist.component.html',
  styleUrls: ['./donarslist.component.css']
})
export class DonarslistComponent implements OnInit {
donars: DonarModel[];
  constructor(private bloodbankService: BloodbankService) { }
 
  deleteDonars(donar, index)
  {
    if(window.confirm('Are you sure?')){
      this.bloodbankService.deleteDonar(donar._id)
       .subscribe((data) => {
         this.donars.splice(index, 1);
        //  console.log(`Deleted product is ${data}`);
    })
  }
  }
  ngOnInit(): void {

    this.bloodbankService.getdonars().subscribe((data) => {
      this.donars = JSON.parse(JSON.stringify(data));
    });

  }
  }


