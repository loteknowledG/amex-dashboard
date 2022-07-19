import { useEffect, useState } from 'react'
import { Screen } from '../../component/Screen'

export function Dashboard () {
  
  const [images, setImages] = useState([]);
  
  useEffect(() => {

      fetch("https://opensheet.elk.sh/140T_RC0SkBvEu48gkT3kXgX1rXDKQH_BZ92oDmYhWdg/Screens")
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
      fetch("https://translucent-ivy-elf.glitch.me/8drJ9bqJVFKbcTNX9")
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          setImages(data)
        })
  }, [])

  return (<>
    <Screen images={images} />
  </>) 
}
export default Dashboard