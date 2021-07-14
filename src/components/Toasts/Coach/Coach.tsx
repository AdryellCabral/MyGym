interface ToastProps {
  name: string;
  closeToast: any;
  toastProps: any;
}

export const ToastCoach = ({ name, closeToast, toastProps }: ToastProps) => {
  return (
    <p>
      <span id="name">{name}</span > agora é um Coach da sua academia!
    </p>
  );
};
