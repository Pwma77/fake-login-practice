import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password="";

  public username="";

  public correctPassword="motDePasse";

  public correctUsername="utilisateur";

  constructor() { }

  ngOnInit(): void {
  }

  Login(password, username){

    if (this.username == this.correctUsername && this.password == this.correctPassword) {
      alert("Welcome :D");
    }else{
      alert("Wrong user or password");
    }

  }

}
