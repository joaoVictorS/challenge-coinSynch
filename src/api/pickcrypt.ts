import { Cryptocoins } from '@/services/Cryptocoins';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers: {
    'X-CoinAPI-Key': '9989CFF1-CFF1-4E5F-9EC1-5AFA37D7E9EC',
  },
});

export async function getCryptos(): Promise<Cryptocoins[]> {
  try {
    const response = await api.get<Cryptocoins[]>('v1/assets/BTC,ETH,NMC,XRP,DOGE,DGB,DOGE,BAC,BLZ,DASH,ETC', {
      params: {
        type_is_crypto: 1,
        limit: 10
      },

    });
    const data = response.data;
    data.length = 10

    return data.map((icon) => ({ ...icon, id_icon: icon.id_icon.toLowerCase().replace(/-/g, "") }));
  } catch {
    return [];
  }

}

export async function sendEmail(): Promise<boolean> {
  try {
    const response = await api.get<Cryptocoins[]>('v1/assets/BTC,ETH,LTC,XRP,DOGE,DGB,PAK,BAC,BLZ,DASH,ETC', {
      params: {
        type_is_crypto: 1,
        limit: 10
      },

    });
    const data = response.data;
    data.length = 10

    return response.status== 200;

  } catch {
    return false;
  }

}

