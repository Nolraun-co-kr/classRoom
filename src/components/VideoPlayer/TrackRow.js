import React, { useState, useEffect } from 'react';

const TrackRow = ({
  start,
  end,
  text,
  currentTime
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentTime >= start && currentTime < end) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentTime]);

  return (
    <button className={`${active ? 'active' : ''} trackText`} data-start={start}>
        {text}
    </button>
  );
};

export default TrackRow;
