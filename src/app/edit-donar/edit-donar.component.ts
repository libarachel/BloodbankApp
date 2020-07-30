import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DonarModel } from '../donarslist/donar.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-donar',
  templateUrl: './edit-donar.component.html',
  styleUrls: ['./edit-donar.component.css']
})
export class EditDonarComponent implements OnInit {
  public updateDonar: DonarModel;
  constructor(private BloodbankService: BloodbankService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.showDonar(id);
  }
  showDonar(id){
    this.BloodbankService.showDonar(id)
    .subscribe((data) => {
     this.updateDonar = JSON.parse(JSON.stringify(data))
  })
  }
  editDonars()
  {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log('called donar with id :'+ id);

    if (window.confirm('Are you sure?')) {
    this.BloodbankService.editDonar(id, this.updateDonar)
    .subscribe((data)=>{
    this.router.navigate(['/donars']);
    console.log('Content updated successfully!' + data);
    alert('donar Updated successfully!!');

    }),(err)=>{console.log(err)}
  }
}
}
