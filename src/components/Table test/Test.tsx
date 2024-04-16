import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  
  Form,
  Input,
 
} from 'antd';
import SelecTeacher from './SelectTeacher';
import { storage } from '../../database/fireBase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const { TextArea } = Input;
const FormDisabledDemo: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleChange = async (e:any) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uniqueName = `${Date.now()}-${image.name}`;
      const storageRef = ref(storage, `images/${uniqueName}`);
      try {
        const imageRef = await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(imageRef.ref);
        setUrl(downloadUrl);
        console.log('Image Uploaded and URL:', downloadUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Tên  Khóa Học">
          <Input />
        </Form.Item>
        <Form.Item label="Tên Thầy Giáo">
          <SelecTeacher />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <div className="flex items-center ">
            <input
              className="invisible absolute top-0 z-[-9999]"
              accept="image/*"
              id="file"
              type="file"
              onChange={handleChange}
            />

            {!url && (
              <label htmlFor="file" className="">
                <p
                  className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                
                >
                  Upload Image
                </p>
              </label>
            )}
            {url && (
              <div>
                <img
                  src={url}
                  alt="Uploaded"
                  className="w-[200px]  rounded-md"
                />
              </div>
            )}
          </div>
        </Form.Item>
        <Form.Item label="Giới Thiệu">
        <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;
