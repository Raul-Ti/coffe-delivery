import { Button } from "../../../../../components/Button";
import { RegularText } from "../../../../../components/Typography";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "../style";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection(){

    const { cartItemsTotal, cartQuantity } = useCart()

    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const itemTotalFormatted = formatMoney(cartItemsTotal)
    const deliveryTotalFormatted = formatMoney(DELIVERY_PRICE)
    const cartTotalFormatted = formatMoney(cartTotal)

    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R${itemTotalFormatted}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R${deliveryTotalFormatted}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R${cartTotalFormatted}</RegularText>
            </div>

            <Button 
                text="Confirmar Pedido" 
                disabled={cartQuantity <= 0} 
                type="submit" 
            />
        </ConfirmationSectionContainer>
    )
}