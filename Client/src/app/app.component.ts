import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../app/common.service";
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FORM BUILDER APP';
  public myForm: FormGroup;

  // myForm = new FormGroup({
  //   json: new FormControl(''),
  // });

  myForm2 = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    label: new FormControl(''),
    key: new FormControl('')
  });
  fields: string[];
  json: any = {};
  jsonArray: any = {};
  option: any = {};
  optionArray: any = [];
  obj2: any = {};

  constructor(private commonService: CommonService) {
    // this.myForm = new FormGroup({
    //   json: new FormControl(JSON.stringify(this.Object))
    // })

    // this.obj2=this.Object;
    // this.fields = Object.keys(this.obj2);
  }

  ngOnInit() {
  }

  checkType(type) {
    if (type == "dropdown" || type == "radio" || type == "checkbox") {
      document.getElementById("optionDiv").style.display = "block";
    }
    else{
      document.getElementById("optionDiv").style.display = "none";
    }
  }
  addOption(json, option) {
    if (json.type == "dropdown" || json.type == "radio" || json.type == "checkbox") {
      this.optionArray.push(option);
      this.option = {};
    }
  }
  addJson(json) {
    if (json.type == "dropdown" || json.type == "radio" || json.type == "checkbox") {
      json.options = this.optionArray;
    }
    this.jsonArray[json.name] = json;
    this.json = {};
    this.optionArray = [];
    document.getElementById("optionDiv").style.display = "none";
  }
  onSubmit() {
    this.commonService.addJson(this.jsonArray).then(result => {
      this.obj2 = result;
      this.fields = Object.keys(this.obj2);
    });
    this.jsonArray=[];
    document.getElementById("optionDiv").style.display = "none";
    // console.log(this.myForm.value.json);
    // this.commonService.addJson(this.myForm.value.json).then(result => {
    //   this.obj2 = result;
    //   this.fields = Object.keys(this.obj2);
    // });
  }

  public Object: any = {
    "firstName": {
      "type": "textbox",
      "name": "firstName",
      "label": "First Name",
      "value": "",
      "required": "true"
    },
    "lastName": {
      "type": "textbox",
      "name": "lastName",
      "label": "Last Name",
      "value": "",
      "required": "true"
    },
    "email": {
      "type": "textbox",
      "name": "email",
      "label": "Email",
      "value": "",
      "required": "true"
    },
    "picture": {
      "type": "file",
      "name": "picture",
      "label": "Picture",
      "required": "true",
      "onUpload": "this.onUpload.bind(this)"
    },
    "country": {
      "type": "dropdown",
      "name": "country",
      "label": "Country",
      "value": "in",
      "required": "true",
      "options": [
        {
          "key": "in",
          "label": "India"
        },
        {
          "key": "us",
          "label": "USA"
        }
      ]
    },
    "gender": {
      "type": "radio",
      "name": "gender",
      "label": "Gender",
      "value": "m",
      "required": "true",
      "options": [
        {
          "key": "m",
          "label": "Male"
        },
        {
          "key": "f",
          "label": "Female"
        }
      ]
    },
    "hobbies": {
      "type": "checkbox",
      "name": "hobbies",
      "label": "Hobbies",
      "required": "true",
      "options": [
        {
          "key": "f",
          "label": "Fishing"
        },
        {
          "key": "c",
          "label": "Cooking"
        }
      ]
    }
  };


}
