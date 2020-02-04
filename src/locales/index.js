import EnglishLocale from "./en-us";
import TraditionalChineseLocale from "./zh-tw";

const getLocaleData = language => {
  switch (language) {
    case "zh-tw":
      return TraditionalChineseLocale;

    default:
      return EnglishLocale;
  }
};

export default getLocaleData;
