import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Vui lòng nhập trường này !')
    .min(8, 'Tối thiểu 8 ký tự'),
});

export const initForm = {
  name: '',
};
