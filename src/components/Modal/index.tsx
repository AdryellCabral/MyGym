import { Modal } from "@material-ui/core";

interface SimpleModalProps {
  children: JSX.Element;
  open: boolean;
  handleClose: () => void;
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
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
}
