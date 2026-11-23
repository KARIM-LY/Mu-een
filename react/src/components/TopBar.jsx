import heartPlus from '../assets/heart_plus.svg'
import location from '../assets/location_on.svg'
import notifications from '../assets/notifications.svg'
function TopBar() {
    const topBarStyle = { width: '100%', backgroundColor: '#0087CA', height: '70px', color: 'white', display: 'flex' }
    const topBarIconsStyle = { backgroundColor: "rgba(255,255,255,0.2)", borderRadius: '50%', height: '30px', width: '30px', padding: '10px' }
    const titleStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }
    const selfAlignLeft = {display: 'flex', alignSelf: 'flex-start', marginLeft: '10px', height: '100%', alignItems: 'center'}
const selfAlignRight = {
  display: 'flex',
    alignSelf: 'center',
  marginLeft: 'auto',
  marginRight: '10px',
  alignItems: 'center',
  backgroundColor: "rgba(255,255,255,0.2)",
  height: '40px',
  borderRadius: '20px',
  padding: '0 10px'
}

const selectStyle = {display:'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '16px', marginLeft: '5px'}
const optionStyle = { backgroundColor: 'white', color: 'black', fontSize: '16px' }
    return (
        <>
            <div style={topBarStyle}>

                <div style={selfAlignLeft}>

                    <img style={topBarIconsStyle} src={heartPlus} alt="Heart" />

                    <div style={titleStyle}>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>Mu'een</p>
                        <span>مُعين</span>
                    </div>
                </div>

                <div style={selfAlignRight}>
                    <div style={selectStyle}>
                        <img src={location} alt="Location" />
                        <select aria-label="Choose a city" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
                            <option value="tripoli" style={optionStyle}>Tripoli</option>
                            <option value="bengazi" style={optionStyle}>Bengazi</option>
                        </select>
                    </div>
                </div>
                <img style={{ ...topBarIconsStyle, alignSelf: 'center', marginRight: '10px' }} src={notifications} alt="Notifications" />
            </div>
        </>
    )
}

export default TopBar
