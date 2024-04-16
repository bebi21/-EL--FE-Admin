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
const TableCourse = () => {
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
        <div className="flex justify-between items-center">
          {' '}
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Quản Lý Khóa Học
          </h4>
          <div className="mb-6">
            <button className=" flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              <CiCirclePlus />
              Thêm Khóa Học
            </button>
          </div>
        </div>
        <div className="flex flex-col h-[68vh] relative ">
          <div className="py-[10px] grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
           {/*  <div className="p-1  text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                STT
              </h5>
            </div> */}
            <div className="p-1 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Tên Khóa Học
              </h5>
            </div>
            <div className="p-1 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Thầy Giáo
              </h5>
            </div>
            <div className="hidden p-1 text-center sm:block">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Ảnh
              </h5>
            </div>
            <div className="hidden p-1 text-center sm:block">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Ngày Khởi Tạo
              </h5>
            </div>
            <div className="hidden p-1 text-center sm:block">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Chức năng
              </h5>
            </div>
            <div className="hidden p-1 text-center sm:block">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                 Nội  Dung
              </h5>
            </div>
          </div>

          {currentBrandData.length > 0 &&
            currentBrandData.map((brand, key) => (
              <div
                className={
                  'grid grid-cols-3 sm:grid-cols-6 text-[14px] hover:bg-slate-50'
                }
                key={key}
              >
               {/*  <div className="flex justify-center items-center p-1 ">
                  <p className="hidden text-black  dark:text-white sm:block">
                    {key + 1}
                  </p>
                </div> */}
                <div className="flex justify-center items-center p-2.5 mr-[27px]">
                  <p className="hidden text-black  dark:text-white sm:block">
                    {brand.title}
                  </p>
                </div>
                <div className="flex items-center justify-center p-2.5">
                  <p className="text-black dark:text-white font-bold">
                    {brand.name}
                  </p>
                </div>
                <div className="flex items-center justify-center p-2.5">
                  <div>
                    <img src={brand.image} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-meta-3">{brand.create_date}</p>
                </div>

                <div className="  flex items-center justify-start ml-[40px]">
                  <p
                    onClick={() => showModal(brand)}
                    className="text-black cursor-pointer px-[20px] py-[7px] rounded-md hover:bg-slate-500 hover:text-white bg-slate-200"
                  >
                    Chỉnh Sửa
                  </p>
                </div>
                <div className="  flex items-center justify-start ml-[40px]">
                  <NavLink
                    to={`/course-detail`}
                    className="text-black cursor-pointer px-[20px] py-[7px] rounded-md hover:bg-slate-500 hover:text-white bg-slate-200"
                  >
                   Xem Chi Tiết
                  </NavLink>
                </div>
              </div>
            ))}
          <div className="absolute flex justify-center left-[35%] bottom-[20px]">
            <Pagination
              current={currentPage}
              onChange={handlePageChange}
              pageSize={itemsPerPage}
              total={40}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCourse;
