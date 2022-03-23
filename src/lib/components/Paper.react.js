import React from "react";
import PropTypes from "prop-types";
import { Paper as MantinePaper } from "@mantine/core";
import { omit } from "ramda";

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
 */
const Paper = (props) => {
    const { class_name } = props;

    return (
        <MantinePaper
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantinePaper>
    );
};

Paper.displayName = "Paper";

Paper.defaultProps = {};

Paper.propTypes = {
    /**
     * Paper content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property
     */
    shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme
     */
    withBorder: PropTypes.bool,

    /**
     * Margin props
     */
    m: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    my: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mx: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mt: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mb: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    ml: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Margin props
     */
    mr: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    p: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    py: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    px: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pt: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pb: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pl: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

    /**
     * Padding props
     */
    pr: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default Paper;
