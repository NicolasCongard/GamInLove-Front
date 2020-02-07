import { Geek } from './geek';

export class Event {
    id: number;
    nom: string;
    lieu: string;
    date: Date;
    geekParticipant: Array<Geek>;
}