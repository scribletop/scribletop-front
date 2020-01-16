export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#08090a',
    '--foreground-secondary': '#41474d',
    '--foreground-tertiary': '#797c80',
    '--foreground-quaternary': '#f4faff',
    '--foreground-light': '#41474d',

    '--background-default': '#f4faff',
    '--background-secondary': '#a3b9cc',
    '--background-tertiary': '#5c7d99',
    '--background-light': '#ffffff',

    '--primary-default': '#5dfdcb',
    '--primary-dark': '#24b286',
    '--primary-light': '#b2ffe7',

    '--error-default': '#ef3e36',
    '--error-dark': '#800600',
    '--error-light': '#ffcecc',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#5c7d99',
    '--foreground-secondary': '#a3b9cc',
    '--foreground-tertiary': '#f4faff',
    '--foreground-quaternary': '#e5e5e5',
    '--foreground-light': '#ffffff',

    '--background-default': '#797c80',
    '--background-secondary': '#41474d',
    '--background-tertiary': '#08090a',
    '--background-light': '#41474d',

    '--primary-default': '#5dfdcb',
    '--primary-dark': '#24b286',
    '--primary-light': '#b2ffe7',

    '--error-default': '#ef3e36',
    '--error-dark': '#800600',
    '--error-light': '#ffcecc',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)',
  },
};
