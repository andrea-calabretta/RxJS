import { BehaviorSubject, fromEvent, Subject } from "rxjs";

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));


// Navigation bar
isLoggedIn$.subscribe(
  isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
);

//Buttons
isLoggedIn$.subscribe(isLoggedIn$ => {
  logoutButton.style.display = isLoggedIn$ ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn$ ? 'block' : 'none';
})

