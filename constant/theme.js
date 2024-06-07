const COLORS = {
  primary: "#18191A",
  secondary: "#343536",
  tertiary: "#FF7754",

  black: "#000",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  poppins: "Poppins",
  poppinsMedium: "PoppinsMedium",
  agdasima: "Agdasima",
  agdasimaBold: "AgdasimaBold",
  montserrat: "Montserrat",
  montserratBold: "MontserratBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 15,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  insetIconSmall: {
    height: 20,
    width: 20,
  },
  insetIconMedium: {
    height: 25,
    width: 25,
  },
  insetIconLarge: {
    height: 30,
    width: 30,
  },
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
