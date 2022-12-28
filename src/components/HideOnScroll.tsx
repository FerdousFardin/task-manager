import { Slide, useScrollTrigger } from "@mui/material";

interface HideOnScrollProps {
  children: React.ReactElement;
}
function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
