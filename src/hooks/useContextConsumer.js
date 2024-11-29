import { useContext } from "react";
import {storeContext} from '../context/context'

export function useConsumer() {
    const provdier = useContext(storeContext)
    if(!provdier) {
        return {};
    }
    return provdier;
}