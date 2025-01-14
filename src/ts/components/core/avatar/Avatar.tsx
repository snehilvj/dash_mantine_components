import {
    Avatar as MantineAvatar,
    MantineColor,
    MantineGradient,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useMemo } from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`.  Set to "initials" to auto generate color based on `name`  */
    color?: MantineColor  | "initials";
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
    src?: string | null;
    /** Image `alt` attribute, also used as `title` attribute for placeholder */
    alt?: string;
    /** `img` tag attributes */
    imageProps?: object;
    /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
    children?: React.ReactNode;
    /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Name of the user. When src is not set, used to display initials and to generate color when color="initials" is set.  */
    name?: string;
}

/** Use the Avatar component to display user profile image, initials or fallback icon */
const Avatar = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineAvatar
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineAvatar>
    );
};

Avatar.defaultProps = {};

export default Avatar;
