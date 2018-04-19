/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AttributeBasicRoot {

    }
  }

  interface HTMLAttributeBasicRootElement extends StencilComponents.AttributeBasicRoot, HTMLStencilElement {}

  var HTMLAttributeBasicRootElement: {
    prototype: HTMLAttributeBasicRootElement;
    new (): HTMLAttributeBasicRootElement;
  };
  interface HTMLElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
  }
  interface ElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'attribute-basic-root': JSXElements.AttributeBasicRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AttributeBasicRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AttributeBasic {
      'customAttr': string;
      'multiWord': string;
      'single': string;
    }
  }

  interface HTMLAttributeBasicElement extends StencilComponents.AttributeBasic, HTMLStencilElement {}

  var HTMLAttributeBasicElement: {
    prototype: HTMLAttributeBasicElement;
    new (): HTMLAttributeBasicElement;
  };
  interface HTMLElementTagNameMap {
    'attribute-basic': HTMLAttributeBasicElement;
  }
  interface ElementTagNameMap {
    'attribute-basic': HTMLAttributeBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'attribute-basic': JSXElements.AttributeBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface AttributeBasicAttributes extends HTMLAttributes {
      'customAttr'?: string;
      'multiWord'?: string;
      'single'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ConditionalBasic {

    }
  }

  interface HTMLConditionalBasicElement extends StencilComponents.ConditionalBasic, HTMLStencilElement {}

  var HTMLConditionalBasicElement: {
    prototype: HTMLConditionalBasicElement;
    new (): HTMLConditionalBasicElement;
  };
  interface HTMLElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  interface ElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'conditional-basic': JSXElements.ConditionalBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface ConditionalBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicA {

    }
  }

  interface HTMLLifecycleBasicAElement extends StencilComponents.LifecycleBasicA, HTMLStencilElement {}

  var HTMLLifecycleBasicAElement: {
    prototype: HTMLLifecycleBasicAElement;
    new (): HTMLLifecycleBasicAElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-a': JSXElements.LifecycleBasicAAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicAAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicB {
      'value': string;
    }
  }

  interface HTMLLifecycleBasicBElement extends StencilComponents.LifecycleBasicB, HTMLStencilElement {}

  var HTMLLifecycleBasicBElement: {
    prototype: HTMLLifecycleBasicBElement;
    new (): HTMLLifecycleBasicBElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-b': JSXElements.LifecycleBasicBAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicBAttributes extends HTMLAttributes {
      'onLifecycleLoad'?: (event: CustomEvent) => void;
      'onLifecycleUpdate'?: (event: CustomEvent) => void;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicC {
      'value': string;
    }
  }

  interface HTMLLifecycleBasicCElement extends StencilComponents.LifecycleBasicC, HTMLStencilElement {}

  var HTMLLifecycleBasicCElement: {
    prototype: HTMLLifecycleBasicCElement;
    new (): HTMLLifecycleBasicCElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-c': JSXElements.LifecycleBasicCAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicCAttributes extends HTMLAttributes {
      'onLifecycleLoad'?: (event: CustomEvent) => void;
      'onLifecycleUpdate'?: (event: CustomEvent) => void;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotBasicRoot {

    }
  }

  interface HTMLSlotBasicRootElement extends StencilComponents.SlotBasicRoot, HTMLStencilElement {}

  var HTMLSlotBasicRootElement: {
    prototype: HTMLSlotBasicRootElement;
    new (): HTMLSlotBasicRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic-root': HTMLSlotBasicRootElement;
  }
  interface ElementTagNameMap {
    'slot-basic-root': HTMLSlotBasicRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic-root': JSXElements.SlotBasicRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotBasic {

    }
  }

  interface HTMLSlotBasicElement extends StencilComponents.SlotBasic, HTMLStencilElement {}

  var HTMLSlotBasicElement: {
    prototype: HTMLSlotBasicElement;
    new (): HTMLSlotBasicElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  interface ElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic': JSXElements.SlotBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotLightDomRoot {

    }
  }

  interface HTMLSlotLightDomRootElement extends StencilComponents.SlotLightDomRoot, HTMLStencilElement {}

  var HTMLSlotLightDomRootElement: {
    prototype: HTMLSlotLightDomRootElement;
    new (): HTMLSlotLightDomRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
  }
  interface ElementTagNameMap {
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-light-dom-root': JSXElements.SlotLightDomRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotLightDomRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotLightDomContent {

    }
  }

  interface HTMLSlotLightDomContentElement extends StencilComponents.SlotLightDomContent, HTMLStencilElement {}

  var HTMLSlotLightDomContentElement: {
    prototype: HTMLSlotLightDomContentElement;
    new (): HTMLSlotLightDomContentElement;
  };
  interface HTMLElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  interface ElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-light-dom-content': JSXElements.SlotLightDomContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotLightDomContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SvgAttr {

    }
  }

  interface HTMLSvgAttrElement extends StencilComponents.SvgAttr, HTMLStencilElement {}

  var HTMLSvgAttrElement: {
    prototype: HTMLSvgAttrElement;
    new (): HTMLSvgAttrElement;
  };
  interface HTMLElementTagNameMap {
    'svg-attr': HTMLSvgAttrElement;
  }
  interface ElementTagNameMap {
    'svg-attr': HTMLSvgAttrElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'svg-attr': JSXElements.SvgAttrAttributes;
    }
  }
  namespace JSXElements {
    export interface SvgAttrAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SvgClass {

    }
  }

  interface HTMLSvgClassElement extends StencilComponents.SvgClass, HTMLStencilElement {}

  var HTMLSvgClassElement: {
    prototype: HTMLSvgClassElement;
    new (): HTMLSvgClassElement;
  };
  interface HTMLElementTagNameMap {
    'svg-class': HTMLSvgClassElement;
  }
  interface ElementTagNameMap {
    'svg-class': HTMLSvgClassElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'svg-class': JSXElements.SvgClassAttributes;
    }
  }
  namespace JSXElements {
    export interface SvgClassAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }