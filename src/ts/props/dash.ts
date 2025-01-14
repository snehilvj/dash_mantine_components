export interface DashBaseProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
    /** Wild card data attributes */
    "data-*"?: string;
    /** Wild card aria attributes */
    "aria-*"?: string;
    /** tab-index */
    tabIndex?: number;
}

export interface PersistenceProps {
    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence?: boolean | string | number;
    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props?: Array<string>;
    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type?: "local" | "session" | "memory";
}

export interface DebounceProps {
    /** An integer that represents the number of times that this element has lost focus */
    n_blur?: number;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** (boolean | number; default False): If True, changes to input will be sent back to the Dash server only on enter or when losing focus. If it's False, it will send the value back on every change. If a number, it will not send anything back to the Dash server until the user has stopped typing for that number of milliseconds. */
    debounce?: boolean | number;
}
