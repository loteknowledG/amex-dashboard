import React, { useState } from 'react'

export const Screen = ({images}) => {
  const [idx, setIdx] = useState(0)

  setTimeout(() => {
    //console.log(idx)
    setIdx(images.length > idx + 1 ? idx + 1 : 0)
  }
  , 2000);
  return (
    <img 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        'MozUserSelect': 'none',
        'WebkitUserSelect': 'none',
        'MsUserSelect': 'none'
      }} 
      onClick={() => {
        setIdx(images.length > idx + 1 ? idx + 1 : 0)
      }}
      src={ images.length > 0 ? images[idx] : '' } 
      alt={ idx } 
      loading="lazy"
    />
  )
}
export default Screen