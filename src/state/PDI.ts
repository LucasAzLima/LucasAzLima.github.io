import { observable, action } from 'mobx';

class SelectUnidade {
  @observable currentUnit: number = 0;

  @action setcurrentUnit = (newU: number) => {
    this.currentUnit = newU;
  };
}

const selectUnidade = new SelectUnidade();
export { selectUnidade };
