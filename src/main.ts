import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import routerOptions from './router';
import PositionManager from './app/PositionManager/PositionManager';
import CoincapService from './app/CoincapService/CoincapService';
import CryptoManager from './app/CryptoManager/CryptoManager';
import { RATES_ID } from './config';
import RateManager from './app/RateManager/RateManager';
import { Position } from './app/PositionManager/Position';

const fakePosition = PositionManager.createFakePosition({
  symbol: 'BTC',
  numOperations: Math.floor(Math.random() * 30),
});
PositionManager.updatePosition({
  position: fakePosition,
  symbol: 'BTC',
});

const coincapService = new CoincapService();
coincapService.getAvailableAssets().then((response) => {
  if (response) {
    CryptoManager.updateAssetInfo(response.data.data);
    console.log(CryptoManager);
  }
});

coincapService.getRate(RATES_ID['BRL']).then((response) => {
  if (response) {
    console.log('Setted rate', response);
    RateManager.setRate('BRL', response.rate);
  }
});

createApp(App).use(routerOptions).mount('#app');
