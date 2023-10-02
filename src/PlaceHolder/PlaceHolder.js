import styles from "./PlaceHolder.module.scss"

const PlaceHolder = ({
  type = 'text',
  rows = 4,
  style = {},
  loading = true,
  customPlaceholder,
  children
}) => {

  const getPlaceHolderComponent = (type, rows, style) => {
    switch(type) {
      case 'media':
        return <div style={style}>
          <PlaceHolder.Rectangle />
          <PlaceHolder.Text rows={rows - 1} />
          <PlaceHolder.Text rows={1} style={{width: '50%'}} />
        </div>
      case 'text':
        return <PlaceHolder.Text rows={rows} style={style} />
      case 'rect':
        return <PlaceHolder.Rectangle style={style} />
      case 'round':
        return <PlaceHolder.Round style={style} />
      default:
        return <PlaceHolder.Text rows={rows} style={style} />
    }
  }

  if (loading) {
    return customPlaceholder ?? getPlaceHolderComponent(type, rows, style)
  } 

  return children
}

PlaceHolder.Rectangle = ({ style = {} }) => {
  return <div className={styles.rectangle} style={style} />
}

PlaceHolder.Round = ({ style = {} }) => {
  return <div className={styles.round} style={style} />
}

PlaceHolder.Text = ({ style = {}, rows = 4 }) => {
  const renderedRows = []
  for(let start = 1; start <= rows; start++) {
    renderedRows.push(<div className={styles.row} style={style} />)
  }
  return renderedRows
}

export default PlaceHolder