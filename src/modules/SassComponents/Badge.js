import { Close } from "@material-ui/icons";

const Tag = ({children, onDelete}) => {
  return (
    <div  className="badge-container">
      <div className="badge-text"> {children}</div>
      <div
        onClick={onDelete}
        className="badge-delete"
      >
        <Close className="badge-icon" />
      </div>
    </div>
  );
};

export default Tag;
