import React, { useState } from 'react';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { ContentForm, GroupAction } from './ActionMajors.styles';
import { schema } from '../../helpers/majors.helpers';
import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import { Button } from 'components/Button/Button';
import { postMajors, putMajors } from './../../redux/majors.slice';

const ActionMajors = ({ item, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={item}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          const dispatchAction = item?.name ? putMajors : postMajors;
          const response = await dispatch(dispatchAction(values));
          if (dispatchAction.fulfilled.match(response)) {
            toast.success('Thành công !');
          } else {
            toast.error(_get(response.payload, 'name[0]'));
          }
          setOpen(false);
          setLoading(false);
          resetForm();
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="from-group">
                <label htmlFor=""> Chuyên ngành </label>
                <ElementInput
                  type="text"
                  placeholder="Tên chuyên ngành"
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

export default ActionMajors;
