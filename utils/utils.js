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