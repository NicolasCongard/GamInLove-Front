import { Mp } from './mp';
import { Event } from './event';
import { Photo } from './photo';
import { Action } from './action';
import { Coop } from './coop';

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
    description: string;
    photos: Array<Photo>;
    recherches: Array<string>;
    coop: Array<Coop>;
    action: Array<Action>;
    mp: Array<Mp>;
    jeux: Array<string>;
    event: Array<Event>;
}
