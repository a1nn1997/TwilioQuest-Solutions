const getLaserSetting = (a) => {
    if(a=="please")
    return "OFF";
    else
    return "ON";
}

console.log(getLaserSetting("OFF"));