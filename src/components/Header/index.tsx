import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./style";
import  coffeeLogo  from "../../assets/logo-coffee.svg"
import { MapPin,  ShoppingCart} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {

    const { cartQuantity } = useCart()

    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={coffeeLogo} />
                </NavLink>


                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={28} weight="fill" />
                        Rio de Janeiro, RJ
                    </HeaderButton>
                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                            { cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}