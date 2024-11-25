import { AlertProps, SnackbarCloseReason, AlertColor } from '@mui/material';
import { SyntheticEvent } from 'react';

export type ContextAction<T, P> = {
  type: T;
  payload?: P;
};

export type INotifier = {
  show?: boolean;
  message: string;
  severity: AlertColor;
};

export enum INotifierActionKind {
  SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION = 'HIDE_NOTIFICATION',
}

export type INotifierProps = INotifier & {
  close: () => void;
  timeToClose?: number;
};

export interface IReferencedAlertProps extends Omit<AlertProps, 'onClose'> {
  onClose: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
}

export type INotifierAction = ContextAction<INotifierActionKind, INotifier>;
