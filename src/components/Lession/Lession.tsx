import {
    Modal,
    Pagination,
    Radio,
    RadioChangeEvent,
    Table,
    notification,
  } from 'antd';
  import { useEffect, useState } from 'react';
  import publicAxios from '../../database/publicAxios';
  import { CiCirclePlus } from 'react-icons/ci';
  
  import type { NotificationArgsProps } from 'antd';
  import Test from '../Table test/Test';
  import { NavLink } from 'react-router-dom';
  
  /* fake data */
  /*  cần lấy join  bảng  khóa học  và thấy giáo  để lấy thôi tin tên của Thầy ,đổi  tên trường ảnh */
  const brandData: any[] = [
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
   
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
    {
      id: 1,
      title: 'Học Java',
      image:
        'https://topviecit.vn/blog/wp-content/uploads/2021/11/javascript-2.jpeg',
      name: 'Nguyen Duy Quang',
      image_teacher:
        'https://rikkei.edu.vn/wp-content/uploads/2024/01/aquang-1.jpg',
      create_date: '2022-07-01',
      sub_description: 'sadasdasdasdasda',
    },
   
   
  ];
  const Lession = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState<any>();
  
    const [api, contextHolder] = notification.useNotification();
  
    const openNotificationWithIcon = () => {
      api.success({
        message: 'Thành Công',
        description: 'Thay đổi trạng thái thành công',
        duration: 1,
      });
    };
    /* call api  */
    /*  const [brandData,setBrandData] = useState([])
     */
    /* const takeDataInDb  = async () => {
      const data = await publicAxios.get("/takeAllUser")
      setBrandData(data.data)
    }
    useEffect(() => {
      takeDataInDb()
    }, []) */
    const showModal = (item: any) => {
      setStatus(item);
      setIsModalOpen(true);
    };
  
    const handleOk = async () => {
      /*   const data = await publicAxios.put(`/changeStatusUser/${status?.id}`, {
        active: status?.active,
      }); */
      openNotificationWithIcon();
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setStatus('');
      setIsModalOpen(false);
    };
  
    const onChange = (e: RadioChangeEvent) => {
      setStatus({ ...status, active: e.target.value });
    };
  
    /* phân trang */
  
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 3; // số lượng items mỗi trang
  
    // Tạo một state mới để lưu trữ dữ liệu hiển thị trên trang hiện tại
    const [currentBrandData, setCurrentBrandData] = useState<any[]>([]);
  
    // Hàm này sẽ được gọi mỗi khi trang thay đổi
    useEffect(() => {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentBrandData(brandData.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, itemsPerPage]);
  
    // Hàm này sẽ được gọi khi người dùng thay đổi trang
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <>
        {contextHolder}
        <Modal
          maskClosable={false}
          title="Thông Tin Người Dùng"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okType="default"
         width={800}
         style={{left:"150px"}}
        >
         <Test />
        </Modal>
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
       helelo
        </div>
      </>
    );
  };
  
  export default Lession;
  