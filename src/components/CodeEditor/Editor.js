import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';

const code = '\n\n\n\n\n\n';

const CodeEditor = () => {
  return (
    <div className={'codeEditor'}>
      <CodeMirror
        value={code}
        options={{
          theme: 'neo',
          tabSize: 2,
          keyMap: 'sublime',
          mode: 'jsx'
        }}
      />
    </div>
  );
};

export default CodeEditor;
