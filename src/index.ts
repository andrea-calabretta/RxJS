import { forkJoin, map } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

// Mike is from New Delhi and likes to eat pasta.

interface IPerson {
  id: number;
  uid: string;
  name: string;
  two_word_name: string;
  four_word_name: string;
  name_with_initials: string;
  name_with_middle: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  male_first_name: string;
  female_first_name: string;
  prefix: string;
  initials: string;
}
export interface ICountry {
  id: number;
  uid: string;
  nationality: string;
  language: string;
  capital: string;
  national_sport: string;
  flag: string;
}
export interface IFood {
  id: number;
  uid: string;
  dish: string;
  description: string;
  ingredient: string;
  measurement: string;
}

const randomFirstName$ = ajax<IPerson>
('https://random-data-api.com/api/name/random_name').pipe(
  map(ajaxResponse => ajaxResponse.response.first_name)
);

const randomCapital$ = ajax<ICountry>
('https://random-data-api.com/api/nation/random_nation').pipe(
  map(ajaxResponse => ajaxResponse.response.capital)
);

const randomDish$ = ajax<IFood>
('https://random-data-api.com/api/food/random_food').pipe(
  map(ajaxResponse => ajaxResponse.response.dish)
);


forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
  ([firstName, capital, dish]) =>
    console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
);

