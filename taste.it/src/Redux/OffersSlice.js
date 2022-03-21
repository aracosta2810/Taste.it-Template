import { createSlice } from "@reduxjs/toolkit";

const offersslice = createSlice({
    name:"offers",
    initialState:{
        food : [
            {section:'Breakfast', icons: ['flaticon-bread','flaticon-breakfast'], offers: [
              {urlImg: 'breakfast-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'breakfast-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'breakfast-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
            {section:'Lunch', icons: ['flaticon-pizza','flaticon-chicken'], offers: [
              {urlImg: 'lunch-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'lunch-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'lunch-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
            {section:'Dinner', icons: ['flaticon-omelette','flaticon-burger'], offers: [
              {urlImg: 'dinner-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'dinner-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'dinner-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
            {section:'Desserts', icons: ['flaticon-cupcake','flaticon-ice-cream'], offers: [
              {urlImg: 'dessert-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'dessert-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'dessert-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
            {section:'Wine Card', icons: ['flaticon-wine','flaticon-wine-1'], offers: [
              {urlImg: 'wine-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'wine-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'wine-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
            {section:'Drinks & Tea', icons: ['flaticon-wine','flaticon-wine-1'], offers: [
              {urlImg: 'drink-1.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'drink-2.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
              {urlImg: 'drink-3.jpg', title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, isEspecial: 1},
            ]},
          ]
    },
    reducers:{
      SET_OFFERS : (state, action) => {
        state.food = action.payload
      }
    }
})

export const {SET_OFFERS} = offersslice.actions

export const selectOffers = (state) => state.offers.food;

export default offersslice.reducer;