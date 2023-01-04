export const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};
  
export const truncate = (str, num) => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
};

export const filterInt = (value) => {
    if(value == null) return null
    if (/^(-|\+)?(\d+|Infinity)$/.test(value))
      return Number(value);
    return NaN;
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function xof(value) {
  return new Intl.NumberFormat('fr-FR', {style: 'currency', currency:'XOF'}).format(value)
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month}-${day}`;
}

export function getMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short' });
}

export function getDay(dateString) {
    const date = new Date(dateString);
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return day;
}