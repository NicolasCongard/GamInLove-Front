import { Mp } from './mp';
import { Event } from './event';

export class Geek {
    id: number;
    age: number;
    pseudo: string;
    password: string;
    ville: string;
    sexe: string;
    typeCompte: string;
    email: string;
    photos: Array<string>;
    recherches: Array<string>;
    coop: Array<string>;
    action: Array<string>;
    mp: Array<Mp>;
    jeux: Array<string>;
    event: Array<Event>;
}