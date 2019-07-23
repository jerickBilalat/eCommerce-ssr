import React from 'react';
import { toast } from 'react-toastify';

export default function withPageNotification(Component) {
  return class extends React.Component {
    notify = (status, message) => {
      switch (status) {
        case 'success':
          return toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          });
        case 'error':
          return toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
          });
        case 'info':
          return toast.info(message, {
            position: toast.POSITION.BOTTOM_LEFT
          });
        case 'warn':
          return toast.warn(message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        default:
          return toast('Default Notification !');
      }
    };

    render() {
      return <Component notify={this.notify} {...this.props} />;
    }
  };
}
