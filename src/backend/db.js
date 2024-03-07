const items = {
  0: {
    name: "Иголки",
    amount: 24,
    length: "18мм",
  },
  1: {
    name: "Нитки",
    amount: 10,
    length: "20м",
    color: "Синий",
  },
};

const local_datas = {
  slots: {
    1: {
      name: "Ящик 1",
      items: [items[0], items[1]],
    },
    2: {
      name: "Ящик 2",
      items: [],
    },
    3: {
      name: "Ящик 3",
      items: [],
    },
  },
  "slots/1": slots[1],
  "slots/2": slots[2],
  "slots/3": slots[3],
};

export default {
  fetch: function (endpoint) {
    return local_datas[endpoint];
  },
};
