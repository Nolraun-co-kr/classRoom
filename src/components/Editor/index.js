import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min.js';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const Editor = ({ bodyHeight, editorId = 'tx_editor_form' }) => {
  return (
    <div className="editor">
      <FroalaEditor
        tag='textarea'
        config={{
          placeholderText: 'Edit Your Content Here!',
          charCounterCount: true
        }}
      />
    </div>
  );
};

export default Editor;
