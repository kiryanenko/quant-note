const { remote } = window.require('electron');
const settings = remote.require('electron-settings');

// Добавляет I18n в компонент
export function initI18n(component) {
    if (component.state === undefined) {
        component. state = {};
    }

    component.state.i18n = remote.require('./src/libs/i18n');
    component.onChangeLocale = () => component.setState({i18n: remote.require('./src/libs/i18n')});
    settings.watch('locale', component.onChangeLocale);
}
