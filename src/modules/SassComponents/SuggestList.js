const SuggestList = ({ suggestions, onSelect, focusProps }) => {
  return (
    <div {...focusProps} className="suggest-root">
      {suggestions.map((suggest, index) => (
        <div
          className={`suggest-item ${
            index % 2 === 0 && "suggest-item-border-bottom"
          }`}
          onClick={(e) => onSelect(e, suggest)}
          key={suggest}
        >
          {suggest}
        </div>
      ))}
    </div>
  );
};

export default SuggestList;
