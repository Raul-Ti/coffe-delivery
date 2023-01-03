import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection.tsx";
import { DatailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees(){

    const { cartItems } = useCart()

    return(
        <SelectedCoffeesContainer>

            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DatailsContainer>
                {cartItems.map((item)=> (
                    <CoffeeCartCard key={item.id}  coffee={item} />
                ))}

                <ConfirmationSection />
            </DatailsContainer>
        </SelectedCoffeesContainer>
    )
}