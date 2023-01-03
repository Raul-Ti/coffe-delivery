import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./style";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps{
    coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps){

    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease(){
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease(){
        changeCartItemQuantity(coffee.id, "decrease")
    }

    function handleRemoveCoffee(){
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity

    const formattedPrice = formatMoney(coffeeTotal)

    return(
        <CoffeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`}/>
                <div>
                    <RegularText> {coffee.name} </RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" quantity={coffee.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
                        <RemoveButton  type="button" onClick={handleRemoveCoffee}>
                            <Trash size={16} />
                            REMOVER                     
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeCartCardContainer>
    )
}