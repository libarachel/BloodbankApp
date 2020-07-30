import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
import { DonarModel } from '../donarslist/donar.model';
@Component({
  selector: 'app-add-donar',
  templateUrl: './add-donar.component.html',
  styleUrls: ['./add-donar.component.css']
})
export class AddDonarComponent implements OnInit {

  constructor(private bloodbankService: BloodbankService, private router: Router) { }
donarItem = new DonarModel( null, null, null, null, null, null, null, null, null, null, null);
  ngOnInit(): void {
  }
AddDonar(){
  this.bloodbankService.newDonar(this.donarItem);
  console.log('Called');
  alert('Success');
  this.router.navigate(['/donars']);
}
}
