import React from 'react'
import "./IndividualPanel.scss"
import BackupImage from "../../../assets/images/backup-image.png"

const IndividualPanel = (props) => {
  return (
    <>
        <div style={{backgroundImage:"url("+props.item.image.url+"),url("+BackupImage+")"}} className="image-individual-panel">
            <p className='text-individual-panel'>{props.item.name}</p>
        </div>
        <div className='overlay' style={{backgroundColor:props.item.biography.alignment==="good"?"#238a1ad7":"#bb2424c4"}}>
            
        </div>
    </>
  )
}

export default IndividualPanel