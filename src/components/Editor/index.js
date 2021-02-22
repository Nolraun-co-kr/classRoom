/* eslint-disable */
import React, { useEffect } from 'react';

const Editor = ({bodyHeight, editorId = 'tx_editor_form'}) => {
  useEffect(() => {
    const config = {
      txHost: '', /* 런타임 시 리소스들을 로딩할 때 필요한 부분으로, 경로가 변경되면 이 부분 수정이 필요. ex) http://xxx.xxx.com */
      txPath: '', /* 런타임 시 리소스들을 로딩할 때 필요한 부분으로, 경로가 변경되면 이 부분 수정이 필요. ex) /xxx/xxx/ */
      txService: 'sample', /* 수정필요없음. */
      txProject: 'sample', /* 수정필요없음. 프로젝트가 여러개일 경우만 수정한다. */
      initializedId: ``, /* 대부분의 경우에 빈문자열 */
      wrapper: `${editorId}-wrapper`, /* 에디터를 둘러싸고 있는 레이어 이름(에디터 컨테이너) */
      form: `${editorId}`, /* 등록하기 위한 Form 이름 */
      txIconPath: '/assets/daumeditor-7.5.9/images/icon/editor/', /* 에디터에 사용되는 이미지 디렉터리, 필요에 따라 수정한다. */
      txDecoPath: '/assets/daumeditor-7.5.9/images/deco/contents/', /* 본문에 사용되는 이미지 디렉터리, 서비스에서 사용할 때는 완성된 컨텐츠로 배포되기 위해 절대경로로 수정한다. */
      canvas: {
        exitEditor: {
          /*
          desc:'빠져 나오시려면 shift+b를 누르세요.',
          hotKey: {
              shiftKey:true,
              keyCode:66
          },
          nextElement: document.getElementsByTagName('button')[0]
          */
        },
        styles: {
          color: '#123456', /* 기본 글자색 */
          fontFamily: '굴림', /* 기본 글자체 */
          fontSize: '10pt', /* 기본 글자크기 */
          backgroundColor: '#fff', /* 기본 배경색 */
          lineHeight: '1.5', /* 기본 줄간격 */
          padding: '8px' /* 위지윅 영역의 여백 */
        },
        showGuideArea: false,
        autolink: false
      },
      events: {
        preventUnload: false
      },
      sidebar: {
        attachbox: {
          show: true,
          confirmForDeleteAll: true
        }
      },
      size: {
      },
      toolbar: {
        paste: {
          defaultMode: Trex.Paste.MODE_HTML
        }
      }
    };

    EditorJSLoader.ready(function (Editor) {
      Trex.module('switch', function(editor, toolbar, sidebar, canvas, config) {
        console.log(config)
        canvas.observeJob(Trex.Ev.__CANVAS_PANEL_CLICK, function(ev) {
          Editor.switchEditor(config.initializedId);
        });
        toolbar.observeJob(Trex.Ev.__TOOL_CLICK, function(ev) {
          Editor.switchEditor(config.initializedId);
        });
      });
      new Editor(config);
    });
  }, []);
  return (
    <div className="editor">
      <form name={`${editorId}`} id={`${editorId}`} action="http://posttestserver.com/post.php" method="post" acceptCharset="utf-8">
        <div id={`${editorId}-wrapper`} className="tx-editor-container">
          <div id="tx_sidebar" className="tx-sidebar">
            <div className="tx-sidebar-boundary">
              <ul className="tx-bar tx-bar-left tx-nav-attach">
                <li className="tx-list">
                  <div unselectable="on" id="tx_image" className="tx-image tx-btn-trans">
                    <a href="#//" title="사진" className="tx-text">사진</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" id="tx_file" className="tx-file tx-btn-trans">
                    <a href="#//" title="파일" className="tx-text">파일</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" id="tx_media" className="tx-media tx-btn-trans">
                    <a href="#//" title="외부컨텐츠" className="tx-text">외부컨텐츠</a>
                  </div>
                </li>
                <li className="tx-list tx-list-extra">
                  <div unselectable="on" className="tx-btn-nlrbg tx-extra">
                    <a href="#//" className="tx-icon" title="버튼 더보기">버튼 더보기</a>
                  </div>
                  <ul className="tx-extra-menu tx-menu" style={{
                    left: '-48px'
                  }} unselectable="on">

                  </ul>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-right">
                <li className="tx-list">
                  <div unselectable="on" className="tx-btn-lrbg tx-fullscreen" id="tx_fullscreen">
                    <a href="#//" className="tx-icon" title="넓게쓰기 (Ctrl+M)">넓게쓰기</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-right tx-nav-opt">
                <li className="tx-list">
                  <div unselectable="on" className="tx-switchtoggle" id="tx_switchertoggle">
                    <a href="#//" title="에디터 타입">에디터</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="tx_toolbar_basic" className="tx-toolbar tx-toolbar-basic">
            <div className="tx-toolbar-boundary">
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_fontfamily" unselectable="on" className="tx-slt-70bg tx-fontfamily">
                    <a href="#//" title="글꼴">굴림</a>
                  </div>
                  <div id="tx_fontfamily_menu" className="tx-fontfamily-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div unselectable="on" className="tx-slt-42bg tx-fontsize" id="tx_fontsize">
                    <a href="#//" title="글자크기">9pt</a>
                  </div>
                  <div id="tx_fontsize_menu" className="tx-fontsize-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-font">

                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-bold" id="tx_bold">
                    <a href="#//" className="tx-icon" title="굵게 (Ctrl+B)">굵게</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-underline" id="tx_underline">
                    <a href="#//" className="tx-icon" title="밑줄 (Ctrl+U)">밑줄</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-italic" id="tx_italic">
                    <a href="#//" className="tx-icon" title="기울임 (Ctrl+I)">기울임</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-strike" id="tx_strike">
                    <a href="#//" className="tx-icon" title="취소선 (Ctrl+D)">취소선</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-slt-tbg 	tx-forecolor" id="tx_forecolor">
                    <a href="#//" className="tx-icon" title="글자색">글자색</a>
                    <a href="#//" className="tx-arrow" title="글자색 선택">글자색 선택</a>
                  </div>
                  <div id="tx_forecolor_menu" className="tx-menu tx-forecolor-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-slt-brbg 	tx-backcolor" id="tx_backcolor">
                    <a href="#//" className="tx-icon" title="글자 배경색">글자 배경색</a>
                    <a href="#//" className="tx-arrow" title="글자 배경색 선택">글자 배경색 선택</a>
                  </div>
                  <div id="tx_backcolor_menu" className="tx-menu tx-backcolor-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-align">
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-alignleft" id="tx_alignleft">
                    <a href="#//" className="tx-icon" title="왼쪽정렬 (Ctrl+,)">왼쪽정렬</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-aligncenter" id="tx_aligncenter">
                    <a href="#//" className="tx-icon" title="가운데정렬 (Ctrl+.)">가운데정렬</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-alignright" id="tx_alignright">
                    <a href="#//" className="tx-icon" title="오른쪽정렬 (Ctrl+/)">오른쪽정렬</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-rbg 	tx-alignfull" id="tx_alignfull">
                    <a href="#//" className="tx-icon" title="양쪽정렬">양쪽정렬</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-tab">
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-indent" id="tx_indent">
                    <a href="#//" title="들여쓰기 (Tab)" className="tx-icon">들여쓰기</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-rbg 	tx-outdent" id="tx_outdent">
                    <a href="#//" title="내어쓰기 (Shift+Tab)" className="tx-icon">내어쓰기</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-list">
                <li className="tx-list">
                  <div unselectable="on" className="tx-slt-31lbg tx-lineheight" id="tx_lineheight">
                    <a href="#//" className="tx-icon" title="줄간격">줄간격</a>
                    <a href="#//" className="tx-arrow" title="줄간격">줄간격 선택</a>
                  </div>
                  <div id="tx_lineheight_menu" className="tx-lineheight-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="tx-slt-31rbg tx-styledlist" id="tx_styledlist">
                    <a href="#//" className="tx-icon" title="리스트">리스트</a>
                    <a href="#//" className="tx-arrow" title="리스트">리스트 선택</a>
                  </div>
                  <div id="tx_styledlist_menu" className="tx-styledlist-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-etc">
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-emoticon" id="tx_emoticon">
                    <a href="#//" className="tx-icon" title="이모티콘">이모티콘</a>
                  </div>
                  <div id="tx_emoticon_menu" className="tx-emoticon-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-link" id="tx_link">
                    <a href="#//" className="tx-icon" title="링크 (Ctrl+K)">링크</a>
                  </div>
                  <div id="tx_link_menu" className="tx-link-menu tx-menu"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-specialchar" id="tx_specialchar">
                    <a href="#//" className="tx-icon" title="특수문자">특수문자</a>
                  </div>
                  <div id="tx_specialchar_menu" className="tx-specialchar-menu tx-menu"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-table" id="tx_table">
                    <a href="#//" className="tx-icon" title="표만들기">표만들기</a>
                  </div>
                  <div id="tx_table_menu" className="tx-table-menu tx-menu" unselectable="on">
                    <div className="tx-menu-inner">
                      <div className="tx-menu-preview"></div>
                      <div className="tx-menu-rowcol"></div>
                      <div className="tx-menu-deco"></div>
                      <div className="tx-menu-enter"></div>
                    </div>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-rbg 	tx-horizontalrule" id="tx_horizontalrule">
                    <a href="#//" className="tx-icon" title="구분선">구분선</a>
                  </div>
                  <div id="tx_horizontalrule_menu" className="tx-horizontalrule-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-richtextbox" id="tx_richtextbox">
                    <a href="#//" className="tx-icon" title="글상자">글상자</a>
                  </div>
                  <div id="tx_richtextbox_menu" className="tx-richtextbox-menu tx-menu">
                    <div className="tx-menu-header">
                      <div className="tx-menu-preview-area">
                        <div className="tx-menu-preview"></div>
                      </div>
                      <div className="tx-menu-switch">
                        <div className="tx-menu-simple tx-selected"><a><span>간단 선택</span></a></div>
                        <div className="tx-menu-advanced"><a><span>직접 선택</span></a></div>
                      </div>
                    </div>
                    <div className="tx-menu-inner">
                    </div>
                    <div className="tx-menu-footer">
                      <img className="tx-menu-confirm"
                           src=".//assets/daumeditor-7.5.9/images/icon/editor/btn_confirm.gif?rv=1.0.1" alt=""/>
                      <img className="tx-menu-cancel" hspace="3"
                           src=".//assets/daumeditor-7.5.9/images/icon/editor/btn_cancel.gif?rv=1.0.1" alt=""/>
                    </div>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-quote" id="tx_quote">
                    <a href="#//" className="tx-icon" title="인용구 (Ctrl+Q)">인용구</a>
                  </div>
                  <div id="tx_quote_menu" className="tx-quote-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-bg 	tx-background" id="tx_background">
                    <a href="#//" className="tx-icon" title="배경색">배경색</a>
                  </div>
                  <div id="tx_background_menu" className="tx-menu tx-background-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-rbg 	tx-dictionary" id="tx_dictionary">
                    <a href="#//" className="tx-icon" title="사전">사전</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left tx-group-undo">
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-lbg 	tx-undo" id="tx_undo">
                    <a href="#//" className="tx-icon" title="실행취소 (Ctrl+Z)">실행취소</a>
                  </div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="		 tx-btn-rbg 	tx-redo" id="tx_redo">
                    <a href="#//" className="tx-icon" title="다시실행 (Ctrl+Y)">다시실행</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_paste" unselectable="on" className="tx-slt-31bg tx-paste">
                    <a href="#//" className="tx-icon" title="클립보드 붙여넣기">클립보드 붙여넣기</a>
                  </div>
                  <div id="tx_paste_menu" className="tx-menu tx-paste-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul>
                <li className="tx-list">
                  <div id="tx_codehighlight" unselectable="on" className="tx-btn-lrbg tx-sourcecode">
                    <a href="#//" className="tx-icon" title="소스코드 첨부">소스코드 첨부</a>
                  </div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-right">
                <li className="tx-list">
                  <div unselectable="on" className="tx-btn-nlrbg tx-advanced" id="tx_advanced">
                    <a href="#//" className="tx-icon" title="툴바 더보기">툴바 더보기</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="tx_toolbar_advanced" className="tx-toolbar tx-toolbar-advanced">
            <div className="tx-toolbar-boundary">
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div className="tx-tableedit-title"></div>
                </li>
              </ul>

              <ul className="tx-bar tx-bar-left tx-group-align">
                <li className="tx-list">
                  <div unselectable="on" className="tx-btn-lbg tx-mergecells" id="tx_mergecells">
                    <a href="#//" className="tx-icon2" title="병합">병합</a>
                  </div>
                  <div id="tx_mergecells_menu" className="tx-mergecells-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="tx-btn-bg tx-insertcells" id="tx_insertcells">
                    <a href="#//" className="tx-icon2" title="삽입">삽입</a>
                  </div>
                  <div id="tx_insertcells_menu" className="tx-insertcells-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div unselectable="on" className="tx-btn-rbg tx-deletecells" id="tx_deletecells">
                    <a href="#//" className="tx-icon2" title="삭제">삭제</a>
                  </div>
                  <div id="tx_deletecells_menu" className="tx-deletecells-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>

              <ul className="tx-bar tx-bar-left tx-group-align">
                <li className="tx-list">
                  <div id="tx_cellslinepreview" unselectable="on" className="tx-slt-70lbg tx-cellslinepreview">
                    <a href="#//" title="선 미리보기"></a>
                  </div>
                  <div id="tx_cellslinepreview_menu" className="tx-cellslinepreview-menu tx-menu"
                       unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div id="tx_cellslinecolor" unselectable="on" className="tx-slt-tbg tx-cellslinecolor">
                    <a href="#//" className="tx-icon2" title="선색">선색</a>

                    <div className="tx-colorpallete" unselectable="on"></div>
                  </div>
                  <div id="tx_cellslinecolor_menu" className="tx-cellslinecolor-menu tx-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div id="tx_cellslineheight" unselectable="on" className="tx-btn-bg tx-cellslineheight">
                    <a href="#//" className="tx-icon2" title="두께">두께</a>

                  </div>
                  <div id="tx_cellslineheight_menu" className="tx-cellslineheight-menu tx-menu"
                       unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div id="tx_cellslinestyle" unselectable="on" className="tx-btn-bg tx-cellslinestyle">
                    <a href="#//" className="tx-icon2" title="스타일">스타일</a>
                  </div>
                  <div id="tx_cellslinestyle_menu" className="tx-cellslinestyle-menu tx-menu" unselectable="on"></div>
                </li>
                <li className="tx-list">
                  <div id="tx_cellsoutline" unselectable="on" className="tx-btn-rbg tx-cellsoutline">
                    <a href="#//" className="tx-icon2" title="테두리">테두리</a>

                  </div>
                  <div id="tx_cellsoutline_menu" className="tx-cellsoutline-menu tx-menu" unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_tablebackcolor" unselectable="on" className="tx-btn-lrbg tx-tablebackcolor"
                       style={{
                         backgroundColor: '#9aa5ea'
                       }}>
                    <a href="#//" className="tx-icon2" title="테이블 배경색">테이블 배경색</a>
                  </div>
                  <div id="tx_tablebackcolor_menu" className="tx-tablebackcolor-menu tx-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_tabletemplate" unselectable="on" className="tx-btn-lrbg tx-tabletemplate">
                    <a href="#//" className="tx-icon2" title="테이블 서식">테이블 서식</a>
                  </div>
                  <div id="tx_tabletemplate_menu" className="tx-tabletemplate-menu tx-menu tx-colorpallete"
                       unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_tableresize" unselectable="on" className="tx-btn-lrbg tx-cellsize">
                    <a href="#//" className="tx-icon2" title="셀크기 변경">셀크기 변경</a>
                  </div>
                  <div id="tx_tableresize_menu" className="tx-cellsize-menu tx-menu2 tx-cellsize"
                       unselectable="on"></div>
                </li>
              </ul>
              <ul className="tx-bar tx-bar-left">
                <li className="tx-list">
                  <div id="tx_tablevalign" unselectable="on" className="tx-btn-lrbg tx-cellvalign">
                    <a href="#//" className="tx-icon2" title="셀내용 세로 정렬">셀내용 세로 정렬</a>
                  </div>
                  <div id="tx_tablevalign_menu" className="tx-cellvalign-menu tx-menu tx-cellvalign" unselectable="on">

                  </div>
                </li>
              </ul>

            </div>
          </div>

          <div id="tx_canvas" className="tx-canvas">
            <div id="tx_loading" className="tx-loading">
              <div><img src="/assets/daumeditor-7.5.9/images/icon/editor/loading2.png" width="113" height="21" align="absmiddle"/></div>
            </div>
            <div id="tx_canvas_wysiwyg_holder" className="tx-holder" style={{
              display:"block"
            }}>
              <iframe id="tx_canvas_wysiwyg" name="tx_canvas_wysiwyg" allowtransparency="true" frameBorder="0" style={{height: `${bodyHeight ? bodyHeight : '300'}px`}}></iframe>
            </div>
            <div className="tx-source-deco">
              <div id="tx_canvas_source_holder" className="tx-holder">
                <textarea id="tx_canvas_source" rows="30" cols="30"></textarea>
              </div>
            </div>
            <div id="tx_canvas_text_holder" className="tx-holder">
              <textarea id="tx_canvas_text" rows="30" cols="30"></textarea>
            </div>
          </div>
          <div id="tx_resizer" className="tx-resize-bar">
            <div className="tx-resize-bar-bg"></div>
            <img id="tx_resize_holder" src="/assets/daumeditor-7.5.9/images/icon/editor/skin/01/btn_drag01.gif" width="58" height="12"
                 unselectable="on" alt=""/>
          </div>

          <div id="tx_attach_div" className="tx-attach-div">
            <div id="tx_attach_txt" className="tx-attach-txt">파일 첨부</div>
            <div id="tx_attach_box" className="tx-attach-box">
              <div className="tx-attach-box-inner">
                <div id="tx_attach_preview" className="tx-attach-preview"><p></p><img
                  src="/assets/daumeditor-7.5.9/images/icon/editor/pn_preview.gif" width="147" height="108" unselectable="on"/></div>
                <div className="tx-attach-main">
                  <div id="tx_upload_progress" className="tx-upload-progress">
                    <div>0%</div>
                    <p>파일을 업로드하는 중입니다.</p></div>
                  <ul className="tx-attach-top">
                    <li id="tx_attach_delete" className="tx-attach-delete"><a>전체삭제</a></li>
                    <li id="tx_attach_size" className="tx-attach-size">
                      파일: <span id="tx_attach_up_size" className="tx-attach-size-up"></span>/<span
                      id="tx_attach_max_size"></span>
                    </li>
                    <li id="tx_attach_tools" className="tx-attach-tools">
                    </li>
                  </ul>
                  <ul id="tx_attach_list" className="tx-attach-list"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editor;
