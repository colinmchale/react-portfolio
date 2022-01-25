import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  linkColor: {
    color: '#BA1200',
  }
}


function Footer () {
    return(
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
         <span className='ml-3' style={styles.fontColor}>Made by Colin McHale</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;



{/* <use xlink:href="#twitter"></use>
<use xlink:href="#instagram"></use>
<use xlink:href="#facebook"></use> */}