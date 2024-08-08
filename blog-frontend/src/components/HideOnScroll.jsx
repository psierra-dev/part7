import {Slide, useScrollTrigger} from "@mui/material";

const HideOnScroll = (props) => {
  const {children} = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
