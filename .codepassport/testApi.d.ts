import testApi from './testApi?raw';

type ValueType = unknown;

interface TestResultBase {
    type: string;
    success: boolean;
}

export interface TestAssertResult extends TestResultBase {
    type: 'assert';
    successMessage?: string;
    failedMessage: string;
}

export interface CallFuncResult extends TestResultBase {
    type: 'callFunc';
    exists: boolean;
    funcName: string;
    params: ValueType[];
}

export interface TestFuncResult extends TestResultBase {
    type: 'func';
    exists: boolean;
    funcName: string;
    params: ValueType[];
    result: ValueType;
    expected: ValueType;
}

export interface TestAsyncFuncResult extends TestResultBase {
    type: 'func';
    exists: boolean;
    funcName: string;
    params: ValueType[];
    result: ValueType;
    expected: ValueType;
}

export interface TestLogResult extends TestResultBase {
    type: 'logs';
    result: string;
    expected: string;
}

export interface TestThrowResult extends TestResultBase {
    type: 'throw';
    exists: boolean;
    funcName: string;
    params: ValueType[];
    errorMessage: string | null;
    expected: string;
}

export interface TestVarResult extends TestResultBase {
    type: 'var';
    varName: string;
    value: ValueType;
    expected: ValueType;
}

export interface TestHTMLResult extends TestResultBase {
    type: 'html';
    el: {
        __isHTMLElement: boolean;
        tag: string;
        className: string;
        id: string;
    };
    value: string;
    expected: string;
}

export interface TestCSSPropertyResult extends TestResultBase {
    type: 'css-property';
    el: {
        __isHTMLElement: boolean;
        tag: string;
        className: string;
        id: string;
    };
    propertyName: string;
    value: string;
    expected: string;
}

export interface TestCSSPropertiesResult extends TestResultBase {
    type: 'css-properties';
    el: {
        __isHTMLElement: boolean;
        tag: string;
        className: string;
    };
    propertyName: string;
    values: string[];
    expected: string;
}

export interface TriggerEventResult extends TestResultBase {
    type: 'triggerEvent';
    eventType: Event['type'];
    newValue?: string;
    el: {
        __isHTMLElement: boolean;
        tag: string;
        className: string;
        id: string;
    };
}

export type TestResult =
    | TestAssertResult
    | CallFuncResult
    | TestFuncResult
    | TestAsyncFuncResult
    | TestLogResult
    | TestThrowResult
    | TestVarResult
    | TriggerEventResult
    | TestHTMLResult
    | TestCSSPropertyResult
    | TestCSSPropertiesResult;
