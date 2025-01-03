import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password_Generator';

  // Properties 
  // variable declaration = variable name datatype and value
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length = 0; 
  password: string = '';

  
  onChangeLength(value: string) {
    
    const parsedValue = parseInt(value); 
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(`Text Value: ${parsedValue}`);
    }
  }

  
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
    
  }

  
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

 
  onChangeUseSymbol() {
    this.includeSymbols = !this.includeSymbols;
  }

  
  onSubmit() {

    console.log(`Entered Length is ${this.length}`);
    
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()+';

    let validChars = '';

    if (this.includeLetters) {
      //validChars += letters;
      validChars = letters + letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }


    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }

    this.password = generatePassword;
    
  }

}
