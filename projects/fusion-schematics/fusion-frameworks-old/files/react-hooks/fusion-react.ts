import {Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState, createElement} from 'react';

interface FusionElement extends HTMLElement {
    config: any;
}

type eventCallback = (e: CustomEvent) => any;
interface eventCallbacks {
    [eventName: string]: eventCallback
};

const onComponentInit = ({node, props, ref}: { node: MutableRefObject<FusionElement>; props: any; ref: MutableRefObject<HTMLElement> }) => {
    node.current.config = {...(props.config || {})};
    if (props?.name) {
        node.current.setAttribute('name', props.name);
    }
    ref.current.appendChild(node.current);
    if (props?.children) {
        node.current.appendChild(ref.current.children[0]);
    }
}

const onComponentUpdate = ({node, props, triggerEventListeners, oldProps, eventListeners, setEventListeners}: {
    node: MutableRefObject<FusionElement>,
    props: any,
    triggerEventListeners: MutableRefObject<boolean>,
    oldProps: MutableRefObject<any>,
    eventListeners: eventCallbacks,
    setEventListeners: Dispatch<SetStateAction<eventCallbacks>>
}): void => {

    if (!triggerEventListeners.current) {
        triggerEventListeners.current = true;
        return;
    }

    let shouldUpdate = false;
    if (props.config) {
        Object.entries(props.config).forEach(([key, value]) => {
            if (value !== oldProps.current.config[key]) {
                shouldUpdate = true;
            }
        });
    }
    if (shouldUpdate) {
        node.current.config = {...props.config};
    }

    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'function') {
            if (eventListeners[key]) {
                // @ts-ignore
                node.current.removeEventListener(key, eventListeners[key]);
                delete eventListeners[key];
            }
            // @ts-ignore
            node.current.addEventListener(key, handleEventListener({triggerEventListeners, eventListeners, setEventListeners, key, value}));
        }
    });
}

const createFusionElement = ({ref, props, componentName}: { ref: MutableRefObject<HTMLElement>; props: any; componentName: string; }) => {
    return createElement(
        `${componentName}-react`, {ref: ref}, [props.children]
    );
}

const handleEventListener = ({triggerEventListeners, eventListeners, setEventListeners, key, value}: {
    triggerEventListeners: MutableRefObject<boolean>,
    eventListeners: eventCallbacks,
    setEventListeners: Dispatch<SetStateAction<eventCallbacks>>,
    key: string;
    value: Function;
}): eventCallback => {
    const eventListener = (e: CustomEvent) => {
        return value(e.detail);
    };
    triggerEventListeners.current = false;
    setEventListeners({...eventListeners, [key]: eventListener});
    return eventListener;
}

<%  for (let component of components) {%>
    export function Fusion<%= classify(component.component) %>(props: any) {
        const componentName = '<%= component.name %>';
        const [eventListeners, setEventListeners]: [eventCallbacks, Dispatch<SetStateAction<eventCallbacks>>] = useState({});
        const triggerEventListeners: MutableRefObject<boolean> = useRef(true);
        // @ts-ignore
        const ref: MutableRefObject<HTMLElement> = useRef(null);
        const oldProps: MutableRefObject<any> = useRef(props);
        // @ts-ignore
        const node: MutableRefObject<FusionElement> = useRef(document.createElement(componentName));

        useEffect(() => {
            onComponentInit({node, props, ref});
        }, []);


        useEffect(() => {
            onComponentUpdate({node, props, triggerEventListeners, oldProps, eventListeners, setEventListeners});
        });

        return createFusionElement({componentName, ref, props});
    }
    <% } %>
