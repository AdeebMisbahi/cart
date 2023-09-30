import React from "react";
const Nav =(props)=> {
    
        return(
          <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" style={styles.cartIcon} />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
          </div>
        )
    
}
const styles = {
    nav:{
        backgroundColor:"lightBlue",
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:"relative",

    },
    cartIcon:{
        height:55,
        color: 'grey',
        marginRight:10
    
    },
    cartCount:{
        position:"absolute",
        left: 26,
        top: 10,
        fontWeight:'bold',
        padding:"0px 2px",
        boxShadow:'0px 2px 2px  0px rgba(0, 0, 0, 0.8)',
        borderRadius:"50px"
       
        
        
    }
}
export default Nav



