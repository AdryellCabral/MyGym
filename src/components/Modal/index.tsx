import { Modal } from "@material-ui/core";

interface SimpleModalProps {
  children: JSX.Element;
  open: boolean;
  handleClose: (modal: boolean) => void;
}

export default function SimpleModal({
  children,
  open,
  handleClose,
}: SimpleModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose(open)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
}
