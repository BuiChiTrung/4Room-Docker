import { CSSProperties, ExtractPropTypes } from 'vue';
export declare type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';
export declare type PopupCloseIconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
declare const popupProps: {
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayStyle: import("vue").PropType<CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    round: BooleanConstructor;
    position: {
        type: import("vue").PropType<PopupPosition>;
        default: PopupPosition;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeable: BooleanConstructor;
    transition: StringConstructor;
    iconPrefix: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    closeIconPosition: {
        type: import("vue").PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
    safeAreaInsetBottom: BooleanConstructor;
};
export declare type PopupProps = ExtractPropTypes<typeof popupProps>;
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayStyle: import("vue").PropType<CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    round: BooleanConstructor;
    position: {
        type: import("vue").PropType<PopupPosition>;
        default: PopupPosition;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeable: BooleanConstructor;
    transition: StringConstructor;
    iconPrefix: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    closeIconPosition: {
        type: import("vue").PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
    safeAreaInsetBottom: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon")[], "open" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    zIndex?: unknown;
    overlay?: unknown;
    duration?: unknown;
    teleport?: unknown;
    lockScroll?: unknown;
    lazyRender?: unknown;
    beforeClose?: unknown;
    overlayStyle?: unknown;
    overlayClass?: unknown;
    transitionAppear?: unknown;
    closeOnClickOverlay?: unknown;
    round?: unknown;
    position?: unknown;
    closeIcon?: unknown;
    closeable?: unknown;
    transition?: unknown;
    iconPrefix?: unknown;
    closeOnPopstate?: unknown;
    closeIconPosition?: unknown;
    safeAreaInsetBottom?: unknown;
} & {
    round: boolean;
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: PopupCloseIconPosition;
} & {
    iconPrefix?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    beforeClose?: import("../utils").Interceptor | undefined;
    overlayStyle?: CSSProperties | undefined;
    overlayClass?: unknown;
    transition?: string | undefined;
}> & {
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    "onClick-overlay"?: ((...args: any[]) => any) | undefined;
    "onClick-close-icon"?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: PopupCloseIconPosition;
}>;
export default _default;
