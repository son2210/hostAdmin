import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import { Button } from 'components/Button/Button';
import { GroupAction, ContentForm } from './AddUser.styles';
import ElementSelect from 'components/FormElements/ElementSelect/ElementSelect';
import { initFormAdd, schema } from 'features/user/helpers/user.helpers';
import { getMajors } from 'features/majors/redux/majors.slice';
import { MapOptions } from 'helpers/convert/map-options';
import { getCampuses } from 'features/campuses/redux/campuses.slice';
import { postUsers } from 'features/user/redux/user.slice';
const Adduser = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { listMajors, listCampuses, messenger } = useSelector((state) => ({
    listMajors: state.majors.listMajors,
    listCampuses: state.campuses.listCampuses,
    messenger: state.user.messenger,
  }));
  const listMajorsOption = MapOptions(listMajors);
  const listCampusesOption = MapOptions(listCampuses);
  const [isLoading, setLoading] = useState(false);
  const getAll = useCallback(() => {
    dispatch(getCampuses());
    dispatch(getMajors());
  }, [dispatch]);
  useEffect(() => {
    getAll();
  }, [dispatch, getAll]);
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initFormAdd}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          const response = await dispatch(postUsers(values));
          if (postUsers.fulfilled.match(response)) {
            toast.success('Thành công !');         
          }else{
            toast.error(_get(response.payload, 'code[0]'));
          }
          resetForm();
          setLoading(false);
          setOpen(false);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="from-group">
                <label htmlFor="">Tên giảng viên </label>
                <ElementInput
                  type="text"
                  placeholder="Tên giảng viên "
                  name="name"
                />
              </div>
              <div className="from-group">
                <label htmlFor=""> Email </label>
                <ElementInput type="text" placeholder="Email" name="email" />
                {messenger && <div> {messenger.email[0]} </div>}
              </div>

              <div className="from-group">
                <label htmlFor=""> Cơ Sở </label>
                <div className="box-select">
                  <ElementSelect
                    type="text"
                    placeholder="Cơ Sở  "
                    className="select"
                    name="campus_id"
                    options={listCampusesOption || []}
                  />
                </div>
              </div>
              <div className="from-group">
                <label htmlFor=""> Chuyên ngành </label>
                <div className="box-select">
                  <ElementSelect
                    type="text"
                    placeholder="Chuyên Ngành "
                    className="select"
                    name="major_id"
                    options={listMajorsOption || []}
                  />
                </div>
              </div>
              <div className="from-group">
                <label htmlFor=""> Loại </label>
                <div className="box-select">
                  <ElementSelect
                    type="text"
                    placeholder="Type"
                    className="select"
                    name="type"
                    options={[
                      { label: 'Giảng viên ', value: 1 },
                      { label: 'Chủ nhiệm bộ môn', value: 2 },
                    ]}
                  />
                </div>
              </div>
              <GroupAction>
                <Button
                  size="medium"
                  onClick={() => {
                    setOpen(false);
                    setLoading(false);
                  }}
                >
                  Hủy
                </Button>
                <Button
                  size="medium"
                  color="primary"
                  icon={<AiOutlineSave />}
                  type="submit"
                  onClick={() => handleSubmit()}
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Lưu
                </Button>
              </GroupAction>
            </ContentForm>
          );
        }}
      </Formik>
    </>
  );
};
export default Adduser;
