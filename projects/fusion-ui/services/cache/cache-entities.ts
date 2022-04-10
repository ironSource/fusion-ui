export interface CacheOptions {
    isLocalEnv: boolean;
    persistentKeyPrefix: string;
}

export interface CacheEntities {
    persistent?: boolean;
}

export enum CacheType {
    /**
     * No Cache
     */
    None = 0,
    /**
     * Data stored in Javascript object
     * Will be cleared when page is been refreshed
     */
    Application = 1,
    /**
     * Data stored in browser session storage
     * https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage
     */
    SessionStorage = 2,
    /**
     * Data stored in browser local storage
     * Will be cleared when application says or user cleared manually.
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
     */
    LocalStorage = 3
}
