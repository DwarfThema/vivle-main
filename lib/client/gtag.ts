export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID as string;

export const pageview = (url: URL) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value: value,
  });
};
