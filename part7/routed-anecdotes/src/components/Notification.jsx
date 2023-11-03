const Notification = ({ notification }) => {
    console.log(notification, "notificationnnnnnnnnnn")
    
    const style = {
        border: "solid red",
        padding: 8,
        borderWidth: 4,
    };

    if (!notification) 
    {
        return null;
    }
    
    return(
        <div style={style}>
            {notification}
        </div>
    );
};

export default Notification;
