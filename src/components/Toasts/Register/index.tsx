interface ToastProps {
  name: string;
  closeToast: any;
  toastProps: any;
  children: React.ReactNode;
}

export const ToastRegister = ({
  name,
  children,
  closeToast,
  toastProps,
}: ToastProps) => {
  return (
    <>
      <span id="name">{name}</span>
      <p>{children}</p>
    </>
  );
};
