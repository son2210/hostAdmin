import * as Yup from 'yup';

const SUPPORTED_FORMATS = [
  '.csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
];

export const schema = Yup.object().shape({
  semester_id: Yup.number().required('Vui lòng chọn cơ sở !').nullable(),
  excel: Yup.mixed()
    .required('Vui lòng chọn file upload !')
    .test('file', 'Định dạng file không đúng !', (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    )
    .test(
      'file',
      'Kích thước file quá lớn !',
      (value) => value === null || (value && value?.size <= 10000)
    ),
});

export const initForm = {
  semester_id: null,
  excel: null,
};
