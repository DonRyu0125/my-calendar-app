interface Cal_event {
  "event-date": string;
  "event-start": string;
  "event-end": string;
  "event-name": string;
  "event-desc": string;
  "event-loc": string;
}

interface Day_obj {
  day: number;
  month: number;
  year: number;
}

export type { Cal_event, Day_obj };
