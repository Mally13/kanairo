import React from 'react'

function HeroCampaign(events) {
  return (
    <div style={styles.slide}>
        <div style={styles.mainEvent}>
          <div style={[styles.eventContent, {background:`url(${events.image})`, backgroundSize:'cover'}]}>
            <div style={styles.eventDetails}>
                <h3 style={styles.title}>
                  {events.title}
                </h3>
                  <a href={events.cta.link} style={styles.cta}>
                    {events.cta.text}
                  </a>
            </div>
          </div>
        </div>
        <div style={styles.sideEvents}>
        <div style={styles.sideEventsMain}>
        {events.sideContent.map(event => (
          <div style={[styles.eventContent, {background:`url(${event.image})`, backgroundSize:'cover'}]} key={event.id}>
            <div style={styles.eventDetails}>
              <h3 style={styles.title}>
                {event.title}
              </h3>
              <a href={event.cta.link} style={styles.cta}>
                {event.cta.text}
              </a>
            </div>
          </div>
        ))}
        </div>
        <div style={styles.sideEventsSmall}>
            
        </div>
    </div>
  </div>
  )
}

export default HeroCampaign

const styles = {
    slide: {
        display:'flex',
        flexDirection:'row',
    },
    mainEvent: {
        flex: 0.6,
        display:'flex',
        flexDirection: 'column'
    },
    sideEvents: {
        flex:0.4,
        display:'flex',
        flexDirection: 'column'
    },
    sideEventsMain:{
        flex:0.5
    },
    sideEventsSmall: {
        flex:0.5
    },
    heroMsg:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    },
    title:{
      color:'#FFDC01',
      marginTop:'40px',
      fontSize:'32px'
    },
    msgP: {
      color: '#FFFFFF',
      marginTop:'24px',
      fontSize:'56px'
    }
  }
  