import React from 'react';
import ReactQuill from 'react-quill';
import { WarEditor } from './Editor.styles';
import EditorToolbar, { formats, modules } from './CustomEditor';
const Editor = ({ value, changeDescription }) => {
  const ChangeEditor = (data) => {
    changeDescription(data);
  };
  return (
    <WarEditor>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="chi tiết sản phẩm "
        value={value}
        onChange={ChangeEditor}
      />
    </WarEditor>
  );
};
export default Editor;
