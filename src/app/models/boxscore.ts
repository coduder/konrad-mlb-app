import { Team } from "./team";
/**
 * Stores team info for specific game
 */
export class Boxscore {
    constructor(
        public homeTeam: Team,
        public awayTeam: Team
    ) {}
}
