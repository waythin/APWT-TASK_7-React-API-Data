import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
       
    }

    const Table={
        
        // border: "collapse"
        border: "1"

    }

    return (
            <div style={PostStyle}>



                <span> ID :{props.Id}</span><br/>
                <span> Name :{props.Name}</span><br/>
                <span> Username :{props.Name}</span><br/>
                <span> Email :{props.Email}</span><br/>
                <span> Phone :{props.Phone}</span><br/>
                <br/><br/>
            </div>
                    
                    
    )

}
export default Post;