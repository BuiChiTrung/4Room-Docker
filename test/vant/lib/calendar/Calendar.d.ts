import { PropType, ExtractPropTypes } from 'vue';
import { PopupPosition } from '../popup';
import type { CalendarType, CalendarDayItem } from './types';
declare const calendarProps: {
    show: BooleanConstructor;
    type: {
        type: PropType<CalendarType>;
        default: CalendarType;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: PropType<PopupPosition>;
        default: PopupPosition;
    };
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
};
export declare type CalendarProps = ExtractPropTypes<typeof calendarProps>;
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    type: {
        type: PropType<CalendarType>;
        default: CalendarType;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: PropType<PopupPosition>;
        default: PopupPosition;
    };
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "confirm" | "click-subtitle" | "unselect" | "month-show" | "over-range")[], "select" | "update:show" | "confirm" | "click-subtitle" | "unselect" | "month-show" | "over-range", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    type?: unknown;
    title?: unknown;
    color?: unknown;
    round?: unknown;
    readonly?: unknown;
    poppable?: unknown;
    maxRange?: unknown;
    position?: unknown;
    teleport?: unknown;
    showMark?: unknown;
    showTitle?: unknown;
    formatter?: unknown;
    rowHeight?: unknown;
    confirmText?: unknown;
    rangePrompt?: unknown;
    lazyRender?: unknown;
    showConfirm?: unknown;
    defaultDate?: unknown;
    allowSameDay?: unknown;
    showSubtitle?: unknown;
    closeOnPopstate?: unknown;
    showRangePrompt?: unknown;
    confirmDisabledText?: unknown;
    closeOnClickOverlay?: unknown;
    safeAreaInsetBottom?: unknown;
    minDate?: unknown;
    maxDate?: unknown;
    firstDayOfWeek?: unknown;
} & {
    type: CalendarType;
    round: boolean;
    readonly: boolean;
    safeAreaInsetBottom: boolean;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    position: PopupPosition;
    closeOnPopstate: boolean;
    minDate: Date;
    maxDate: Date;
    poppable: boolean;
    maxRange: string | number;
    showMark: boolean;
    showTitle: boolean;
    showConfirm: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showRangePrompt: boolean;
    firstDayOfWeek: string | number;
} & {
    title?: string | undefined;
    color?: string | undefined;
    formatter?: ((item: CalendarDayItem) => CalendarDayItem) | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    rowHeight?: string | number | undefined;
    confirmText?: string | undefined;
    rangePrompt?: string | undefined;
    defaultDate?: Date | Date[] | null | undefined;
    confirmDisabledText?: string | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onClick-subtitle"?: ((...args: any[]) => any) | undefined;
    onUnselect?: ((...args: any[]) => any) | undefined;
    "onMonth-show"?: ((...args: any[]) => any) | undefined;
    "onOver-range"?: ((...args: any[]) => any) | undefined;
}, {
    type: CalendarType;
    round: boolean;
    readonly: boolean;
    safeAreaInsetBottom: boolean;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    position: PopupPosition;
    closeOnPopstate: boolean;
    minDate: Date;
    maxDate: Date;
    poppable: boolean;
    maxRange: string | number;
    showMark: boolean;
    showTitle: boolean;
    showConfirm: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showRangePrompt: boolean;
    firstDayOfWeek: string | number;
}>;
export default _default;
