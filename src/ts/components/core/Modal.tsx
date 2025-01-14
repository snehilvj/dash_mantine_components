import { Modal as MantineModal } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { ModalProps } from "props/modal";
import { StylesApiProps } from "props/styles";
import React, { useEffect, useState } from "react";

interface Props extends ModalProps, StylesApiProps, DashBaseProps {}

/** Modal */
const Modal = (props: Props) => {
    const { children, setProps, opened, ...others } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineModal
            data-dash-is-loading={loading || undefined}
            opened={open}
            onClose={onClose}
            {...others}
        >
            {children}
        </MantineModal>
    );
};

Modal.defaultProps = { opened: false };

export default Modal;
