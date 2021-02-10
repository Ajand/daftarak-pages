const renderTime = (seconds) => {
  const renderTwoDigit = (count) => {
    if (count < 10) return `0${count}`;
    return count;
  };
  if (seconds < 60) return renderTwoDigit(seconds % 60);
  if (seconds < 3600)
    return `${renderTwoDigit(parseInt(seconds / 60))}:${renderTwoDigit(
      seconds % 60
    )}`;
  return `${parseInt(seconds / 3600)}:${renderTwoDigit(
    parseInt((seconds % 3600) / 60)
  )}:${renderTwoDigit(seconds % 60)}`;
};

export default renderTime;
