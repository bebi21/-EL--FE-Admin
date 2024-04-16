import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Test from '../../components/Table test/Test';
import TableCourse from '../../components/Tables/TableCourse';

const Course: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mt-2 grid grid-cols-12  md:mt-4  2xl:mt-5 ">
        <div className="col-span-12 xl:col-span-12">
         <TableCourse />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Course;
