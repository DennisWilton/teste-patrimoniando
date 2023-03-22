import { ref, reactive } from 'vue';

type AssetSymbol = string;
type AssetInfo = {
  symbol: AssetSymbol;
  priceUsd: number;
  name: string;
};

class CryptoManager {
  currentAsset = ref('BTC');
  assetInfoMap = reactive(new Map<AssetSymbol, AssetInfo>());

  changeSymbol(assetSymbol: string) {
    this.currentAsset.value = assetSymbol;
  }

  getAssetInfo(assetSymbol: AssetSymbol) {
    return this.assetInfoMap.get(assetSymbol);
  }

  getAssetInfoForCurrentAsset() {
    return this.assetInfoMap.get(this.currentAsset.value);
  }

  updateAssetInfo(assetInfo: AssetInfo | AssetInfo[]) {
    [assetInfo].flat().forEach((assetInfo) => {
      this.assetInfoMap.set(assetInfo.symbol, assetInfo);
    });
  }
}

export default new CryptoManager();
