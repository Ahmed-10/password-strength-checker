import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  specialChar = ['!', '@', '#', '$', '%', '^', '&', '*']

  password: string = '';
  // total length of password string
  n: number = 0;
  // number of Upper-Case characters 
  len: number = 0;
  // number of lower-Case characters 
  len_l: number = 0;
  // number of Numbers 
  num: number = 0;
  // number of Special Characters
  sp: number = 0;
  // repeat occurrences: letter and numbers
  ro: number = 0;
  // sequential char: letters and numbers
  sc: number = 0;
  // sequential symbol
  ss: number = 0;
  // meet requirements -> contain [8 char, Uppercase, Lowercase, Numbers, Symbols]
  requirements: number[] = [0, 0, 0, 0, 0];
  requirementsScore: number = 0;
  meetRequirements: boolean = false;

  score: number = 0;
  strength: number = 0;
  
  constructor() { }

  onKey(event) {
    this.len = 0
    this.len_l = 0
    this.num = 0
    this.sp = 0
    this.ro = 0
    this.sc = 0
    this.ss = 0
    for (let i = 0; i < 5; i++) { this.requirements[i] = 0 }

    this.password = event.target.value;
    this.n = this.password.length;

    if (this.n >= 8) { this.requirements[0] = 1 }

    for (let i = 0; i < this.password.length; i++) {
      this.calculateScore(this.password[i], i)
    }

    this.score = (this.n * 4)
      + (Math.abs(this.len - this.n) * 2)
      + (Math.abs(this.len_l - this.n) * 2)
      + (this.num * 4)
      + (this.sp * 6)
      - (this.ro * 2)
      - (this.sc * 3)
      - (this.ss * 3)

    if ((this.num == this.n)
      || ((this.len + this.len_l) == this.n)) {
      this.score = this.score - this.n
    }

    this.requirementsScore = this.requirements.reduce((accumulator, currentValue) => accumulator + currentValue)
    if ((this.requirementsScore >= 4)
      && (this.n >= 8)) {
      this.score = this.score + (this.n * 2);
      this.meetRequirements = true;
    }

    this.score = Math.trunc(this.score *= (3 / 5));

    if (this.score >= 100) { this.strength = 5 }
    else if (this.score <= 0) { this.strength = 0 }
    else { this.strength = Math.trunc((this.score / 100) * 5) }
  }

  calculateScore(c, index: number) {
    // check Upper case letter
    if ((c.charCodeAt() >= 65) && ((c.charCodeAt() <= 90))) {
      this.len++;
      this.requirements[1] = 1
    }
    // check Lower case letter
    else if ((c.charCodeAt() >= 97) && ((c.charCodeAt() <= 122))) {
      this.len_l++;
      this.requirements[2] = 1
    }
    // check number
    else if ((c.charCodeAt() >= 48) && ((c.charCodeAt() <= 57))) {
      this.num++;
      this.requirements[3] = 1
    }
    // check special charcters
    else if (this.specialChar.includes(c)) {
      this.sp++;
      this.requirements[4] = 1
    }
    // repeat occurrences: letter and numbers
    if (index > 0) {
      if (c.charCodeAt() === this.password.charCodeAt(index - 1)) {
        this.ro++;
      }
    }

    if (index > 1) {
      if (this.specialChar.includes(c)) {
        const specialIndex = this.specialChar.indexOf(c)
        if (specialIndex > 1) {
          if ((this.password[index - 1] === this.specialChar[specialIndex - 1])
            && (this.password[index - 2] === this.specialChar[specialIndex - 2])) {
            this.ss++;
          }
        }
      }
      else if ((c.charCodeAt() - this.password.charCodeAt(index - 1) == 1)
        && (c.charCodeAt() - this.password.charCodeAt(index - 2) == 2)) {
        this.sc += 1;
      }
    }
    
  }
}
