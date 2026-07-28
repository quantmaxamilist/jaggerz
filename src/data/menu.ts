export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuSection {
  name: string;
  description?: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    name: 'Breakfast',
    description: 'Served 8:30am–11:30am',
    items: [
      {
        name: 'Bap / Wrap',
        description: 'Bacon, Sausage/Veggie Sausage, Egg — 1 item £5.00, 2 item £5.50, 3 item £6.00',
        price: '5.00',
      },
      {
        name: 'Baguette',
        description: 'Bacon, Sausage/Veggie Sausage, Egg — 1 item £5.50, 2 item £6.00, 3 item £6.50',
        price: '5.50',
      },
      {
        name: 'Breakfast Box',
        description: 'Sausage/Veggie Sausage, Bacon, Egg, Hash Brown, Beans, Mushrooms & Toast',
        price: '7.95',
      },
      { name: 'Croissant', price: '2.00' },
      { name: 'Pain au Chocolat', price: '2.50' },
      {
        name: 'Granola & Yoghurt',
        description: 'Granola & Greek Yoghurt Bowl with Fresh Fruit',
        price: '6.50',
      },
      {
        name: 'Any Hot Drink & a Pastry',
        price: '5.00',
      },
    ],
  },
  {
    name: 'Lunch',
    description: 'Served 11:30am–3:00pm',
    items: [
      {
        name: 'Baguettes or Wraps — Cold Fillings',
        description: 'Tuna Mayo, Cheese & Red Onion, Ham & Cheese, Coronation Chicken, Chicken Tikka',
        price: '5.85',
      },
      {
        name: 'Baguettes or Wraps — Hot Fillings',
        description: 'BBQ Chicken, Cajun Chicken, Chinese Chicken, Pesto Chicken, BBQ Pulled Pork, Beef Chilli',
        price: '6.85',
      },
      { name: 'Jacket Potato — Plain', price: '5.50' },
      { name: 'Jacket Potato — Cheese', price: '6.00' },
      { name: 'Jacket Potato — Cheese & Beans', price: '6.50' },
      { name: 'Jacket Potato — Any Cold Filling', price: '6.50' },
      { name: 'Jacket Potato — Any Hot Filling', price: '7.50' },
      { name: 'Rice Bowl — 1 meat', price: '8.25' },
      { name: 'Rice Bowl — 2 meat', price: '10.25' },
      { name: 'Rice Bowl — 3 meat', price: '12.00' },
      { name: 'Chicken Pesto Pasta', price: '8.00' },
      { name: 'Chicken Arrabbiata Pasta', price: '8.00' },
      { name: 'Hot Pasta Pots — Vegetarian option', price: '6.00' },
      { name: 'Sweet Jacket Potato Box — No Meat', price: '7.00' },
      { name: 'Sweet Jacket Potato Box — 1 Meat', price: '8.50' },
      { name: 'Sweet Jacket Potato Box — 2 Meat', price: '10.50' },
      { name: 'Sweet Jacket Potato Box — 3 Meat', price: '12.50' },
      { name: 'Pizza Slice — Margherita', price: '3.50' },
      { name: 'Pizza Slice — Pepperoni', price: '4.00' },
      { name: 'Pizza Slice — BBQ Chicken', price: '4.50' },
      { name: 'Salad Box — No Meat', price: '5.50' },
      { name: 'Salad Box — 1 Meat', price: '7.00' },
      { name: 'Salad Box — 2 Meat', price: '9.00' },
      { name: 'Salad Box — 3 Meat', price: '11.00' },
      { name: 'Homemade Oreo Cheesecake', price: '4.50' },
      { name: 'Homemade Strawberry Cheesecake', price: '4.50' },
    ],
  },
  {
    name: 'Drinks',
    description: 'Available all day',
    items: [
      {
        name: 'Hot Drinks',
        description: 'Latte, Cappuccino, Flat White, Mochaccino, Espresso, Americano, Hot Chocolate',
        price: '3.50',
      },
      { name: 'Tea', price: '3.00' },
      { name: 'Iced Coffees', price: '4.00' },
      {
        name: 'Milkshakes',
        description: 'Strawberry, Banana, Vanilla, Chocolate, Oreo',
        price: '5.00',
      },
      { name: 'Matcha', price: '4.00' },
    ],
  },
];
