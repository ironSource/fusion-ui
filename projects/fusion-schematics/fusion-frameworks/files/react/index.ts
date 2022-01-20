import {Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState, createElement} from 'react';

interface FusionElement extends HTMLElement {
    config: any;
}

type eventCallback = (e: CustomEvent) => any;
interface eventCallbacks {
    [eventName: string]: eventCallback
}

const addEventListeners = ({props, eventListeners, node}) => {
    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'function') {
            if (eventListeners.current[key]) {
                // @ts-ignore
                node.current.removeEventListener(key, eventListeners.current[key]);
                delete eventListeners.current[key];
            }
            const eventListener = handleEventListener({value});
            // @ts-ignore
            eventListeners.current = Object.assign(Object.assign({}, eventListeners.current), {[key]: eventListener});
            node.current.addEventListener(key, eventListener);
        }
    });
};

const onComponentInit = ({node, props, ref}: {
    node: MutableRefObject<FusionElement>;
    props: any;
    ref: MutableRefObject<HTMLElement>;
}) => {
    node.current.config = {...(props.config || {})};
    if (props?.name) {
        node.current.setAttribute('name', props.name);
    }
    ref.current.appendChild(node.current);
    if (props?.children) {
        node.current.appendChild(ref.current.children[0]);
    }
}

const onComponentUpdate = ({node, props, oldProps, eventListeners}: {
    node: MutableRefObject<FusionElement>;
    props: any, oldProps: MutableRefObject<any>;
    eventListeners: MutableRefObject<eventCallbacks>;
}): void => {
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

    addEventListeners({props, eventListeners, node});
}

const createFusionElement = ({ref, props, componentName}: { ref: MutableRefObject<HTMLElement>; props: any; componentName: string; }) => {
    return createElement(
        `${componentName}-react`, {ref: ref}, [props.children]
    );
}

const handleEventListener = ({value}: {value: Function}): eventCallback => {
    return (e: CustomEvent) => {
        return value(e.detail);
    };
}

<%  for (let component of components) {%>
    export function Fusion<%= classify(component.component) %>(props: any) {
        const componentName = '<%= component.name %>';
        const eventListeners = useRef({});
        // @ts-ignore
        const ref: MutableRefObject<HTMLElement> = useRef(null);
        const oldProps: MutableRefObject<any> = useRef(props);
        // @ts-ignore
        const node: MutableRefObject<FusionElement> = useRef(document.createElement(componentName));

        useEffect(() => {
            onComponentInit({node, props, ref});
            return () => {
                Object.keys(eventListeners.current).forEach(key => {
                    const listener = eventListeners.current[key];
                    // @ts-ignore
                    node.current.removeEventListener(key, listener);
                });
            };
        }, []);


        useEffect(() => {
            onComponentUpdate({node, props, oldProps, eventListeners});
            oldProps.current = props;
        });

        return createFusionElement({componentName, ref, props});
    }
    <% } %>
