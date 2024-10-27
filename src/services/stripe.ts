import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51K419pFvnccm1W1dtVv2ap6REmrRb59bOaEvhgt16cgpsEIsWhKdpTvlJJKZgWbxfnAxAzrzu01v2RmbzhxU3dSv007YWY0nR6');

// Prix fixes de Stripe pour chaque bundle
const STRIPE_PRICES = {
  'frea-1': 'price_1QDXEhFvnccm1W1d956Yn9Yy',  // Pack de 1
  'frea-6': 'price_1QDYJzFvnccm1W1db8Na0vP3',  // Pack de 6
  'frea-12': 'price_1QDYLyFvnccm1W1d2UqKefLR'  // Pack de 12
};

export const createCheckoutSession = async (items: any[]) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Failed to load Stripe');

    const lineItems = items.map(item => ({
      price: STRIPE_PRICES[item.id],
      quantity: item.quantity
    }));

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      shippingAddressCollection: {
        allowedCountries: ['FR', 'BE', 'DE', 'IT', 'ES', 'CH', 'GB'],
      },
      billingAddressCollection: 'required',
      locale: 'fr',
    });

    if (error) {
      console.error('Error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in checkout:', error);
    throw error;
  }
};