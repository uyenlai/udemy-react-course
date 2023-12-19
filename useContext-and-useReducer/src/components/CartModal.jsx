import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { CartContext } from "../store/shopping-cart-context";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  const { items, updateCartItemQuantity } = useContext(CartContext);

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={items} updateCartItemQuantity={updateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
