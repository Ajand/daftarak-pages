import { useState } from "react";

const usePrompt = (title, Template) => {
  const [isOpen, setIsOpen] = useState(false);

  const hide = () => {
    setIsOpen(false);
  };

  const show = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    title,
    Template,
    hide,
    show,
  };
};

export default usePrompt;
