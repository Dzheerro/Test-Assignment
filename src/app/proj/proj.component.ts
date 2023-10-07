import { Component } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.scss']
})
export class ProjComponent {
  inputValue: string = '';
  passwordStrength: string = '';

  constructor() {}

  onPasswordChange() {
    const password = this.inputValue;
    this.passwordStrength = this.calculatePasswordStrength(password);
  }

  calculatePasswordStrength(password: string): string {
    if (!password) {
      return 'weak'; // Если поле пустое, то все разделы будут красными
    }
  
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  
    if (password.length < 8) {
      return 'weak'; 
    }
  
    if ((hasLetters && hasNumbers && hasSymbols) || (hasLetters && hasNumbers && hasSymbols && password.length >= 8)) {
      return 'strong';
    }
  
    if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      return 'medium';
    }

    return 'weak';
  }
  
  
  
}





