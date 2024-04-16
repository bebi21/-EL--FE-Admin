import React from 'react';
import {
  BorderBottomOutlined,
  BorderTopOutlined,
 
} from '@ant-design/icons';
import { Alert, Button,  notification, Space } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

const Notification: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Chỉnh Sửa Thành Công`,
      description:
     <><Alert
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      /></>,
      placement,
    duration: 2,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
      </Space>
    </>
  );
};

export default Notification;