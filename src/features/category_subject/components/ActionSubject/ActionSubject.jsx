import React, { memo, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AiOutlineSave } from 'react-icons/ai';
import _get from 'lodash.get';

import { ContentForm, GroupAction } from './ActionSubject.styles';
import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import ElementSelect from 'components/FormElements/ElementSelect/ElementSelect';
import { Button } from 'components/Button/Button';
import { schema } from './../../helpers/subject.helpers';

import {
  postCategorySubject,
  putCategorySubject,
} from './../../redux/category_subject.slice.js';
import { getMajors } from 'features/majors/redux/majors.slice';

const ActionSubject = ({ item, setOpen, options }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(getMajors());
  }, [dispatch]);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={item}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          const data = {
            id: values.id,
            name: values.name,
            user_id: values.user_id,
            code: values.code,
          };
          setIsLoading(true);
          const dispatchAction = item?.name
            ? putCategorySubject
            : postCategorySubject;
          const response = await dispatch(dispatchAction(data));
          if (dispatchAction.fulfilled.match(response)) {
            toast.success('Thành công !');
          } else {
            toast.error(_get(response.payload, 'name[0]'));
          }
          setIsLoading(false);
          setOpen(false);
          resetForm();
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="form-group">
                <label htmlFor="">Giảng Viên </label>
                <div className="box-select">
                  <ElementSelect
                    className="select"
                    name="user_id"
                    placeholder="Chọn Giảng Viên "
                    options={options || []}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor=""> Tên Bộ Môn </label>
                <ElementInput
                  type="text"
                  placeholder="Tên Bộ Môn "
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> Mã Bô Môn </label>
                <ElementInput type="text" placeholder="Mã Bô Môn" name="code" />
              </div>

              <GroupAction>
                <Button
                  size="medium"
                  onClick={() => {
                    setOpen(false);
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

export default memo(ActionSubject);
