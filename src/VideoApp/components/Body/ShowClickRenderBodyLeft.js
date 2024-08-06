import React,{useState} from "react";

const ShowClickRenderBodyLeft = (props) => {
  const [visible, setVisible] = useState(6);
  const showClick = () => {
    setVisible(visible + 6);
  };
  return <>{props.render(visible, showClick)}</>;
};
export default ShowClickRenderBodyLeft;
