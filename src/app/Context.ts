import { Cords } from "../lib/Cords"

export class Context{

    firstFieldOpen: boolean;
    secondFieldOpen: boolean;
    cordsFirstField: Cords|null;
    cordsSecondField: Cords|null;

    constructor() {
        
        this.firstFieldOpen = false;
        this.secondFieldOpen = false;
        this.cordsFirstField = null;
        this.cordsSecondField = null;


    }

}
