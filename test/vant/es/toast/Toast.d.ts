import { PropType, CSSProperties, ExtractPropTypes } from 'vue';
import { LoadingType } from '../loading';
import type { ToastType, ToastPosition } from './types';
declare const toastProps: {
    icon: StringConstructor;
    show: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: ToastType;
    };
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: ToastPosition;
    };
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    transition: {
        type: PropType<string>;
        default: string;
    };
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
};
export declare type ToastProps = ExtractPropTypes<typeof toastProps>;
declare const _default: import("vue").DefineComponent<{
    icon: StringConstructor;
    show: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: ToastType;
    };
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: ToastPosition;
    };
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    transition: {
        type: PropType<string>;
        default: string;
    };
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    icon?: unknown;
    show?: unknown;
    type?: unknown;
    overlay?: unknown;
    message?: unknown;
    iconSize?: unknown;
    duration?: unknown;
    position?: unknown;
    className?: unknown;
    iconPrefix?: unknown;
    transition?: unknown;
    loadingType?: unknown;
    forbidClick?: unknown;
    overlayClass?: unknown;
    overlayStyle?: unknown;
    closeOnClick?: unknown;
    closeOnClickOverlay?: unknown;
} & {
    type: ToastType;
    overlay: boolean;
    show: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    position: ToastPosition;
    transition: string;
    forbidClick: boolean;
    closeOnClick: boolean;
} & {
    message?: string | number | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
    loadingType?: LoadingType | undefined;
    overlayStyle?: CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    iconSize?: string | number | undefined;
}> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    type: ToastType;
    overlay: boolean;
    show: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    position: ToastPosition;
    transition: string;
    forbidClick: boolean;
    closeOnClick: boolean;
}>;
export default _default;
