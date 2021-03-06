export enum DisplayDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
export interface Settings {
  isCookieConsentAccepted: boolean;
  isSoundEnabled: boolean;
  displayDirection: DisplayDirection;
  displayEmptyDays: boolean;
}
