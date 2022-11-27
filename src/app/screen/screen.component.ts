import { Key } from './../../models/Key';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  expression: string = '';

  upperScExp: string = '';
  mass: Object = '';
  pos: number = 0;

  clear: boolean = false;

  constructor(private http: HttpService) { 
  }

  ngOnInit(): void {
  }
  
  changeExp(key: Key){
		if(this.expression == "Error"){
			this.clear = true
		}
		if(key.type == 'n'){
      if(this.clear){
        this.expression = '';
        this.clear = false;
      }
			if(this.expression.length <= 16)
      	this.expression += key.value;
    }else if(key.value == '.' && !this.expression.includes(".")){
      this.expression += '.';
    }else if(key.value == 'CE'){
      this.expression = '';
    }else if(key.value == 'C'){
      this.upperScExp = '';
      this.expression = '';
    }else if(key.value == 'BACK'){
			if(this.expression == "Error")
				this.expression = '';
      this.expression = this.expression.slice(0, -1);
    }else if(key.type == 'o' && this.expression != '' && this.expression != "Error"){
      if(['+','-','x','÷'].includes(key.value)){
        if(!['+','-','x','÷'].includes(this.upperScExp[this.upperScExp.length-1])){
          this.upperScExp += this.expression + ' ' + key.value;
          this.expression = '';
        }else if(this.expression != ''){
					this.http.getResult(this.upperScExp + ' ' + this.expression).
        	subscribe(res => {this.clear = true;
													this.upperScExp = '';
													this.expression = '';
                          this.upperScExp = res + ' ' + key.value;
                          this.expression = res;});
				}else
          this.upperScExp = this.upperScExp.slice(0, -2) + ' ' + key.value;
      }else if(['%','1/x','x^2','sqrt(x)', 'neg'].includes(key.value)){
        switch(key.value){
          case '%':
            this.http.getResult(this.expression + ' ÷ ' + '100').
        				subscribe(res => {this.expression = res;});
            break;
          
          case '1/x':
            this.http.getResult('1 ÷ ' + this.expression).
        				subscribe(res => {this.expression = res;});
            break;

          case 'x^2':
            this.http.getResult(this.expression + ' x ' + this.expression).
        				subscribe(res => {this.expression = res;});
            break;

          case 'sqrt(x)':
            this.http.getResult(this.expression + ' sqrt(x)').
        				subscribe(res => {this.expression = res;});
            break;

					case 'neg':
						this.http.getResult('-1 x ' + this.expression).
								subscribe(res => {this.expression = res;});
					break;

          default:
            break;
        }
      }
    }else if(key.type == 'e'){
			if(this.expression != '' && this.upperScExp != ''){
				this.upperScExp += ' ' + this.expression;
				if(!['+','-','x','÷'].includes(this.upperScExp[this.upperScExp.length-1]))
					this.http.getResult(this.upperScExp).
					subscribe(res => {this.clear = true;
														this.expression = '';
														this.upperScExp = '';
														this.expression = res;});
			}
    }
  }
}
