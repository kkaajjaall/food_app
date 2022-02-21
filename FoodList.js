import React from 'react';
import Card from './resources/js/react/Component/FoodList/Card';
import classes from './FoodList.module.css';
import FoodItem from './resources/js/react/Component/FoodList/FoodItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const FoodList = () => {
    const mealsList = DUMMY_MEALS.map(meal => <FoodItem
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price} />);
    return (
        <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
        </section>
    )
}
export default FoodList;