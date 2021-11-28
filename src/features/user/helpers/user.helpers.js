import * as Yup from 'yup';
export const initForm = {
  name: null,
  avatar: null,
  email: null,
  description: null,
  roles: [],
  student_code: null,
};

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập môn học !')
    .min(5, 'Ký tự phải lớn hơn 8'),
  email: Yup.string()
    .min(5, 'Ký tự phải lớn hơn 8')
    .required('Vui lòng nhập email !'),
  campus_id: Yup.string().required('Vui lòng chọn cơ sở  !'),
  type: Yup.string().required('Vui lòng chọn loại   !'),

  major_id: Yup.string().required('Vui lòng chọn chuyên ngành !'),
});

export const initFormAdd = {
  name: '',
  email: '',
  campus_id: '',
  major_id: '',
  type: '',
};
