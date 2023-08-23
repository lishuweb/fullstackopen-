const Notification = ({ notification, status }) => {
    if(notification === null)
    {
        return null;
    }
    return <div className={status}>{notification}</div>
}

export default Notification;