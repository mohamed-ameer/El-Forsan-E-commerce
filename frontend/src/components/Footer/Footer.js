import React from 'react'
import { useTranslation } from "react-i18next";
import './Footer.css'
function Footer() {
  const [t,i18n]=useTranslation();
  return (
    <footer>
      <div className='container'>
        <div className='row g-3' style={i18n.language == 'ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}}>
          <div className='col-lg-4'>
            <div className='footer-aboutus' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
              <h3>{t('footer.about_us.title')}</h3>
              <p>{t('footer.about_us.content')}</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='footer-contactus' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
              <h3>{t('footer.contact_us.title')}</h3>
              <p><i className="fa-solid fa-location-dot"></i> {t('footer.contact_us.content')}</p>
              <div className='social-icons'>
                <a><i className="fa-brands fa-whatsapp"></i></a>
                <a><i className="fa-brands fa-google-plus-g"></i></a>
                <a><i className="fa-solid fa-phone-volume"></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='footer-payment' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
              <h3>{t('footer.payment_method')}</h3>
              <div className='payment-icons'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
              <path d="M10.35 16.122c0 0.678-0.539 1.194-1.222 1.194-0.511 0-0.889-0.289-0.889-0.833 0-0.678 0.528-1.222 1.206-1.222 0.517 0 0.906 0.317 0.906 0.861zM4.472 13.428h-0.261c-0.083 0-0.167 0.056-0.178 0.15l-0.239 1.484 0.456-0.017c0.611 0 1.083-0.083 1.194-0.789 0.128-0.745-0.344-0.828-0.972-0.828zM20.25 13.428h-0.25c-0.1 0-0.167 0.056-0.178 0.15l-0.233 1.484 0.444-0.017c0.722 0 1.222-0.167 1.222-1-0.006-0.589-0.533-0.617-1.006-0.617zM32 6.222v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM7.128 13.744c0-1.167-0.9-1.556-1.928-1.556h-2.222c-0.139 0-0.278 0.111-0.289 0.261l-0.911 5.672c-0.017 0.111 0.067 0.222 0.178 0.222h1.056c0.15 0 0.289-0.161 0.306-0.317l0.25-1.478c0.056-0.4 0.733-0.261 1-0.261 1.589 0 2.561-0.944 2.561-2.544zM11.806 14.233h-1.056c-0.211 0-0.222 0.306-0.233 0.456-0.322-0.472-0.789-0.556-1.317-0.556-1.361 0-2.4 1.194-2.4 2.511 0 1.083 0.678 1.789 1.761 1.789 0.5 0 1.122-0.272 1.472-0.661-0.028 0.083-0.056 0.261-0.056 0.345 0 0.128 0.056 0.222 0.178 0.222h0.956c0.15 0 0.278-0.161 0.306-0.317l0.567-3.572c0.017-0.106-0.067-0.217-0.178-0.217zM14.056 19.672l3.539-5.145c0.028-0.028 0.028-0.056 0.028-0.094 0-0.094-0.083-0.194-0.178-0.194h-1.067c-0.094 0-0.194 0.056-0.25 0.139l-1.472 2.167-0.611-2.083c-0.044-0.122-0.167-0.222-0.306-0.222h-1.039c-0.095 0-0.178 0.1-0.178 0.194 0 0.067 1.083 3.156 1.178 3.45-0.15 0.211-1.139 1.589-1.139 1.756 0 0.1 0.083 0.178 0.178 0.178h1.067c0.1-0.005 0.194-0.061 0.25-0.144zM22.906 13.744c0-1.167-0.9-1.556-1.928-1.556h-2.206c-0.15 0-0.289 0.111-0.306 0.261l-0.9 5.667c-0.011 0.111 0.072 0.222 0.178 0.222h1.139c0.111 0 0.194-0.083 0.222-0.178l0.25-1.611c0.056-0.4 0.734-0.261 1-0.261 1.578 0 2.55-0.944 2.55-2.544zM27.583 14.233h-1.056c-0.211 0-0.222 0.306-0.239 0.456-0.306-0.472-0.778-0.556-1.317-0.556-1.361 0-2.4 1.194-2.4 2.511 0 1.083 0.678 1.789 1.761 1.789 0.517 0 1.139-0.272 1.472-0.661-0.017 0.083-0.056 0.261-0.056 0.345 0 0.128 0.056 0.222 0.178 0.222h0.961c0.15 0 0.278-0.161 0.306-0.317l0.567-3.572c0.017-0.106-0.067-0.217-0.178-0.217zM30.222 12.383c0-0.111-0.083-0.194-0.178-0.194h-1.028c-0.083 0-0.167 0.067-0.178 0.15l-0.9 5.778-0.016 0.028c0 0.1 0.083 0.194 0.194 0.194h0.917c0.139 0 0.278-0.161 0.289-0.317l0.9-5.622zM25.222 15.261c-0.678 0-1.206 0.539-1.206 1.222 0 0.539 0.389 0.833 0.9 0.833 0.667 0 1.206-0.511 1.206-1.194 0.006-0.544-0.383-0.861-0.9-0.861z" fill="#0077b6"></path>
                </svg>
              </span>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
              <path d="M26.117 14.628c0 0 0.422 2.067 0.517 2.5h-1.855c0.183-0.495 0.889-2.417 0.889-2.417-0.011 0.017 0.183-0.506 0.294-0.828zM32 6.222v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM8.472 20.178l3.511-8.622h-2.361l-2.183 5.889-0.239-1.194-0.778-3.967c-0.128-0.55-0.522-0.706-1.011-0.728h-3.594l-0.039 0.172c0.878 0.222 1.661 0.544 2.344 0.95l1.989 7.5zM13.717 20.189l1.4-8.633h-2.233l-1.394 8.633zM21.489 17.367c0.011-0.983-0.589-1.733-1.872-2.35-0.783-0.395-1.261-0.661-1.261-1.067 0.011-0.367 0.406-0.745 1.283-0.745 0.728-0.017 1.261 0.156 1.661 0.328l0.2 0.094 0.306-1.867c-0.439-0.172-1.139-0.367-2-0.367-2.206 0-3.756 1.178-3.767 2.855-0.017 1.239 1.111 1.928 1.956 2.344 0.861 0.422 1.156 0.7 1.156 1.072-0.011 0.578-0.7 0.844-1.339 0.844-0.889 0-1.367-0.139-2.095-0.461l-0.294-0.139-0.311 1.939c0.522 0.239 1.489 0.45 2.489 0.461 2.344 0.005 3.872-1.156 3.889-2.944zM29.333 20.189l-1.8-8.633h-1.728c-0.533 0-0.939 0.156-1.167 0.717l-3.317 7.917h2.344c0 0 0.383-1.067 0.467-1.294h2.867c0.067 0.306 0.267 1.294 0.267 1.294z" fill="#0077b6"></path>
              </svg>
              </span>
              <span>
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"></path>
<path d="M38.379 24.1157C38.379 29.0386 34.3957 33.0294 29.4821 33.0294C24.5685 33.0294 20.5852 29.0386 20.5852 24.1157C20.5852 19.1928 24.5685 15.2019 29.4821 15.2019C34.3957 15.2019 38.379 19.1928 38.379 24.1157Z" fill="#F79F1A"></path>
<path d="M27.4033 24.1157C27.4033 29.0386 23.42 33.0294 18.5064 33.0294C13.5928 33.0294 9.6095 29.0386 9.6095 24.1157C9.6095 19.1928 13.5928 15.2019 18.5064 15.2019C23.42 15.2019 27.4033 19.1928 27.4033 24.1157Z" fill="#EA001B"></path>
<path d="M23.9942 17.0987C21.9183 18.7305 20.5858 21.2663 20.5858 24.1149C20.5858 26.9634 21.9183 29.5011 23.9942 31.1329C26.0701 29.5011 27.4026 26.9634 27.4026 24.1149C27.4026 21.2663 26.0701 18.7305 23.9942 17.0987Z" fill="#FF5F01"></path>
</svg>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
