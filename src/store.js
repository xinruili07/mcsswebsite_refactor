import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Hotpot Tee',
        image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/4_mkx7sp.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/4_1.5_ratio_fd2jml.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD7963_PS_v4pmv3.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461943/MCSS/Merch/first-drop/photoshoot/_YWD7987_PS_h8xiub.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_INXwT8xX9fwwoh',
          M: 'sku_INXvtHR0RNOXzV',
          L: 'sku_INXxjpfLd43w7c',
          XL: 'sku_INXxSTdzNb3IxE',
        },
        path: 'hotpot-tee',
        dbName: 'white-tee',
      },
      {
        id: 2,
        name: 'Chopstick Tee',
        image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/5_p69diq.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/5_1.5_ratio_of0i2n.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD7609_fer2pc.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461944/MCSS/Merch/first-drop/photoshoot/_YWD7586_rzgie6.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOg0rVDe9Xgvr1',
          M: 'sku_IOg0OqhKSMzHN3',
          L: 'sku_IOg0Xc3Jp4PHE2',
          XL: 'sku_IOg0nP9c63XRzh',
        },
        path: 'chopstick-tee',
        dbName: 'white-tee',
      },
      {
        id: 3,
        name: 'Crane Tee',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/3_lbeljn.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/3_1.5_ratio_llbbyd.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD8167_PS_yaxsv3.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD8199_gcfcxg.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOg3CZqwKSMjfE',
          M: 'sku_IOg28u7xWn9Ayb',
          L: 'sku_IOg2WXxiVuEY0t',
          XL: 'sku_IOg2UlZG0ln08X',
        },
        path: 'crane-tee',
        dbName: 'white-tee',
      },
      {
        id: 4,
        name: 'Fruits Tee',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605457593/MCSS/Merch/first-drop/2_p9hi7c.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605462193/MCSS/Merch/first-drop/item-page/2_1.5_ratio_lkuylg.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD8117_PS_q1c1wx.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467410/MCSS/Merch/first-drop/photoshoot/_YWD8123_oozxrk.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 19,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOg4xIzzzCEemp',
          M: 'sku_IOg4HjJQV3A5mU',
          L: 'sku_IOg4gVCFHI1y90',
          XL: 'sku_IOg4ZBlXO5fsYd',
        },
        path: 'fruits-tee',
        dbName: 'white-tee',
      },
      {
        id: 5,
        name: 'White Panda Crewneck',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605459381/MCSS/Merch/first-drop/pandaW_zkq5kl.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/pandaW_1.5_ratio_x7ifkq.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD8232_PS_ezuumz.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467532/MCSS/Merch/first-drop/photoshoot/_YWD8267_PS_fllgfs.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 29,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOgKcVx3MZQBKc',
          M: 'sku_IOg62dXq2B07gW',
          L: 'sku_IOg6zTTnZkJ0Ak',
          XL: 'sku_IOg66Xpf2JtxoZ',
        },
        path: 'white-panda-crewneck',
        dbName: 'white-crewneck',
      },
      {
        id: 6,
        name: 'Black Panda Crewneck',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/pandaB_wyigb0.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/pandaB_1.5_ratio_k9sl80.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461944/MCSS/Merch/first-drop/photoshoot/_YWD7891_gu516u.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467532/MCSS/Merch/first-drop/photoshoot/_YWD8267_PS_fllgfs.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 29,
        size: ['S', 'M', 'L', 'XL'],
        sizeSku: {
          S: 'sku_IOg8L0XUELZ0hk',
          M: 'sku_IOg8rUgp2E45PY',
          L: 'sku_IOg8SbhSTZLOMs',
          XL: 'sku_IOg8Wrq1Yfn377',
        },
        path: 'black-panda-crewneck',
        dbName: 'black-crewneck',
      },
      {
        id: 7,
        name: 'Crane Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605568583/MCSS/Merch/first-drop/craneTOTE_nhgig1.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605466699/MCSS/Merch/first-drop/item-page/craneTOTE_1.5_ratio_nuda7d.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461944/MCSS/Merch/first-drop/photoshoot/_YWD8279_ll7gnx.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461944/MCSS/Merch/first-drop/photoshoot/_YWD8306_svr7ty.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgDMXf26andoj',
        },
        path: 'crane-tote',
        dbName: 'tote',
      },
      {
        id: 8,
        name: 'Fruits Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/fruitsTOTE_tp2rme.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467095/MCSS/Merch/first-drop/item-page/fruitsTOTE_1.5_ratio_mg6smu.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605462640/MCSS/Merch/first-drop/photoshoot/_YWD7842_PS_anui2w.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgDb2IWwDa25V',
        },
        path: 'fruits-tote',
        dbName: 'tote',
      },
      {
        id: 9,
        name: 'Hotpot Tote Bag',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/v1605459725/MCSS/Merch/first-drop/hotpotTOTE_xkcbdg.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467095/MCSS/Merch/first-drop/item-page/hotpotTOTE_1.5_ratio_uyhkm3.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461944/MCSS/Merch/first-drop/photoshoot/_YWD7828_lwlze7.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605461945/MCSS/Merch/first-drop/photoshoot/_YWD7811_myaaei.jpg' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 14,
        size: ['ONE SIZE'],
        sizeSku: {
          'ONE SIZE': 'sku_IOgEEJRLrHGzmc',
        },
        path: 'hotpot-tote',
        dbName: 'tote',
      },
      {
        id: 10,
        name: 'MCSS Membership Card',
        image:
          'https://res.cloudinary.com/die52atcc/image/upload/c_pad,h_375,w_375/v1603139752/MCSS/card2020_ap1nc4.png',
        displayImages: [
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605467096/MCSS/Merch/first-drop/item-page/MCSS_card_2020_1.5_ratio_jqledp.png' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605468388/MCSS/Merch/first-drop/item-page/card-back_f2ciq0.jpg' },
          { image: 'https://res.cloudinary.com/die52atcc/image/upload/v1605468257/MCSS/Merch/first-drop/item-page/Screen_Shot_2020-11-15_at_2.23.20_PM_qnbjrt.png' },
        ],
        description: '100% Organic soft cotton. \nSelf fabric handles \nSizing: 48cm x 43cm',
        price: 3,
        size: ['E-CARD'],
        sizeSku: {
          'E-CARD': 'price_1HXDz9KCEqBnqoVgoqEewCco',
        },
        path: 'membership-card',
        dbName: 'membership-card',
      },
    ],

    StoreCart: [],
  },
  getters: {
    products: state => state.products,
    StoreCart: state => state.StoreCart,
  },
  mutations: {
    ADD_Item(state, item) {
      // eslint-disable-next-line max-len
      const record = state.StoreCart.find(product => product.itemName === item.itemName && product.itemSize === item.itemSize);
      if (!record) {
        state.StoreCart.push({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemSize: item.itemSize,
          itemPrice: item.itemPrice,
          itemSku: item.itemSku,
          itemDbName: item.itemDbName,
          quantity: 1,
        });
      } else {
        record.quantity += 1;
      }
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
    RESET_Cart(state) {
      state.StoreCart = [];
    },
  },
  actions: {
    addItem(context, item) {
      // console.log(name, image, price, size);
      context.commit('ADD_Item', item);
    },

    removeItem(context, index) {
      context.commit('REMOVE_Item', index);
    },
    resetCart(context) {
      context.commit('RESET_Cart');
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
