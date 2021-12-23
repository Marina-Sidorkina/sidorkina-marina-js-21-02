interface ISettings {
  id: string;
}

const SETTINGS_RU = {
  id: 'Укажите ваш ID'
};

const SETTINGS_EN = {
  id: 'Please enter your ID'
};

const getRules = (settings: ISettings) => ({
  id: [
    { required: true, message: settings.id }
  ]
});

export const RULES = getRules(SETTINGS_RU);

export const RULES_EN = getRules(SETTINGS_EN);
