import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <div className="cart-wrapper">
        <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWBZvzbG2xVGoBK_ecazYSi_Yebggp6elc9XM3Lk&s" alt="" />
        </div>
        <div className="text-wrapper">
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className="btn-wrapper">
          <button>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Home
