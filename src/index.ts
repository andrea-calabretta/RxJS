import { forkJoin } from "rxjs";
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

const randomName$ = ajax<IPerson>
('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax<ICountry>
('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax<IFood>
('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((rnd: AjaxResponse<IPerson>) => console.log
//   (rnd.response.first_name));
// randomNation$.subscribe((rnd: AjaxResponse<ICountry>) => console.log
//   (rnd.response.capital));
// randomFood$.subscribe((rnd: AjaxResponse<IFood>) => console.log
//   (rnd.response.dish));


forkJoin([randomName$, randomNation$, randomFood$] ).subscribe(
  ([nameAjax , nationAjax, foodAjax]) => console.log
  (`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`));




