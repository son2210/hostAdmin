import React, { memo, useEffect, useState } from 'react';
import { GrFormUpload } from 'react-icons/gr';
import { MdCloudUpload } from 'react-icons/md';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AlertMessage from 'components/AlertMessage/AlertMessage';
import { WrapContent } from 'styles/common/common-styles';
import {
  GroupUpload,
  BoxUpload,
  ContentUpload,
  HeaderUpload,
} from './UploadExcelScreen.styles';

import { Button } from 'components/Button/Button';
import ElementSelect from 'components/FormElements/ElementSelect/ElementSelect';
import { schema, initForm } from './../helpers/upload.helpers';
import ElementInputFile from 'components/FormElements/ElementInput/ElementInputFile';
import {
  postImportFileExcel,
  getSemesters,
} from './../redux/uploadExcel.slice';
import { MapOptions } from 'helpers/convert/map-options';

const UploadExcelScreen = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(getSemesters());
  }, [dispatch]);

  const { listSemester } = useSelector((state) => state.uploadExcel);
  const listSelectOptionSemester = MapOptions(listSemester);
  return (
    <WrapContent>
      <Formik
        enableReinitialize
        initialValues={initForm}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          const valueForm = new FormData();
          valueForm.append('campus_id', 1);
          valueForm.append('semester_id', values.semester_id);
          valueForm.append('excel', values.excel);
          const response = await dispatch(postImportFileExcel(valueForm));
          if (postImportFileExcel.fulfilled.match(response)) {
            toast.success('Upload file thành công !');
          } else {
            toast.error(response.payload);
          }
          setIsLoading(false);
          resetForm({ semester_id: null, excel: null });
        }}
      >
        {({ touched, errors, values }) => {
          let classError = touched.semester_id && touched.excel && errors;
          if (values.excel !== null) {
            classError = false;
          }
          return (
            <Form>
              <GroupUpload>
                <HeaderUpload>
                  <h3 className="title-upload">Danh sách điểm</h3>
                  <Button
                    type="button"
                    size="small"
                    color="success"
                    target="_parent"
                    href="http://api.duanpoly.ml/api/export"
                  >
                    File Mẫu
                  </Button>
                </HeaderUpload>
                <div className="group-select">
                  <div className="box-select">
                    <ElementSelect
                      placeholder="Kì học"
                      name="semester_id"
                      options={
                        listSelectOptionSemester ? listSelectOptionSemester : []
                      }
                      label="Kì học"
                    />
                  </div>
                </div>
                <BoxUpload className={`${classError ? 'error-group' : ''}`}>
                  {values.excel?.name ? (
                    <div className="label-upload">{values.excel.name}</div>
                  ) : (
                    <div className="label-upload label-field">Chọn file</div>
                  )}
                  <ContentUpload
                    htmlFor="file-upload"
                    className="label-upload form-field"
                  >
                    <ElementInputFile
                      className="input-upload"
                      id="file-upload"
                      name="excel"
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      value=""
                    />
                    <span className="icon-upload">
                      <GrFormUpload />
                    </span>
                    <p className="text-upload">Chọn file upload</p>
                  </ContentUpload>
                  <ErrorMessage
                    component="div"
                    name="excel"
                    className="error-file"
                  />
                </BoxUpload>
                <p className="helper-upload">
                  * Chọn file excel điểm của các sinh viên
                </p>

                <div className="button-upload">
                  <Button
                    type="submit"
                    icon={<MdCloudUpload />}
                    size="medium"
                    color="primary"
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Upload
                  </Button>
                </div>
              </GroupUpload>
            </Form>
          );
        }}
      </Formik>
      <AlertMessage />
    </WrapContent>
  );
};

export default memo(UploadExcelScreen);
