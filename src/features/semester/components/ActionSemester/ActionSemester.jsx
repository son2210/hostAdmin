import React, { useState } from 'react';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { ContentForm, GroupAction } from './ActionSemester.styles';
import { schema } from '../../helpers/semester.helpers';
import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import { Button } from 'components/Button/Button';
import { postSemester, putSemester } from './../../redux/semester.slice';

const ActionSemester = ({ item, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={item}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          const dispatchAction = item?.name ? putSemester : postSemester;
          const response = await dispatch(dispatchAction(values));
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
              <div className="from-group">
                <label htmlFor="">Kỳ học</label>
                <ElementInput
                  type="text"
                  placeholder="Tên kỳ học"
                  name="name"
                />
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

export default ActionSemester;
