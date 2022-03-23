import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Navbar as MantineNavbar } from "@mantine/core";

/**
 * Navbar. For more information, see: https://mantine.dev/core/app-shell/
 */
const Navbar = (props) => {
    const { class_name } = props;

    return (
        <MantineNavbar
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineNavbar>
    );
};

Navbar.displayName = "Navbar";

Navbar.defaultProps = {};

Navbar.propTypes = {
    /**
     *  Navbar content
     */
    children: PropTypes.node,

    /**
     *  Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     *  Changes position to fixed, controlled by AppShell component if rendered inside
     */
    fixed: PropTypes.bool,

    /**
     *  Navbar height
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Set to true to hide breakpoint at hiddenBreakpoint
     */
    hidden: PropTypes.bool,

    /**
     *  Breakpoint at which navbar will be hidden if hidden prop is true
     */
    hiddenBreakpoint: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     *  The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     *  Navbar padding from theme.spacing or number to set padding in px
     */
    padding: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     *  Control top, left, right or bottom position values, controlled by AppShell component if rendered inside
     */
    position: PropTypes.exact({
        top: PropTypes.number,
        left: PropTypes.number,
        bottom: PropTypes.number,
        right: PropTypes.number,
    }),

    /**
     *  Inline style override
     */
    style: PropTypes.object,

    /**
     * Navbar width with breakpoints
     */
    width: PropTypes.object,

    /**
     *  z-index
     */
    zIndex: PropTypes.number,
};

export default Navbar;
