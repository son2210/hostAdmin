import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập bộ môn  !')
    .min(4, 'Ký tự phải lớn hơn 4'),
  code: Yup.string()
    .min(4, 'Ký tự phải lớn hơn 4')
    .required('Vui lòng nhập mã số sinh viên !'),

  user_id: Yup.string().required('Vui lòng chọn giảng viên  !'),
});

export const initForm = {
  name: '',
  code: '',
  user_id: '',
};
