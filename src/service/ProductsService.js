const PRODUCTS = [
    {
        id: 1,
        name: "Apple",
        price: 79,
        image: require("../../src/images/apple.png"),
        description:
            "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
        quantity:15,
    },
    {
        id: 2,
        name: "Dragonfruit",
        price: 79,
        image: require("../../src/images/Dragonfruit.png"),
        description:
            "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
        quantity:15,
    },
    
    {
    id: 3,
    name: "Strawberry",
    price: 979,
    image: require("../../src/images/strawberry.jpg"),
    description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD",
    quantity:5,
    },

    {
        id: 4,
        name: "orange",
        price: 979,
        image: require("../../src/images/orange.png"),
        description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD",
        quantity:0,
        }
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}