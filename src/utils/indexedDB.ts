import { useState, useEffect } from "react";
import Dexie, { Table } from "dexie";

// Define the database schema
interface KeyValuePair {
  key: string;
  value: any;
}

// Create the database class
class AppDatabase extends Dexie {
  keyValueStore!: Table<KeyValuePair>;

  constructor() {
    super("AppDatabase");
  }
}

const db = new AppDatabase();
db.version(1).stores({
  keyValueStore: "key, value"
});

export const useIndexedDB = <T,>(
  keyName: string, 
  defaultValue: T
): [T, (value: T) => Promise<void>, boolean] => {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial value from IndexedDB
  useEffect(() => {
    const loadValue = async () => {
      try {
        const item = await db.keyValueStore.get(keyName);
        if (item) {
          setStoredValue(item.value as T);
        }
      } catch (error) {
        console.error("Error loading from IndexedDB:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadValue();
  }, [keyName]);

  const setValue = async (newValue: T): Promise<void> => {
    try {
      await db.keyValueStore.put({ key: keyName, value: newValue });
      setStoredValue(newValue);
    } catch (error) {
      console.error("Error saving to IndexedDB:", error);
      throw error; // Let the caller handle the error
    }
  };

  return [storedValue, setValue, isLoading];
};
