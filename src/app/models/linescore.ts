/**
 * Line score info for displaying game summary
 */
export class Linescore {
    constructor(
        public errors,  // team errors
        public result   // game result object from api
    ) {}
}
