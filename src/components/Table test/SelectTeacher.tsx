import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [];

/*  fake data 
lấy tất cả các teacher

*/
const data = [
  {
    name: 'Nguyen Duy Quang',
    image: 'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
    id: 1,
  },
  {
    name: 'Nguyen Duy Quang2',
    image: 'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
    id: 2,
  },
  {
    name: 'Nguyen Duy Quang3',
    image: 'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
    id: 3,
  },
  {
    name: 'Nguyen Duy Quang4',
    image: 'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
    id: 4,
  },
];

for (let i = 0; i < data.length; i++) {
  options.push({
    value: data[i].id,
    label: data[i].name,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelecTeacher: React.FC = () => (
  <Select
    maxCount={1}
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Chọn Thầy Giáo"
    onChange={handleChange}
    options={options}
  />
);

export default SelecTeacher;
