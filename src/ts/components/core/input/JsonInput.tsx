import { JsonInput as MantineJsonInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { TextareaProps } from "props/text";
import React, { useState } from "react";

interface Props extends TextareaProps, DashBaseProps, DebounceProps, PersistenceProps {
    /** Value for controlled component */
    value?: string;
    /** Determines whether the value should be formatted on blur, `false` by default */
    formatOnBlur?: boolean;
    /** Error message displayed when value is not valid JSON */
    validationError?: React.ReactNode;
    /** (string; default "off") Enables the browser to attempt autocompletion based on user history.  For more information, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete  */
    autoComplete?: string;
}

/** JsonInput */
const JsonInput = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        value,
        n_submit,
        n_blur,
        debounce,
        ...others
    } = props;

    const [val, setVal] = useState(value);
    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(val, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: val }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: val })
        });
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineJsonInput
            data-dash-is-loading={loading || undefined}
            onChange={setVal}
            value={val}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            {...others}
        />
    );
};

JsonInput.defaultProps = {
    debounce: false,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
    n_blur:0,
    autoComplete: "off"
};

export default JsonInput;
