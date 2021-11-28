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

import { postSubject, putSubject } from './../../redux/subject.slice.js';
import { getMajors } from 'features/majors/redux/majors.slice';

const ActionSubject = ({ item, setOpen, options, optionCategorySubject }) => {
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
          setIsLoading(true);
          const dispatchAction = item?.name ? putSubject : postSubject;
          const response = await dispatch(dispatchAction(values));
          if (dispatchAction.fulfilled.match(response)) {
            toast.success('Thành công !');
          } else {
            toast.error(_get(response.payload, 'code[0]'));
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
                <label htmlFor="">Chuyên Ngành</label>
                <div className="box-select">
                  <ElementSelect
                    className="select"
                    name="major_id"
                    placeholder="Chọn chuyên ngành"
                    options={options || []}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor=""> Môn Học </label>
                <ElementInput
                  type="text"
                  placeholder="Tên chuyên ngành"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> Mã Môn </label>
                <ElementInput type="text" placeholder="Mã Môn" name="code" />
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
