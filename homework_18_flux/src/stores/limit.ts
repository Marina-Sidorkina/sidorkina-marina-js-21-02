import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { UPDATE_LIMITS } from "../constants/actions/limit";
import { updateLimitsActionType } from "../@types/interfaces/actions";

class LimitStore extends EventEmitter {
  private limits;
  private startIndex: number;

  constructor() {
    super();

    this.startIndex = 0;
    this.limits = [
      [10, "elements"],
      [20, "elements"],
      [5, "elements"]
    ];

    this.updateLimits = this.updateLimits.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.getLimits = this.getLimits.bind(this);
  }

  getLimits() {
    return this.limits;
  }

  updateLimits(perPageLimit: number) {
    this.limits.forEach((item,index) => {
      if(item[0] === perPageLimit) {
        this.startIndex = index
      }
    });

    this.limits = [this.limits.splice(this.startIndex, 1)[0], ...this.limits];
  }

  handleAction(action: updateLimitsActionType) {
    switch (action.type) {
      case UPDATE_LIMITS:
        this.updateLimits(action.payload);
        break;
    }
  }
}

const limitStore = new LimitStore();

dispatcher.register(limitStore.handleAction as (payload: unknown) => void);

export default limitStore;
