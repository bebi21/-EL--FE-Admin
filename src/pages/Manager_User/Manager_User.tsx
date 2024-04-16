import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableUser from  "../../components/Tables/TableUser"
import Test from '../../components/Table test/Test';

const Manager_User: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
         <TableUser />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Manager_User;
