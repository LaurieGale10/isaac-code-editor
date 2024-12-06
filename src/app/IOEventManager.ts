import { IOEvent, IOType } from "./types";

export class IOEventManager {
    private IOEvents: IOEvent[];

    constructor() {
        this.IOEvents = [];
    }

    public addLine(text: string, type: IOType) {
        const event: IOEvent = {
            text: text,
            type: type,
            time: new Date()
        }
        this.IOEvents.push(event);
    }

    public getIOEvents(): IOEvent[] {
        return this.IOEvents;
    }

    public clearEvents() {
        this.IOEvents = [];
    }
}