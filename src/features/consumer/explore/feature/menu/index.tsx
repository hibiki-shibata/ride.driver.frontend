import ConsumerLayout from "../../../shared/layout/consumerLayout"
import AvailableMenu from "./component/availableMenu"
import { CartContextProvider } from "../shared/context/cartContext"

function ConsumerExploreMenu() {
    return (
        <ConsumerLayout>
            <CartContextProvider>
                <AvailableMenu />
            </CartContextProvider>
        </ConsumerLayout>
    )
}

export default ConsumerExploreMenu