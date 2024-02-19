import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-hooks",
  standalone: true,
  imports: [],
  templateUrl: "./hooks.component.html",
  styleUrl: "./hooks.component.css",
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit , AfterContentChecked{
  @Input() value: any = "Hooks";

  constructor() {
    // console.log("In Constructor: value:> ", this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("In OnChanges: Value:> ", this.value);
    // console.log("In OnChanges: changes:> ", changes);
  }
  ngOnInit(): void {
    // console.log("In OnInit: values:> ", this.value);
  }
  ngDoCheck(): void {
    // console.log("In DoCheck : value:> ", this.value)
  }
  ngAfterContentInit(): void {
      console.log("In AfterContentInit called ")
  }
  ngAfterContentChecked(): void {
    console.log("In ngAfterContentChecked called ")
  }






}
