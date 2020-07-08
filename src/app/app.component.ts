import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  userName: string;
  userList: Array<any>;
  user: any;
  isLoggedIn: boolean;
  @ViewChild("closebutton", { read: true, static: true }) closebutton;
  constructor(private router: Router) {
    this.userList = [];
    this.user = {};
    this.isLoggedIn = false;
    this.userName = "";
  }
  ngOnInit() {
    this.isLoggedIn = JSON.parse(
      window.localStorage.getItem("isLoggedIn") || "false"
    );
    if (!this.isLoggedIn) {
      this.userList = JSON.parse(window.localStorage.getItem("users") || "[]");
    } else {
      this.userName = window.localStorage.getItem("loggedInUserName");
    }
  }
  login() {
    if (this.user.id && this.user.password) {
      const foundUser = this.userList.filter((user) => {
        if (
          user.userid === this.user.id &&
          user.password === this.user.password
        ) {
          return true;
        }
      });
      if (foundUser.length !== 0) {
        window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
        this.isLoggedIn = true;
        this.userName = foundUser[0].username;
        this.closebutton.nativeElement.click();
        window.localStorage.setItem("loggedInUserName", this.userName);
        alert("LoggedIn Successfully");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Please enter both fields");
    }
  }
  logout() {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(false));
    window.localStorage.setItem("loggedInUserName", "");
    this.userName = "";
    this.isLoggedIn = false;
    alert("Logged out successfully");
    this.router.navigate(["/home"]);
  }
  close() {
    this.user.id = "";
    this.user.password = "";
  }
}
