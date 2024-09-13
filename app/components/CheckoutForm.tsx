"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaCreditCard,
  FaPaypal,
  FaStripe,
  FaBarcode, // Importando o ícone para o PIX
} from "react-icons/fa";

const CheckoutForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [showCreditCardForm, setShowCreditCardForm] = useState(true);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingMethod(e.target.value);
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    setShowCreditCardForm(selectedMethod === "credit-card");
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-24 bg-white shadow-md rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Finalização da Compra
      </h2>

      {/* Tabs de Etapas */}
      <div className="flex flex-col md:flex-row justify-center mb-8">
        <div
          className={`w-full md:w-1/3 text-center pb-2 border-b-4 uppercase text-sm ${
            currentStep === 1 ? "border-orange-600" : "border-gray-300"
          }`}
        >
          Informações
        </div>
        <div
          className={`w-full md:w-1/3 text-center pb-2 border-b-4 uppercase text-sm ${
            currentStep === 2 ? "border-orange-600" : "border-gray-300"
          }`}
        >
          Pagamento
        </div>
        <div
          className={`w-full md:w-1/3 text-center pb-2 border-b-4 uppercase text-sm ${
            currentStep === 3 ? "border-orange-600" : "border-gray-300"
          }`}
        >
          Revisão
        </div>
      </div>

      {/* Conteúdo por Etapa */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-8"
        >
          {/* Endereço de Entrega */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Endereço de Entrega</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Endereço"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="text"
                placeholder="Apto/Sala"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Cidade"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Estado"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="CEP"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="País"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </section>
          <button
            onClick={nextStep}
            className="w-full py-3 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Próximo: Pagamento
          </button>
        </motion.div>
      )}

      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-8"
        >
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Opções de Pagamento</h3>
            <div className="flex flex-col space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={handlePaymentChange}
                  className="form-radio text-orange-600"
                />
                <FaCreditCard className="text-orange-600" />
                <span>Cartão de Crédito</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={handlePaymentChange}
                  className="form-radio text-orange-600"
                />
                <FaPaypal className="text-orange-600" />
                <span>PayPal</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={handlePaymentChange}
                  className="form-radio text-orange-600"
                />
                <FaStripe className="text-orange-600" />
                <span>Stripe</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="pix"
                  checked={paymentMethod === "pix"}
                  onChange={handlePaymentChange}
                  className="form-radio text-orange-600"
                />
                <FaBarcode className="text-orange-600" />
                <span>PIX</span>
              </label>
            </div>
          </section>
          {/* Mostrar formulário de cartão apenas se o método for cartão de crédito */}
          {showCreditCardForm && (
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Detalhes do Cartão</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome no Cartão"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Data de Validade"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="CPF"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </section>
          )}
          <button
            onClick={nextStep}
            className="w-full py-3 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Próximo: Revisão
          </button>
          <button
            onClick={prevStep}
            className="w-full py-3 mt-4 bg-gray-600 text-white rounded-md font-bold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Voltar: Informações
          </button>
        </motion.div>
      )}

      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-8"
        >
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Resumo do Pedido</h3>
            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span>Item 1</span>
                <span>R$20,00</span>
              </div>
              <div className="flex justify-between">
                <span>Item 2</span>
                <span>R$15,00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>R$35,00</span>
              </div>
            </div>
          </section>
          <motion.button
            className="w-full py-3 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Finalizar Pedido
          </motion.button>
          <button
            onClick={prevStep}
            className="w-full py-3 mt-4 bg-gray-600 text-white rounded-md font-bold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Voltar: Pagamento
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CheckoutForm;
