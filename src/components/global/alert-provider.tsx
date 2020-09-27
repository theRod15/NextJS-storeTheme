import { Alert, AlertProps, Snackbar } from '@material-ui/core';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

type AlertItem = {
  id: string;
  message: string;
  open: boolean;
  props?: Partial<AlertProps>;
};

export const AlertContext = React.createContext<{
  addAlert: (message: string, props?: Partial<AlertProps>) => void;
  alerts: AlertItem[];
  removeAlert: (id: string) => void;
}>({
  addAlert: () => {},
  alerts: [],
  removeAlert: () => {},
});

const AlertProvider: React.FC = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const addAlert = (message: string, props?: Partial<AlertProps>) => {
    setAlerts((prevAlerts) => [...prevAlerts, { id: uniqueId(), message, open: true, props }]);
  };

  const removeAlert = (id: string) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) => (alert.id === id ? { ...alert, open: false } : alert)),
    );
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        addAlert,
        alerts,
        removeAlert,
      }}
    >
      {children}
      {alerts.map((alert) => (
        <Snackbar
          key={alert.id}
          open={alert.open}
          autoHideDuration={5000}
          onClose={() => removeAlert(alert.id)}
        >
          <Alert onClose={() => removeAlert(alert.id)} {...alert.props}>
            {alert.message}
          </Alert>
        </Snackbar>
      ))}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
