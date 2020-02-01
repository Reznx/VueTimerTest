import store from "../store";

export default function dateFilter(value) {
  const options = {};
  options.hour = "2-digit";
  options.minute = "2-digit";
  options.second = "2-digit";

  const locale = store.getters.info.locale || "ru-RU";
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}
