'use strict';

// @ts-ignore
import React from 'react';

class FusionBase extends React.Component {
    componentName: any;
    eventListeners: any;
    node: any;
    props: any;
    refs: any;

    constructor(props: any, componentName: string) {
        super(props);
        this.componentName = componentName;
        this.eventListeners = {};
        this.node = null;
    }

    componentDidMount() {
        this.node = document.createElement(this.componentName);
        this.node.config = {...this.props.config};
        if (this.props.name) {
            this.node.setAttribute('name', this.props.name);
        }
        const element = (this.refs.element as Element);
        element.appendChild(this.node);
        if (this.props.children) {
            this.node.appendChild(element.children[0]);
        }
        Object.entries(this.props).forEach(([key, value]) => {
            if (typeof value === 'function') {
                this.node.addEventListener(key, this.handleEventListener(key, value));
            }
        });
    }

    componentWillUnmount() {
        Object.keys(this.eventListeners).forEach(key => {
            const listener = this.eventListeners[key];
            this.node.removeEventListener(key, listener);
        });
    }

    componentDidUpdate(prevProps: any) {
        let shouldUpdate = false;
        if (prevProps.config) {
            Object.entries(prevProps.config).forEach(([key, value]) => {
                if (value !== this.props.config[key]) {
                    shouldUpdate = true;
                }
            });
        }
        if (shouldUpdate) {
            this.node.config = {...this.props.config};
        }
    }

    handleEventListener(key: string, func: any) {
        const eventListener = (e: any) => func(e.detail);
        this.eventListeners[key] = eventListener;
        return eventListener;
    }

    render() {
        return React.createElement(
            `${this.componentName}-react`, {ref: 'element'}, [this.props.children]
        );
    }
}

<%  for (let component of components) {%>
    export class Fusion<%= classify(component.component) %> extends FusionBase {
        constructor(props: any) {
            super(props, '<%= component.name %>');
        }
    }
    <% } %>
