export const getTestId = (testId: string, testIdModifier: string) => `${testId}--${testIdModifier}`;

export const getTestIdSelector = (testId: string) => `[data-testid='${testId}']`;
