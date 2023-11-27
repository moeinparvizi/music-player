import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const IOSSlider = styled(Slider)(({ theme }) => ({
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    display: 'none',
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#fff",
  },
  "& .MuiSlider-track": {
    border: '1px solid white'
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#fff",
    border: '1px solid white'
  },
}));

export default function Sliders({ ...props }) {
  return <IOSSlider aria-label="ios slider" defaultValue={60} {...props} />;
}
