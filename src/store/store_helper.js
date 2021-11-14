export function register_store(store, STORE_KEY) {
  if (!(STORE_KEY in store._modules.root._children)) {
    store.registerModule(STORE_KEY, store)
  }
}