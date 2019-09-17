
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { ElementRef } from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({
  selector: '[appValuedatetime]',
  providers: [NgModel],
  host: {
    "(ngModelChange)": 'onInputChange($event)'
        }
})

export class ValuedatetimeDirective {

  @Input() mydate: Date;
  
  @Output() ngModelChange:EventEmitter<any> = new EventEmitter();
  value: any;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';   
    
 }

 onInputChange($event)
 {
    //this.value = $event.target.value.toUpperCase();
    //this.ngModelChange.emit(this.value);
    console.log($event);
    var evDate = $event; //data.eventDate is the date string
    const offset = evDate.getTimezoneOffset() * 60000;
    this.value = new Date(evDate.getTime() - offset);
    console.log(this.value);
    this.ngModelChange.emit(this.value);
    /*var evDate = new Date($event.target.value); //data.eventDate is the date string
    const offset = evDate.getTimezoneOffset() * 60000;
    this.value = new Date(evDate.getTime() - offset);
    console.log(this.value);
    this.ngModelChange.emit(this.value);*/
 };
}


