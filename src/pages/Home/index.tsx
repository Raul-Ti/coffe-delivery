import { Intro } from "./components/intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./style";

export function HomePage(){
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}