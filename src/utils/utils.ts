export class Utils {
    static SetSessionStorage(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

    static GetSessionStorage(key: string) {
        if(typeof window !== 'undefined') {
            const item = sessionStorage.getItem(key);
            return item;
        }
    }

    static RemoveSessionStorage(key: string) {
        sessionStorage.removeItem(key);
    }

    static ClearSessionStorage() {
        sessionStorage.clear();
    }
}