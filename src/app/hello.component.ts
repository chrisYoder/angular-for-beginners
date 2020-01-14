import { Component, Input } from '@angular/core';

@Component({
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
