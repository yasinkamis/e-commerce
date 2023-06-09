import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-[#D14D72] mb-8">SSS</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              İade şartlarınız nedir?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Ürünü kiraladıktan sonra iade etmek isterseniz, belirtilen iade
                talimatlarına uyarak aynı şekilde, 14 gün içerisinde geri
                göndermelisiniz. İade süreci hakkında daha fazla bilgiyi
                profil-iadeler kısmında bulabilirsiniz. İade politikamızı daha
                detaylı incelemek isterseniz sayfanın alt kısmında yer alan
                Politikalarımız kısmını inceleyebilirsiniz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Siparişimi nasıl takip ederim?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Siparişlerinizin durumunu, kargo sürecini, iade sürecini
                profil-siparişlerim kısmından takip edebilirsiniz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Müşteri desteğiyle nasıl iletişim kurabilirim?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Müşteri desteğimizle kipkira54@gmail.com adresinden veya
                +905531066409 numaralı telefondan, haftaiçi 09:00-17:00 arasında
                dilediğiniz gibi iletişime geçebilirsiniz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Siparişimi değiştirebilir veya iptal edebilir miyim?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Siparişiniz elinize daha ulaşmadıysa siparişinizi dilediğiniz
                gibi değiştirebilir veya iptal edebilirsiniz ancak siparişiniz
                elinize ulaştıktan sonra değiştirmek veya iptal etmek mümkün
                değildir. Bunun yerine ürün iadesi belirtilen koşullara uyuyorsa
                dilediğiniz gibi iade edebilirsiniz. İade politikamızı daha
                detaylı incelemek isterseniz sayfanın alt kısmında yer alan
                Politikalarımız kısmını inceleyebilirsiniz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Hangi şehirlerde hizmet sunuyorsunuz?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Şu anda sadece İstanbul, Ankara ve Sakarya illerinde hizmet
                sunmaktayız. İlerleyen zamanlarda hizmet ağımızı genişletmeyi ve
                daha fazla şehirde hizmet vermeyi planlıyoruz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Hangi ödeme yöntemlerini kabul ediyorsunuz?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Şu anda Visa, Mastercard, Troy, Stripe ve kapıda ödeme
                yöntemlerini kabul etmekteyiz.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(8)}
          >
            <span className="text-lg font-medium text-[#D14D72]">
              Ürünlerimi kiralatmak istiyorum ne yapabilirim?
            </span>
            {activeTab === 8 ? (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#D14D72]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 8 && (
            <div className="mt-4">
              <p className="text-base text-[#D14D72]">
                Ürünlerinizi kiralatmak için kiralatan üye olmanız ve sadece
                ürün eklemeniz yeterli olacaktır.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
