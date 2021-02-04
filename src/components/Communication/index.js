import React, { useState } from 'react';
import SlideList from './SlideList';
import Modal from '../Modal/Modal';

const Communication = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="programDetail__body">
        <SlideList />
        <div className="programDetail__comment">
          <header>
            <h2>댓글 32개</h2>

            <button onClick={() => setOpenModal(true)}>댓글쓰기</button>
          </header>

          <div className="comments">
            <div className="comments__item">
              <h3 className="active">윤똘복쓰 님의 댓글입니다.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore odio quia voluptate. Aliquid aperiam autem blanditiis distinctio dolorum, earum ex id in mollitia quaerat sint tempora vel voluptate! Molestias!
              </p>
              <div className="etc">
                <span>2020-10-23 13:25 작성됨</span>
              </div>

              <ul className="reCommend">
                <li className="recommend__item">
                  <h4>완두콩님 댓글입니다.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum inventore itaque libero numquam totam unde. Assumenda beatae blanditiis consectetur culpa cum distinctio dolores eaque earum eos esse hic inventore ipsam iste itaque iusto laboriosam minima molestiae, molestias necessitatibus officiis pariatur provident rem sint vero vitae? A accusamus aspernatur, autem consequuntur dolores dolorum eaque earum error est et fuga fugit in iste magnam nesciunt nobis obcaecati placeat quae quidem quis quod saepe sequi similique sint soluta suscipit voluptatem voluptatibus? Adipisci cupiditate, deleniti enim error libero natus neque nesciunt nobis perferendis perspiciatis quaerat sapiente. Asperiores distinctio eius inventore maxime officiis pariatur sapiente.
                  </p>
                  <div className="etc">
                    <span>2020-10-23 13:25 작성됨</span>
                  </div>
                </li>

                <li className="recommend__item">
                  <h4>완두콩님 댓글입니다.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum inventore itaque libero numquam totam unde. Assumenda beatae blanditiis consectetur culpa cum distinctio dolores eaque earum eos esse hic inventore ipsam iste itaque iusto laboriosam minima molestiae, molestias necessitatibus officiis pariatur provident rem sint vero vitae? A accusamus aspernatur, autem consequuntur dolores dolorum eaque earum error est et fuga fugit in iste magnam nesciunt nobis obcaecati placeat quae quidem quis quod saepe sequi similique sint soluta suscipit voluptatem voluptatibus? Adipisci cupiditate, deleniti enim error libero natus neque nesciunt nobis perferendis perspiciatis quaerat sapiente. Asperiores distinctio eius inventore maxime officiis pariatur sapiente.
                  </p>
                  <div className="etc">
                    <span>2020-10-23 13:25 작성됨</span>
                  </div>
                </li>
              </ul>

              <div className="comments__form">
                <input type="text" placeholder="댓글을 입력해주세요."/>
                <button className="submit">전송</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          title={'댓글 쓰기'}
          onClickClose={() => setOpenModal(false)}
        >
          <div className="_modal__row">
            <label htmlFor="">제목</label>
            <div className="input">
              <input type="text" placeholder={'댓글 제목'}/>
            </div>
          </div>

          <div className="_modal__row mt-10">
            <label htmlFor="">내용</label>
            <div className="input">
              <textarea name="" id="" ></textarea>
            </div>
          </div>

          <div className={'_modal__actions'}>
            <button className={'submit'}>신청하기</button>
            <button>취소하기</button>
          </div>
        </Modal>
      )}

    </>
  );
};

export default Communication;
