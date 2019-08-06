interface MessageStore {
  has: (signal: string) => Promise<boolean>;
  get: (id: string) => Promise<string | undefined>;
  set: (id: string, value: string) => Promise<void>;
}

export default MessageStore;
