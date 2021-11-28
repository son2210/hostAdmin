import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập trường này !')
    .min(8, 'Tối thiểu 8 ký tự'),
  title: Yup.string().required('Vui lòng nhập trường này !'),
  url: Yup.string().required('Vui lòng nhập trường này !'),
  icon: Yup.string().required('Vui lòng nhập trường này !'),
});

export const initForm = {
  name: '',
  title: '',
  url: '',
  icon: '',
  type: false,
};
