import React, { useState } from 'react';
import ListWrapper from '../../components/Layout/ListPage/Wrapper';
import { Link } from 'react-router-dom';
import CompleteCheck from '../../components/Home/ActivityState';

const activityList = [
  {
    name: '북마크',
    active: true,
    clicked: false,
    list: [
      {
        icon: 1,
        name: '미적분 이해하기',
        state: true
      },
      {
        icon: 2,
        name: '미적분을 풀어보세요',
        state: false
      },
      {
        icon: 3,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 4,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 5,
        name: '미적분 이해하기',
        state: false
      }
    ]
  },
  {
    name: '실시간',
    active: true,
    clicked: true,
    list: [
      {
        icon: 7,
        name: '베트남 현지인과 화상 교육',
        state: true
      },
      {
        icon: 7,
        name: '미적분 화상수업 ',
        state: true
      }
    ]
  },
  {
    name: '과제',
    active: false,
    clicked: true,
    list: [
      {
        icon: 8,
        name: '고대 베트남어 알아보기\n',
        state: false
      },
      {
        icon: 8,
        name: '화학실험식 팀프로젝트\n ',
        state: false
      }
    ]
  },
  {
    name: '구글',
    active: false,
    clicked: true,
    list: [
      {
        icon: 9,
        name: '베트남 실생활 협동과제',
        state: false
      }
    ]
  },
  {
    name: '알림',
    active: false,
    clicked: true,
    list: [
      {
        icon: 10,
        name: '3월 14일 휴강합니다\n',
        state: false
      },
      {
        icon: 10,
        name: '과제 지각시 3점 감점합니다.',
        state: false
      }
    ]
  }
];
const afterActivityList = [
  {
    name: '북마크',
    active: true,
    clicked: true,
    list: [
      {
        icon: 1,
        name: '미적분 이해하기',
        state: true
      },
      {
        icon: 2,
        name: '미적분을 풀어보세요',
        state: false
      },
      {
        icon: 3,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 4,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 5,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 6,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 7,
        name: '미적분 이해하기',
        state: false
      },
      {
        icon: 8,
        name: '미적분 이해하기',
        state: false
      }
    ]
  },
  {
    name: '실시간',
    active: true,
    clicked: true,
    list: [
      {
        icon: 7,
        name: '베트남 현지인과 화상 교육',
        state: true
      },
      {
        icon: 7,
        name: '미적분 화상수업 ',
        state: true
      }
    ]
  },
  {
    name: '과제',
    active: false,
    clicked: true,
    list: [
      {
        icon: 8,
        name: '고대 베트남어 알아보기\n',
        state: false
      },
      {
        icon: 8,
        name: '화학실험식 팀프로젝트\n ',
        state: false
      }
    ]
  },
  {
    name: '구글',
    active: false,
    clicked: true,
    list: [
      {
        icon: 9,
        name: '베트남 실생활 협동과제',
        state: false
      }
    ]
  },
  {
    name: '알림',
    active: false,
    clicked: true,
    list: [
      {
        icon: 10,
        name: '3월 14일 휴강합니다\n',
        state: false
      },
      {
        icon: 10,
        name: '과제 지각시 3점 감점합니다.',
        state: false
      }
    ]
  }
];

const MyLeaningActivity = ({ theme }) => {
  const [list, setList] = useState(activityList);

  const handleClickSetList = () => {
    setList(afterActivityList);
  };
  return (
    <div className={'home'}>
      <ListWrapper title={'내 학습활동'} options={[]}>
        <div className={'list3'}>
          <div className="_row">
            {
              list.map((activities, index) => {
                return (
                  <div className="_col" key={index}>
                    <div className={'_col-header'}>
                      <h3 className={activities.active ? 'active' : ''}>{activities.name}</h3>
                    </div>
                    <ul className={'_col-list'}>
                      {activities.list.map((activity, _index) => (
                        <li className={'_col-list-item'} key={_index}>
                          <div className={'_col-list-item-header'}>
                            <img src={`/assets/images/activity${activity.icon}-icon${theme === 'dark' ? '2' : ''}.png`} alt=""/>
                          </div>
                          <Link to={'/'}>
                            <h3>{activity.name}</h3>
                            <div className={'mt-3'}>
                              <CompleteCheck state={activity.state} theme={theme} />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {!activities.clicked ? (<button className={'_col-more'} onClick={handleClickSetList}>+ 더보기</button>) : (<button className={'_col-more'}>-</button>)}
                  </div>
                );
              })
            }

          </div>
        </div>
      </ListWrapper>
    </div>
  );
};

export default MyLeaningActivity;
