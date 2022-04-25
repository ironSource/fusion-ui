import * as Vue from 'vue';
import {Component} from 'vue';

export function renderNativeElement({events, component}: {events: {[eventName: string]: Function}; component: Component}) {
    const elementsMapping: any = {};
    return (args: {id: string; payload: any}) => {
        const {id, payload} = args;
        if (!elementsMapping[id] || elementsMapping[id].payload !== payload) {
            const host = document.createElement('div');
            host.setAttribute('id', `container_${id}`);
            document.body.appendChild(host);
            const componentParams = {
                ...payload,
                ...events
            };
            // @ts-ignore
            const app = Vue.createApp({
                render() {
                    // @ts-ignore
                    return Vue.h(component, componentParams);
                }
            });
            app.mount(`#container_${id}`);
            elementsMapping[id] = {elem: app._container, payload};
        }
        return elementsMapping[id].elem;
    };
}
