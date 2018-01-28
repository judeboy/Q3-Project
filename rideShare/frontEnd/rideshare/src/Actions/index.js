let concerts = [
  {
    id: 1,
    name: 'concert1',
    location: 'Boulder',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSCoHns8COJROdEYOo5IN_ZYFbjUqhG-q_sHiitUjYV0V6C1G',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
  {
    id: 2,
    name: 'concert2',
    location: 'Denver',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxVquEO4KgacSDbHPNKd_dJSvYdx8OoYQj5BuSvhppw-FXmStLA',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
  {
    id: 3,
    name: 'concert3',
    location: 'NewYork',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJJsC7Q-K_XqyNfRyjGHL2xibLaaFeClQ401CoX3w1oKRY25V',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
  {
    id: 4,
    name: 'concert4',
    location: 'Las Vegas',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kfyGFzJ8TbN2OKsI5-DFiZ4G20jaZZUTziWvLausd38uEVG2',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
  {
    id: 5,
    name: 'concert5',
    location: 'Los Angeles',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFpEMLvFWOf4xPqMEWjszhZk8H3z_SgzgKU5WASQuiUPnqyW_',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
  {
    id: 6,
    name: 'concert6',
    location: 'Texas',
    date: '2018-3-10',
    time: '10 am',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-0KZhZxmXL1fK_2EwF2tQqmnzWIrk-9yxj4nsOTeCcRGBtJioQ',
    body: "Blink-182 is an American rock band formed in Poway, California in 1992. Since 2015, the lineup of the band has consisted of bassist and vocalist Mark Hoppus, drummer Travis Barker, and guitarist and vocalist Matt Skiba",
  },
]
export const CONCERT_RECEIVED = 'CONCERT_RECEIVED'
export function fetchConcert() {
  return async (dispatch) => {
    dispatch({
      type: CONCERT_RECEIVED,
      concerts: concerts
    })
  }
}
export const OFFER_RIDE = 'OFFER_RIDE'
export function offerRide(e) {
  e.preventDefault()
  console.log(e.target.id)
  return async (dispatch) => {
    dispatch({
      type: OFFER_RIDE,
      id: e.target.id
    })
  }
}
