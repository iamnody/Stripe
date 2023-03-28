import { useLocation } from 'react-router-dom'

function Result() {
  const location = useLocation()

  if (location.pathname === '/success') {
    return (
      <>
        <div className='img'>
          <img src='/img/success.svg' alt='' />
        </div>
        <div className='result-text'>Your payment was successful</div>
        <div className='thank-text'>Thank you!</div>
      </>
    )
  }
  if (location.pathname === '/cancel') {
    return (
      <>
        <div className='img'>
          <img src='/img/cancel.svg' alt='' />
        </div>
        <div className='result-text'>Your payment failed</div>
      </>
    )
  }
}

export default function Success() {
  return (
    <div className='Stripe-result'>
      <Result />
    </div>
  )
}
