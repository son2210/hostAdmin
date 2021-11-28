import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập trường này !'),
});

export const initForm = {
  name: '',
};
