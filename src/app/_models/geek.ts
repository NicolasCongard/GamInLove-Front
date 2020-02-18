import { Mp } from './mp';
import { Event } from './event';
import { Photo } from './photo';
import { Action } from './action';

export class Geek {
    id: number;
    age: number;
    pseudo: string;
    password: string;
    ville: string;
    sexe: string;
    typeCompte: string;
    email: string;
    token: string;
    photos: Array<Photo>;
    recherches: Array<string>;
    coop: Array<string>;
    action: Array<Action>;
    mp: Array<Mp>;
    jeux: Array<string>;
    event: Array<Event>;
}
