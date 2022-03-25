import { createSlice } from "@reduxjs/toolkit";

const offersslice = createSlice({
    name:"offers",
    initialState:{
        food : [
            {section:'Breakfast', icons: ['flaticon-bread','flaticon-breakfast'], offers: [
            ]},
            {section:'Lunch', icons: ['flaticon-pizza','flaticon-chicken'], offers: [
            ]},
            {section:'Dinner', icons: ['flaticon-omelette','flaticon-burger'], offers: [
            ]},
            {section:'Desserts', icons: ['flaticon-cupcake','flaticon-ice-cream'], offers: [
            ]},
            {section:'Wine Card', icons: ['flaticon-wine','flaticon-wine-1'], offers: [
            ]},
            {section:'Drinks & Tea', icons: ['flaticon-wine','flaticon-wine-1'], offers: [
            ]},
          ]
    },
    reducers:{
      SET_OFFERS : (state, action) => {
        let data = action.payload

        data.forEach(item => {
          switch (item.section.toLowerCase()) {
            case 'breakfast':
              item.icons = ['flaticon-bread','flaticon-breakfast']
              break;
            case 'lunch':
              item.icons = ['flaticon-pizza','flaticon-chicken']
              break;
            case 'dinner':
              item.icons = ['flaticon-omelette','flaticon-burger']
              break;
            case 'desserts':
              item.icons = ['flaticon-cupcake','flaticon-ice-cream']
              break;
            case 'wine card':
              item.icons = ['flaticon-wine','flaticon-wine-1']
              break;
            case 'drinks & tea':
              item.icons = ['flaticon-wine','flaticon-wine-1']
              break;
            default:
              break;
          }
        })
        state.food = action.payload
        // console.log(data);
      }
    }
})

export const {SET_OFFERS} = offersslice.actions

export const selectOffers = (state) => state.offers.food;

export default offersslice.reducer;