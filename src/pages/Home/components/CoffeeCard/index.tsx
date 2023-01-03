import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./style";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo:string;
    price: number;
}

interface CoffeeCardProps{
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps){

    const [quantity, setQuantity] = useState(1)

    function handleIncrease(){
        setQuantity(state => state + 1)
    }

    function handleDecrease(){
        if(quantity > 1){
            setQuantity(state => state - 1)
        }
    }

    const { addCoffeeToCart } = useCart()

    function handleAddToCart(){
        const coffeeToAdd = {
            ...coffee,
            quantity
        }
        addCoffeeToCart(coffeeToAdd)
    }


    const formattedPrice = formatMoney(coffee.price)

    return(
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map(tag => (
                    <span id={`${coffee.id}${coffee.tags}`}>{tag}</span>
                ))}
            </Tags>
                <Name>{coffee.name}</Name>
                <Description> {coffee.description} </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput 
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}