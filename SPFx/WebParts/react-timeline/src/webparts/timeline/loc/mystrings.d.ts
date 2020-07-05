declare interface ITimelineWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  ListNameFieldLabel: string;
  LayoutFieldLabel: string;
  ShowImageFieldLabel: string;
  ShowDescriptionFieldLabel: string;
  DateFormatFieldLabel: string;
  SortEventsFieldLabel: string;
}

declare module 'TimelineWebPartStrings' {
  const strings: ITimelineWebPartStrings;
  export = strings;
}
