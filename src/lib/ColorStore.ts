class ColorStore {
  private static instance: ColorStore;

  private constructor() {}

  public static getInstance(): ColorStore {
    if (!ColorStore.instance) {
      ColorStore.instance = new ColorStore();
    }

    return ColorStore.instance;
  }
}

export default ColorStore;
