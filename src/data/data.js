const products = [
  {
    id: "1",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "pizza",
  },
  {
    id: "2",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "pasta",
  },
  {
    id: "3",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "soup",
  },
  {
    id: "4",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/middlePizza.png",
    category: "salat",
  },
  {
    id: "5",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "drink",
  },
  {
    id: "6",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "desert",
  },
  {
    id: "7",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "bakalea",
  },
  {
    id: "8",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "antipasta",
  },
  {
    id: "9",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "10",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "11",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "12",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "13",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "combo",
  },
  {
    id: "14",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "combo",
  },
  {
    id: "15",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "16",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "combo",
  },
  {
    id: "17",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "pizza",
  },
  {
    id: "18",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "new",
    img: "/newPizza.png",
    category: "pizza",
  },
  {
    id: "19",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "pizza",
  },
  {
    id: "20",
    title: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count: 0,
    status: "old",
    img: "/oldPizza.png",
    category: "pizza",
  },
];

export default products;
