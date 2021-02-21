import React, { useCallback, useState } from 'react';
import { IoMenuOutline } from 'react-icons/all';
import DashboardModal from './DashboardModal';
import Editor from '../Editor';

const DashboardDebateModal = ({
  handleClickToggleOption,
  toggleOption
}) => {
  const [tab, setTab] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [detail, setDetail] = useState(false);
  const handleClickChangeTab = useCallback((value) => {
    setTab(value);
  }, [tab]);

  return (
    <div className={'insertForm'}>
      <div className="schedule__tabs">
        <button className={tab === 1 ? 'active' : ''} onClick={() => handleClickChangeTab(1)}>수정</button>
        <button className={tab === 2 ? 'active' : ''} onClick={() => handleClickChangeTab(2)}>
          학습자 화면
        </button>
        <button className={tab === 3 ? 'active' : ''} onClick={() => handleClickChangeTab(3)}>
          평가
        </button>
      </div>
      {
        tab === 1 && (
          <>
            <div className="_modal__block">
              <div className="_modal__block-header">
                <h2 className={'i-debate'}>토론</h2>
              </div>
              <div className={'_modal__block-body'}>

                <div className="row">
                  <h3 className={'insertForm__name required'}> 제목</h3>
                  <div className={'insertForm__content'}>
                    <div className="input full"><input type="text"/></div>
                  </div>
                </div>

                <div className="row">
                  <h3 className={'insertForm__name required'}> 첨부파일</h3>
                  <div className={'insertForm__content'}>
                    <div className="flex">
                      <div className="input"><input type="text"/></div>
                      <label htmlFor="file" className={'file-btn'}>
                        <input type="file" id={'file'}/>
                        <span className={'_btn small'}>파일 선택</span>
                      </label>
                      <button className={'_btn small _btn--uploader'} onClick={() => {}}>파일 업로더</button>

                    </div>
                    <div className={'help-text-block'}>
                      <p className={'help-text'}>허용된 확장자: pptx, words</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={'_modal__block-body'}>
                <button className={'_btn small'} onClick={handleClickToggleOption}>
                  고급옵션 {toggleOption ? '닫기 -' : '열기 +'}
                </button>
              </div>
            </div>
            {
              toggleOption && (
                <div className="_modal__block">
                  <div className="_modal__block-header">
                    <h2>고급옵션</h2>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name required'}>설명</h3>
                      <div className={'insertForm__content'}>
                        <Editor />
                      </div>
                    </div>

                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>출석인정기간</h3>
                      <div className={'insertForm__content'}>
                        <div className={'window-cofing'}>
                          <div className="flex">
                            <h4>다운로드 허용</h4>
                            <div className="select">
                              <select name="" id="">
                                <option value="">아니오</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex">
                            <h4>동영상 너비(픽셀)</h4>
                            <div className="input short"><input type="number"/></div>
                          </div>
                          <div className="flex">
                            <h4>동영상 높이(픽셀)</h4>
                            <div className="input short"><input type="number"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>보기</h3>
                      <div className={'insertForm__content'}>
                        <div className="select long">
                          <select name="" id="">
                            <option value="">숨기기</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="row">
                      <h3 className={'insertForm__name'}>접근제한</h3>
                      <div className={'insertForm__content'}>
                        <div className="flex">
                          <p>접근 제한이 설정되어 있지 않습니다.</p>
                        </div>
                        <button className={'_btn small bg-none'}>접근 제한 추가하기 +</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </>
        )
      }
      {
        tab === 2 && (
          detail
            // eslint-disable-next-line multiline-ternary
            ? (
              <>
                <div className="_modal__block">
                  <div className="_modal__block-header">
                    <h2 className={'i-debate'}>토론</h2>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className={'debate'}>
                      <h2 className={'debate__title'}>
                        <span>Q. </span> 대한민국 중장기 정책과제에 명시된 ‘고령자 기준 상향＇에 대한 입장을 토론하시오.
                      </h2>
                      <div className={'detail-btnbox'}>
                        <button className="_btn bg-none small" onClick={() => setDetail(false)}>
                          <IoMenuOutline />
                          목록으로 돌아가기
                        </button>
                        <button className="_btn bg-none small ml-auto">
                          수정
                        </button>
                        <button className="_btn bg-none small">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className={'debate'}>
                      <h2 className={'debate__title'}>
                        대한민국 중장기 정책과제에 명시된 ‘고령자 기준 상향＇
                      </h2>
                      <div className="debate__author">
                        <strong>윤지원</strong>
                        <span>2021-01-15 22:15</span>
                      </div>
                    </div>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className="debate__description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa fugiat hic laudantium sapiente. Accusantium adipisci aperiam asperiores aspernatur atque aut autem consectetur consequuntur deleniti dolores doloribus dolorum earum exercitationem fugit impedit iusto libero molestias nobis, odit officiis perferendis quam quibusdam repellendus vitae, voluptatem. Ab, asperiores doloremque, earum ipsum iure molestiae non optio perferendis quas sed sint voluptatum! Aliquam asperiores autem corporis cupiditate delectus doloribus eaque eligendi excepturi inventore ipsum, iste iusto laborum magni maxime neque nisi numquam optio placeat possimus praesentium repellat, repudiandae sunt tempora ullam voluptate? Ab adipisci architecto cumque deleniti harum nihil porro qui quos voluptate! Facilis illo magnam magni perferendis praesentium provident quam quas, rem saepe temporibus vel voluptate? Ab aperiam architecto culpa eaque eos est eveniet, magni odio, qui quos repellendus sit vel! Aliquam architecto at autem dolores eos exercitationem incidunt inventore ipsa ipsum, iusto magnam magni maxime neque, nesciunt numquam placeat quis quo ratione recusandae reiciendis temporibus vel, veniam voluptate voluptatem voluptatibus. At dolorum inventore maxime nam, natus officia perferendis? Cupiditate dicta ducimus explicabo inventore magni minima quas quisquam quod reprehenderit voluptatibus? Accusantium blanditiis cupiditate enim minima mollitia porro quaerat quos ratione rem tempora? Aliquam blanditiis culpa debitis dolores laboriosam, necessitatibus nobis perspiciatis ut!</p>
                    </div>
                  </div>
                </div>

                <div className="_modal__block _modal__block--debate">
                  <div className={'btnbox'}>
                    <button className="_btn small trans" onClick={() => setShowForm(true)}>
                      답변 등록하기
                    </button>
                  </div>
                </div>
                {
                  showForm && <DashboardModal
                    title={'답변 작성하기'}
                    onClickClose={() => setShowForm(false)}
                    maxWidth={700}
                    /* eslint-disable-next-line react/no-children-prop */
                    children={(
                      <div className={'debateForm'}>
                        <h3 className={'debateForm__title required'}>내용</h3>
                        <Editor/>
                      </div>
                    )}
                  />
                }

                <div className={'homework-feedback'}>
                  <div className={'homework-feedback-body'}>
                    <ul>
                      <li className={'feedback-item'}>
                        <div className={'top'}>
                          <strong>임성규</strong>
                          <span>2021-01-30 09:45</span>
                        </div>
                        <p>
                          아무리 힘이 들더라도 결국은 고령화 사회로 갈수밖에 없는 구조입니다. 복지를 늘리는것은 큰세수가 필요하니 정년부터 단계적으로 늘어 나겠죠.
                          그러나 구조적인 문제점인 젊은 사람들의 출생률저하를 막을 생각을 안하고 있는데 문제 입니다.
                        </p>
                        <div className={'feedback-actions'}>
                          <button>
                            <img src="/assets/images/feedback-i-1.png" alt=""/>
                          </button>
                          <button>
                            <img src="/assets/images/feedback-i-2.png" alt=""/>
                          </button>
                          <button>
                            <img src="/assets/images/feedback-i-3.png" alt=""/>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
              ) : (
              <>
                <div className="_modal__block">
                  <div className="_modal__block-header">
                    <h2 className={'i-debate'}>토론</h2>
                  </div>
                  <div className={'_modal__block-body'}>
                    <div className={'debate'}>
                      <h2 className={'debate__title'}>
                        <span>Q. </span> 대한민국 중장기 정책과제에 명시된 ‘고령자 기준 상향＇에 대한 입장을 토론하시오.
                      </h2>

                      <h3 className={'debate__sub-title'}>평가안내</h3>
                      <div className="help-text-block">
                        <p className={'help-text'}>제목과 관련된 토론글을 1개 이상 작성하세요.</p>
                        <p className={'help-text'}>다른 학생의 토론글에 댓글을 5개 이상 작성하세요.</p>
                      </div>

                      <div className={'debate__notice'}>
                        <p>
                          * 모방된 내용이나 제목과 관련 없는 내용은 감정 요인입니다.
                        </p>
                        <p>* 비속어, 욕설 등은 0점 처리 됩니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_modal__block">
                  <div className={'_modal__block-body'}>
                    <div className={'debate__notice-info'}>
                      <strong>토론 기간: </strong>
                      <p className={'green'}>2021-01-15 09:00 ~ 2021-01-18 22:00</p>
                    </div>
                    <div className={'debate__notice-info'}>
                      <strong>평가 최소요건: </strong>
                      <p>토론글(개) <span className={'green'}>1</span> / 답변(개) <span className={'green'}>5</span></p>
                    </div>
                  </div>
                </div>
                <div className="_modal__block _modal__block--debate">
                  <div className={'btnbox'}>
                    <button className="_btn small">주게 글 작성하기</button>
                  </div>
                  <div className={'_dataTable'}>
                    <table>
                      <colgroup>
                        <col width={70}/>
                        <col/>
                        <col width={100}/>
                        <col width={150}/>
                        <col width={70}/>
                      </colgroup>
                      <thead>
                      <tr>
                        <th>번호</th>
                        <th>전문분야</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th>답변 수</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          <button onClick={() => setDetail(true)}>대한민국 중장기 정책과제에 명시된 ‘고령자 기준 상향＇ 토론 글</button>
                        </td>
                        <td>김현수</td>
                        <td>2021-01-17 11:00</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          <button onClick={() => setDetail(true)}>대한민국 중장기 정책과제에 명시된 ‘고령자 기준 상향＇ 토론 글</button>
                        </td>
                        <td>김현수</td>
                        <td>2021-01-17 11:00</td>
                        <td>1</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
              )
        )
      }
      {
        tab === 3 && (
          <div className="_modal__block">
            <div className="_modal__block-header">
              <h2 className={'i-debate'}>토론</h2>
            </div>
            <div className={'_modal__block-body'}>
              평가 ..
            </div>
          </div>
        )
      }
    </div>
  );
};

export default DashboardDebateModal;
