import React from 'react';
import SlideList from './SlideList';

const Communication = () => {
  return (
    <div className="programDetail__body">
      <SlideList />
      <div className="programDetail__comment">
        <header>
          <h2>댓글 32개</h2>

          <button>댓글쓰기</button>
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
  );
};

export default Communication;
