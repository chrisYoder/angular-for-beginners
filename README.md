# Angular for Beginners

## Section 1: Introduction to Angular
- Key features:
  - data binding
    - syntax: \[someProperty\]='some value'
    - the square square brackets tell angular that the content is an expression. 
  - event handling
    - syntax: (event)='someExecutableFunction()'
    - someExecutableFunction() is written in the typescript file for the component
  - template reference
    - syntax: #someReferenceName
    - allows us to reference the values of elements easily

## Section 2: Angular Components
  - Input Decorators
    - marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.
    - Syntax: @Input() bindingPropertyName: string;
  - Output Decorators
    - emit change or any custom event names from a custom component in Angular.
    - Syntax: @output() eventName = new EventEmitter
  - ngFor
    - Loops through an array of data and displays the data
    - Auxilliary features
      - Index
        - Numbers each created item. 
      - First does something to the first element.








  




[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-tqgseo)