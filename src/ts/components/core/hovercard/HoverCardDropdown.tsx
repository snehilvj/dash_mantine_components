import { HoverCard } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** HoverCardDropdown */
const HoverCardDropdown = (props: Props) => {
    const { children, setProps,  ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <HoverCard.Dropdown
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </HoverCard.Dropdown>
    );
};

HoverCardDropdown.defaultProps = {};

export default HoverCardDropdown;
