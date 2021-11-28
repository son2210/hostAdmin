import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập môn học !')
    .min(5, 'Ký tự phải lớn hơn 8'),
  code: Yup.string()
    .min(5, 'Ký tự phải lớn hơn 8')
    .required('Vui lòng nhập mã số sinh viên !'),

  major_id: Yup.string().required('Vui lòng chọn chuyên ngành !'),
});

export const initForm = {
  name: '',
  code: '',
  major_id: '',
};
