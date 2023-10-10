# AngularTasks

## Tasks

1. Add Security
   - Modify the `LoginComponent` files to have a working login screen
   - Modify the `AuthService` to handle login and validations
     - validate login credentials (use set of hardcoded credentials)
     - store/retrieve session info (using localstorage)
   - Modify `AuthGuard` to prevent unauthorized access to other modules
      - pick at least one other module and protect it agains unauthorized users

2. Create an http interceptor
   - When a status 401 (Unauthorized) is recieved, the interceptor should redirect to the login page (/auth/login)
   - When a status 403 (Forbidden) is recieved, show the forbidden page (/auth/forbidden)
   - Constinue as notmal on any other status

3. Implement the `UsernameGeneratorComponent`
     - Having the fields `firstName` and `lastName`, it should generate a username with the following format `[firstname]_[lastname]_[random integer]`
     - The random integer should only change if the `firstName` or `lastName` change
     - Add dynamic forms validations
       - Show first error under each field and color it red (message and input outline)
       - The `firstName` should be:
         - Required
         - Min Lenght of 3
         - Max lenght of 30
       - The `lastName` should be:
         - Required
         - Min Lenght of 2
         - Max lenght of 40

4. Add `Angular Material` and use it on the `UsernameGeneratorComponent`

5. Add layout parts:
   - Add header bar with some logo and a hamburger icon (use fontawesome)
   - Add left nav that toggles when clickng the hamburger icon
   - Add main content section for the routes
   - Make it responsive

6. Complete the template for the `DynamicFormTemplateComponent`
   - Edit the html to render the dynamic `<input/>` fields for the form
   - If someone modifies the `person` field the template should render all the fields
   - Be able to submit the form with the json value (just console log it in the .ts file)

7. Phone Book
   - Edit the `PhoneBookComponent`
   - Create a form with the following fields: firstName, lastName, phoneNumber
   - When submitting the form update a list under it with the new contact and clear the form
   - The list/table should be sorted by lastName by default and include all fields
   - The list should be sortable (click on headers [ascending, decending])

8. Tic Tac Toe
   - Complete the `TicTacToeComponent` logic
   - Indicate the current player's turn: X or O
   - Indicate the winner with a message
   - Implemet the reset button
   - The current player should not be able to override previous moves (can only place a move on an empty square)

9.  Modify the `NumberTriviaComponent` to make a request to `http://numbersapi.com/<number>` each time the user inputs a different number.
    - Use RXJS to solve this task.
    - Make the request happen after the user stops interacting with the input for about half a second  
    - Make the request happen only when the number is different from the previous one
    - Display the response message

10. Create a `CustomTableComponent`
    - Place needed files inside `src/app/components/custom-table/`
    - It should render a regular table, tr, th and td under the covers.
    - It should accept an array of `CustomColumnComponent`s as children
    - The `CustomColumnComponent` should have ng-temaple directives as children:
       - `TableHeaderDirective`
       - `TableCellDirective`
    - Use this component on the `PhoneBookComponent` 
    - Pagination and sorting functionality is optional to implement.
    - Target usage example: 
      ```html
      <custom-table [items]="contacts">
         <custom-column>
            <ng-template TableHeaderDirective>
               Full Name
            </ng-template>
            <ng-template TableCellDirective let-item>
               {{item.lastName}} {{item.firstName}}
            </ng-template>
         </custom-column>
         <custom-column>
            <ng-template TableHeaderDirective>
               Age
            </ng-template>
            <ng-template TableCellDirective let-item>
               {{item.age}}
            </ng-template>
         </custom-column>
      </custom-table>
      ```
