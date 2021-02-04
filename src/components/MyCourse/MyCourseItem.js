import React from 'react';
import { Link } from 'react-router-dom';

const MyCourseItem = ({
  tags,
  ai,
  title,
  description
}) => {
  return (
    <li className={'_col-list-item'}>
      <Link to={'/'}>
        <div className="tags">
          {tags.map((tag, index) => <span key={index} className={tag.class}>{tag.name}</span>)}
          {/* <span className={'tag1'}>수료증</span> */}
          {/* <span className={'tag2'}>기초소양</span> */}
          {ai && <span className={'tag3'}>AI추천</span>}
        </div>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </Link>
    </li>
  );
};

export default MyCourseItem;
