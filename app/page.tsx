import Head from "next/head";
import CheckoutForm from "./components/CheckoutForm";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Head>
        <title>Checkout Form</title>
      </Head>
      <CheckoutForm />
    </div>
  );
}
