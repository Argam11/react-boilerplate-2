export const SLICK_SLIDER_SETTINGS = {
  infinite: true,
  speed: 500,
  slidesToShow: window.innerWidth > 600 ? 3 : 1,
  draggable: false,
  className: "slick-slider",
} as const;
