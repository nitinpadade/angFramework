import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-datechangecomp',
  templateUrl: './datechangecomp.component.html',
  styleUrls: ['./datechangecomp.component.css']
})
export class DatechangecompComponent implements OnInit {

 @Input() datevalue : Date;
 @Input() parent: FormGroup;
 @Output() updatedatevalue = new EventEmitter<Date>();

  constructor( ) { 
   
  }

  datevaluechange(type: string, event: MatDatepickerInputEvent<Date>)
  {
    var evDate = event.value; 
    if(evDate!=null){
    const offset = evDate.getTimezoneOffset() * 60000;
    this.updatedatevalue.emit(new Date(evDate.getTime() - offset));
    }
    else
    this.updatedatevalue.emit(null);
  }

  ngOnInit() {
    
  }

}
