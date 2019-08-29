export const changeHeadLineAndStoryLine = headline => {
  return {
    type: 'HEADLINE_CHANGE',
    payload: headline,
  };
};
