import React from 'react';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import ElementCheckbox from 'components/FormElements/ElementCheckbox/ElementCheckbox';
import { Button } from 'components/Button/Button';

import { ContentForm, GroupAction, GroupRole } from './ActionRole.styles';
import { schema } from '../../helpers/role.helpers';
import { postRole, putRole } from '../../redux/role.slice';

const arrayRole = [
  { label: 'Giảng viên', value: 1 },
  { label: 'Chủ nghiệm', value: 2 },
];

const ActionRole = ({ item, setOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={item}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          // const dispatchAction = item?.name ? putRole : postRole;
          // const response = await dispatch(
          //   dispatchAction({
          //     roles: values,
          //   })
          // );
          // if (dispatchAction.fulfilled.match(response)) {
          //   toast.success('Thành công !');
          // } else {
          //   toast.error(_get(response.payload, 'name[0]'));
          // }
          // setOpen(false);
          // // setLoading(false);
          // resetForm();
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="form-group">
                <label htmlFor="">Tên</label>
                <ElementInput type="text" placeholder="Tên" name="name" />
              </div>

              <div className="form-group">
                <label htmlFor="">Cấp vị trí</label>
                <GroupRole>
                  <ElementCheckbox name="permissions" data={arrayRole} />
                </GroupRole>
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

export default ActionRole;
