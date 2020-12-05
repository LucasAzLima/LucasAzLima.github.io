import { observable, action } from 'mobx';

// const APPLICATION_BASE_PATH = 'http://localhost:3000';
const APPLICATION_BASE_PATH = 'https://lucasazlima.github.io';

class NavigationState {
  @observable url: string = window.location.pathname;

  @action updateActiveUrl = (url: string) => {
    this.url = `${APPLICATION_BASE_PATH}${url}`;
  };

  @action goTo = (url: string) => {
    this.updateActiveUrl(url);
    window.location.href = `${APPLICATION_BASE_PATH}${url}`;
  };
}

const navigationState = new NavigationState();
export default navigationState;
