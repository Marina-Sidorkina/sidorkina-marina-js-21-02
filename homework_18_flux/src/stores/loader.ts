import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { processLoaderAnimationActionType } from "../@types/interfaces/actions";
import { PROCESS_LOADER_ANIMATION } from "../constants/actions/loader";

class LoaderStore extends EventEmitter {
  private width;
  private id: any;
  private check;

  constructor() {
    super();

    this.width = 0;
    this.check = false;
    this.handleAction = this.handleAction.bind(this);
    this.processAnimation = this.processAnimation.bind(this);
    this.getWidth = this.getWidth.bind(this);
  }

  getWidth() {
    return this.width;
  }

  processAnimation(value: boolean) {
    if(value) {
      const showLoadingProcess = () => {
        this.width = this.width < 300 ? this.width + 1 : 0;
        this.id = requestAnimationFrame(showLoadingProcess);
        this.emit("change");
      }

      this.id = requestAnimationFrame(showLoadingProcess);
    } else {
      cancelAnimationFrame(this.id);
      this.width = 0;
      this.emit("change");
    }

  }

  handleAction(action: processLoaderAnimationActionType) {
    switch (action.type) {
      case PROCESS_LOADER_ANIMATION:
        this.processAnimation(action.payload);
        break;

    }
  }
}

const loaderStore = new LoaderStore();

dispatcher.register(loaderStore.handleAction as (payload: unknown) => void);

export default loaderStore;
