const ImgLinkCopy = ({ link, src, alt, ...rest }) => {
  // const { link, src, alt } = props
  console.log('Rest', rest)

  return (
    <a href={link} target='_blank'>
      <img src={src} className='logo' alt={alt} {...rest} />
    </a>
  )
}

export default ImgLinkCopy
