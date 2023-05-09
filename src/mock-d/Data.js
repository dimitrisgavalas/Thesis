export const ComputerScienceData = {
  getProductsData() {
    return [
      {
        id: "2000",
        code: "f230fh0g3",
        name: "Web 3.0",
        description: "Blockchain Tech",
        image: "bamboo-watch.jpg",
        price: 750,
        category: "Programming",
        ecourseLocation: "Online",
        rating: 5,
      },
      {
        id: "2001",
        code: "f230fh0g3",
        name: "Python for Beginners",
        description: "Programming for Beginners",
        image: "bamboo-watch.jpg",
        price: 750,
        category: "Programming",
        ecourseLocation: "Online",
        rating: 5,
      },
      {
        id: "2001",
        code: "f230fh0g3",
        name: "Python Intermidiate",
        description: "Programming for Beginners",
        image: "bamboo-watch.jpg",
        price: 750,
        category: "Programming",
        ecourseLocation: "Online",
        rating: 5,
      },
    ];
  },

  getProductsWithOrdersData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Programming",
        ecourseLocation: "Hybrid",
        rating: 5,
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
