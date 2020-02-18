import { Geek } from './geek';

export class Action {
	id: number;
	typeAction: string;
	geekAction: Geek;
	geekCible: Geek;
}