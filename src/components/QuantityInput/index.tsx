import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantifyInputContainer } from "./style";

interface QuantityInputProps{
    size?: "small" | "medium",
    quantity:number,
    onIncrease: () => void,
    onDecrease: () => void,
}

export function QuantityInput({size = "medium", quantity, onIncrease, onDecrease}: QuantityInputProps){
    return(
        <QuantifyInputContainer size={size}>
            <IconWrapper disabled={quantity == 1} onClick={onDecrease}>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input type="number" readOnly value={quantity}></input>
            <IconWrapper onClick={onIncrease}>
                <Plus size={14} weight="fill" />
            </IconWrapper>
        </QuantifyInputContainer>
    )
}