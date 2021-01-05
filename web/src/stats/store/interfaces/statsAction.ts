import { StatsActions } from "../actions/stats.actions";
import Stats from "./stats.interface";

export interface StatsAction {
  type: StatsActions;
  payload: Stats;
}
