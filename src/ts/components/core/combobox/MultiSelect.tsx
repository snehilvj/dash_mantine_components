import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { useDebouncedValue, useDidUpdate, useFocusWithin } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { __CloseButtonProps } from "props/button";
import { ComboboxLikeProps } from "props/combobox";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { __BaseInputProps } from "props/input";
import { ScrollAreaProps } from "props/scrollarea";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { filterSelected } from "../../../utils/combobox";

interface Props
    extends BoxProps,
        __BaseInputProps,
        ComboboxLikeProps,
        StylesApiProps,
        DashBaseProps,
        DebounceProps,
        PersistenceProps {
    /** Controlled component value */
    value?: string[];
    /** Controlled search value */
    searchValue?: string;
    /** Maximum number of values, `Infinity` by default */
    maxValues?: number;
    /** Determines whether the select should be searchable, `false` by default */
    searchable?: boolean;
    /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
    nothingFoundMessage?: React.ReactNode;
    /** Determines whether check icon should be displayed near the selected option label, `true` by default */
    withCheckIcon?: boolean;
    /** Position of the check icon relative to the option label, `'left'` by default */
    checkIconPosition?: "left" | "right";
    /** Determines whether picked options should be removed from the options list, `false` by default */
    hidePickedOptions?: boolean;
    /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
    clearable?: boolean;
    /** Props passed down to the clear button */
    clearButtonProps?: __CloseButtonProps;
    /** Props passed down to the hidden input */
    hiddenInputProps?: object;
    /** Divider used to separate values in the hidden input `value` attribute, `','` by default */
    hiddenInputValuesDivider?: string;
    /** Props passed down to the underlying `ScrollArea` component in the dropdown */
    scrollAreaProps?: ScrollAreaProps;
}

/** MultiSelect */
const MultiSelect = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        debounce,
        n_submit,
        n_blur,
        data,
        value,
        ...others
    } = props;

    const [selected, setSelected] = useState(value);
    const [options, setOptions] = useState(data);
    const { ref, focused } = useFocusWithin();

    const debounceValue = typeof debounce === "number" ? debounce : 0;
    const [debounced] = useDebouncedValue(selected, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === "number" || debounce === false) {
            setProps({ value: debounced });
        }

        // Update the value prop if an item is removed by clicking the "x" on the pill,
        // even if the input is not focused at the time
        if (!focused && debounce === true) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: selected }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: selected }),
        });
    };

    const handleSearchChange = (newSearchVal) => {
        setProps({ searchValue: newSearchVal });
    };

    useDidUpdate(() => {
        setOptions(data);
        const filteredSelected = filterSelected(data, selected);
        setSelected(filteredSelected ?? []);
    }, [data]);

    useDidUpdate(() => {
        setSelected(value ?? []);
    }, [value]);

    useDidUpdate(() => {
        setProps({ data: options });
    }, [options]);

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <div ref={ref}>
            <MantineMultiSelect
                data-dash-is-loading={loading || undefined}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                data={options}
                onChange={setSelected}
                value={selected}
                onSearchChange={handleSearchChange}
                {...others}
            />
        </div>
    );
};

MultiSelect.defaultProps = {
    debounce: false,
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
    n_blur: 0,
    data: [],
    value: [],
};

export default MultiSelect;
