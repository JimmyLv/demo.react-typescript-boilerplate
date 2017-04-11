declare module "offline-plugin/runtime" {
  export const install: Function;
}

declare module "warning" {
  const warning: (boolean, string) => void;
  export = warning;
}

declare module Expect {
  import EventHandler = React.EventHandler;
  import SyntheticEvent = React.SyntheticEvent;
  interface Spy extends EventHandler<SyntheticEvent<any>> {
    (): EventHandler<SyntheticEvent<any>>;
  }
}

declare module _ {
  export interface LoDashStatic {
    conformsTo: (a: any, b: any) => boolean;
  }
}


declare module "react-router-scroll" {
  export const useScroll: Function; //TODO: needs type definition
}

interface NodeModule {
  hot: {
    accept: (path: string, callback: () => void ) => void
  };
}

interface Window {
  Intl: any;
}
