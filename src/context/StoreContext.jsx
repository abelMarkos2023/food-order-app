import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [items,setItems] = useState({})

   const subTotal = food_list.filter(item =>  Object.keys(items).includes(item._id)).reduce((acc,item) => acc + item.price * items[item._id],0)
  const delivery = subTotal > 0 ?10 :0;

    const addToCart = id => {

        if(Object.keys(items).includes(id)){
            setItems(prev => ({...prev,[id]:prev[id]+1}))
        }
        else{
            setItems(prev =>({...prev,[id]:1}))
        }
    }
    const removeFromCart = id => {
        if(items[id] > 1){
            setItems(prev => ({...prev,[id]:prev[id]-1}))
            return;
        }
        delete items[id];
        setItems({...items})
        return;
    }
 
    const contextValue = {
        food_list,
        items,
        setItems,
        addToCart,
        removeFromCart,
        subTotal,
        delivery
    }

    useEffect(()=>{
        console.log(items)
    },[items])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider