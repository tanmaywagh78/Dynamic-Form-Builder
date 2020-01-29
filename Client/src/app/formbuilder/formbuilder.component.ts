import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "../common.service";


@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.listDTOs().then((res: any) => {
      this.DTObjects = res;
      this.last=this.DTObjects.length - 1;
      this.dtofields = Object.keys(this.DTObjects[this.last]);
    });
  }

  @Input() fields: string[];
  @Input() obj2: any = {};

  public sample: any = {};
  DTObjects: any = [];
  dtofields: string[];
  last;
  editSport(d) {
    this.sample = d;
  }
  onSubmit() {
    console.log(this.sample);
    if (this.sample._id) {
        this.commonService.updateDTO(this.sample);
    }
    else{
      this.commonService.addDTO(this.sample).then((res:any)=>{
        this.commonService.listDTOs().then((res: any) => {
          this.DTObjects = res;
          this.last=this.DTObjects.length - 1;
          this.dtofields = Object.keys(this.DTObjects[this.last]);
        });
      });
    }
    this.sample = {};

  }

}
