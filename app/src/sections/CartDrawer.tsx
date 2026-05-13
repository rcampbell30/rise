import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-white">
        <SheetHeader className="space-y-2.5 pb-4">
          <SheetTitle
            className="flex items-center gap-2 text-2xl"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            <ShoppingBag className="w-6 h-6 text-[#d4a373]" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-sm font-normal text-gray-500">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-full bg-[#f9f5f0] flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-[#d4a373]" />
            </div>
            <h3
              className="text-xl text-gray-900 mb-2"
              style={{ fontFamily: 'Bodoni Moda, serif' }}
            >
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6 max-w-xs">
              Discover our elegant mobility solutions and start your journey to
              greater independence.
            </p>
            <Button
              onClick={() => {
                setIsCartOpen(false);
                document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-auto py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-xl bg-[#f9f5f0] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-sm font-medium text-gray-900 truncate"
                        style={{ fontFamily: 'Bodoni Moda, serif' }}
                      >
                        {item.product.name}
                      </h4>
                      {item.selectedColor && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          Color: {item.selectedColor}
                        </p>
                      )}
                      <p className="text-[#d4a373] font-medium mt-1">
                        £{item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-2 bg-[#f9f5f0] rounded-full px-2 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        £{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-100 pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">£{totalPrice.toFixed(2)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">
                  {totalPrice >= 50 ? 'Free' : '£4.99'}
                </span>
              </div>

              <Separator />

              {/* Total */}
              <div className="flex justify-between">
                <span
                  className="text-lg"
                  style={{ fontFamily: 'Bodoni Moda, serif' }}
                >
                  Total
                </span>
                <span
                  className="text-xl text-[#d4a373]"
                  style={{ fontFamily: 'Bodoni Moda, serif' }}
                >
                  £
                  {totalPrice >= 50
                    ? totalPrice.toFixed(2)
                    : (totalPrice + 4.99).toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full btn-primary py-6 text-base"
                onClick={() => {
                  alert('Checkout functionality coming soon!');
                }}
              >
                Proceed to Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-gray-500 hover:text-[#d4a373] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
