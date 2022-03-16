type HorizontalPosition = 'left' | 'center' | 'right';
type VertikalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VertikalPosition}`, 'center-center'> | 'center';
}

export const Toast = ({position}: ToastProps) => {
  return(
    <div>Toast Notification Position - {position}</div>
  )
}