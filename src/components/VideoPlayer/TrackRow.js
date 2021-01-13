import React, { useState, useEffect } from 'react';

const TrackRow = ({
  start,
  end,
  text,
  currentTime,
  setCurrentTime
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
    <button className={`trackText ${active ? 'active' : ''}`} onClick={() => setCurrentTime(start)}>
        {text}
    </button>
  );
};

export default TrackRow;
