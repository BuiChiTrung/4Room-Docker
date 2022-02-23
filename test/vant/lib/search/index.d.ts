import { SearchProps } from './Search';
export declare const Search: import("../utils").WithInstall<import("vue").DefineComponent<{
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: import("vue").PropType<(value: string) => string>;
    clearIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: import("vue").PropType<import("..").FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    clearTrigger: {
        type: import("vue").PropType<import("..").FieldClearTrigger>;
        default: import("..").FieldClearTrigger;
    };
    formatTrigger: {
        type: import("vue").PropType<import("..").FieldFormatTrigger>;
        default: import("..").FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
} & {
    label: StringConstructor;
    shape: {
        type: import("vue").PropType<import("./types").SearchShape>;
        default: import("./types").SearchShape;
    };
    leftIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: true;
    };
    actionText: StringConstructor;
    background: StringConstructor;
    showAction: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "update:modelValue" | "cancel")[], "search" | "update:modelValue" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    id?: unknown;
    name?: unknown;
    leftIcon?: unknown;
    rightIcon?: unknown;
    autofocus?: unknown;
    clearable?: unknown;
    maxlength?: unknown;
    formatter?: unknown;
    clearIcon?: unknown;
    modelValue?: unknown;
    inputAlign?: unknown;
    placeholder?: unknown;
    autocomplete?: unknown;
    errorMessage?: unknown;
    clearTrigger?: unknown;
    formatTrigger?: unknown;
    error?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    label?: unknown;
    shape?: unknown;
    actionText?: unknown;
    background?: unknown;
    showAction?: unknown;
} & {
    autofocus: boolean;
    disabled: boolean;
    shape: import("./types").SearchShape;
    leftIcon: string;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: import("..").FieldClearTrigger;
    formatTrigger: import("..").FieldFormatTrigger;
    error: boolean;
    readonly: boolean;
    showAction: boolean;
} & {
    name?: string | undefined;
    label?: string | undefined;
    autocomplete?: string | undefined;
    id?: string | undefined;
    rightIcon?: string | undefined;
    maxlength?: string | number | undefined;
    formatter?: ((value: string) => string) | undefined;
    inputAlign?: import("..").FieldTextAlign | undefined;
    placeholder?: string | undefined;
    errorMessage?: string | undefined;
    background?: string | undefined;
    actionText?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    autofocus: boolean;
    disabled: boolean;
    shape: import("./types").SearchShape;
    leftIcon: string;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: import("..").FieldClearTrigger;
    formatTrigger: import("..").FieldFormatTrigger;
    error: boolean;
    readonly: boolean;
    showAction: boolean;
}>>;
export default Search;
export type { SearchProps };
export type { SearchShape, SearchInstance } from './types';
