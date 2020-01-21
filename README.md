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
  - ngIf
    - conditionally renders element 
  - Optional Chaining
    - Syntax: ?.propertyName 
    -  provides a way to simplify accessing values through connected objects when it's possible that a reference or function may be undefined or null.
  - Core Directives
    - ngClass
      - syntax: \[ngClass\]=""
      - adds or removes CSS classes on an element.
      - four ways to use
        - String
          - \[ngClass\]='beginner'
        - Array
          - \[ngClass\]=\['begginer'\]
        - Object
          -  \[ngClass\]={'beginner': true, 'courseCard': true}
        - function 
          - \[ngClass\]="someFunction()"
          - must have a corresponding function in the .ts file
    - ngStyle
      - apply's style to a particular part of the Components
      - Ways to use 
        - \[style.propertyName\]="'value'"
        - \[ngStyle\]="{'propertyName': 'value'}"
        - \[ngStyle\]='someFunction()'
          - corresponding function in TS file
    - ngSwitch
      - allows conditional rendering with more than two choices
      - Syntax: 
        - \[ngSwitch\]='test.condition' in parent component
        - *ngSwitchCase='case' in child Components
    - Built-In Pipes
      - transforms data and displays it.
  ## Section 3: Angular Service Layer
    - 

      








  



