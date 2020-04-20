export const getThemeStyle = (theme) => {
  switch (theme) {
    case 'darkTheme':
      return darkTheme;
    case 'lightTheme':
      return lightTheme;
  }
};

// dark and light theme styles
const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
  fontFamily: 'arial',
  placeholderTextColor: 'black',
  borderColor: 'black',
};

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
  fontFamily: 'arial',
  placeholderTextColor: 'white',
  borderColor: 'white',
};

export const applyTheme = (componentStyle, theme) => {
  const existingStyle = {...componentStyle};
  const themeStyle = getThemeStyle(theme);
  // get changes according to theme in three objects
  const keys = Object.keys(themeStyle);

  // iterate over each key and checks if style is defined then change the style according to theme

  keys.forEach((key) => {
    if (existingStyle.checkboxStyle && existingStyle.checkboxStyle[key]) {
      existingStyle.checkboxStyle[key] = themeStyle[key];
    }
    if (existingStyle.containerStyle && existingStyle.containerStyle[key]) {
      existingStyle.containerStyle[keys] = themeStyle[key];
    }
    if (existingStyle.titleStyle && existingStyle.titleStyle[key]) {
      existingStyle.titleStyle[key] = themeStyle[key];
    }
    if (existingStyle.iconStyle && existingStyle.iconStyle[key]) {
      existingStyle.iconStyle[key] = themeStyle[key];
    }
  });
  return existingStyle;
};
